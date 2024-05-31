import axios from 'axios';
import moment from 'moment';
const TOKEN = process.env.REACT_APP_GITHUB_ORG_ACCESS_TOKEN;

const getGraphQLQuery = (username, from, to) => {
  return {
    query: `
      query userInfo($LOGIN: String!, $FROM: DateTime!, $TO: DateTime!) {
        user(login: $LOGIN) {
          name
          contributionsCollection(from: $FROM, to: $TO) {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      LOGIN: username,
      FROM: from,
      TO: to,
    },
  };
};

const fetchGraphQLData = async (graphQLQuery) => {
  return axios({
    url: 'https://api.github.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
    },
    data: graphQLQuery,
  });
};

const fetchContributions = async (username) => {
  const now = moment();
  const from = moment(now).subtract(30, 'days').utc().toISOString();
  const to = moment(now).add(1, 'days').utc().toISOString();
  
  try {
    const graphQLQuery = getGraphQLQuery(username, from, to);
    const apiResponse = await fetchGraphQLData(graphQLQuery);

    if (apiResponse.data.data.user === null) {
      return `Can't fetch any contribution. Please check your username 😬`;
    } else {
      const userData = {
        contributions: [],
        name: apiResponse.data.data.user.name,
      };

      const weeks = apiResponse.data.data.user.contributionsCollection.contributionCalendar.weeks;
      console.log('apiResponse.data', apiResponse)

      weeks.forEach((week) =>
        week.contributionDays.forEach((contributionDay) => {
          contributionDay.date = moment(contributionDay.date, moment.ISO_8601).date().toString();
          userData.contributions.push(contributionDay);
        })
      );

      const length = userData.contributions.length;
      if (userData.contributions[length - 1].contributionCount === 0) {
        userData.contributions.pop();
      }
      const extra = userData.contributions.length - 31;
      userData.contributions.splice(0, extra);
      return userData;
    }
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
};

export default fetchContributions;
