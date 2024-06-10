import axios from 'axios';
import moment from 'moment';

const TOKEN = process.env.REACT_APP_GITHUB_ORG_ACCESS_TOKEN;

const getGraphQLQuery = (username, from, to) => ({
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
});

const fetchGraphQLData = async (graphQLQuery) => {
  try {
    return await axios({
      url: 'https://api.github.com/graphql',
      method: 'POST',
      headers: {
        Authorization: `bearer ${TOKEN}`,
      },
      data: graphQLQuery,
    });
  } catch (error) {
    console.error('GraphQL fetch error:', error);
    throw error;
  }
};

const fetchContributions = async (username) => {
  const now = moment();
  const from = moment(now).subtract(30, 'days').utc().toISOString();
  const to = moment(now).add(1, 'days').utc().toISOString();

  try {
    const graphQLQuery = getGraphQLQuery(username, from, to);
    const apiResponse = await fetchGraphQLData(graphQLQuery);

    const user = apiResponse.data.data.user;
    if (!user) {
      return `Can't fetch any contribution. Please check your username 😬`;
    }

    const userData = {
      contributions: [],
      name: user.name,
    };

    user.contributionsCollection.contributionCalendar.weeks.forEach((week) =>
      week.contributionDays.forEach((contributionDay) => {
        contributionDay.date = moment(contributionDay.date, moment.ISO_8601).date().toString();
        userData.contributions.push(contributionDay);
      })
    );

    if (userData.contributions.length > 0 && userData.contributions[userData.contributions.length - 1].contributionCount === 0) {
      userData.contributions.pop();
    }

    const extra = userData.contributions.length - 31;
    userData.contributions.splice(0, extra);

    return userData;
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return error;
  }
};

export default fetchContributions;
