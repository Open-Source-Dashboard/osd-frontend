// File not in use

// const axios = require('axios');

// async function getCommitsSortedByDate(username, token) {
//     try {
//         // Set up the headers with your personal access token
//         const headers = {
//             'Authorization': `token ${token}`,
//             'Accept': 'application/vnd.github.cloak-preview'
//         };

//         // Define the parameters for sorting by author date in descending order
//         const params = {
//             q: `author:${username} sort:author-date-desc`
//         };

//         // Make the GET request to the GitHub search commits API endpoint
//         const response = await axios.get('https://api.github.com/search/commits', { headers, params });

//         if (response.status === 200) {
//             return response.data.items;
//         } else {
//             throw new Error(`Query failed with status code: ${response.status}`);
//         }
//     } catch (error) {
//         throw new Error(`An error occurred: ${error.message}`);
//     }
// }

// // Usage
// const username = 'GITHUB_USERNAME';  // Replace with the GitHub username
// const token = 'YOUR_ACCESS_TOKEN';   // Replace with your GitHub personal access token

// getCommitsSortedByDate(username, token)
//     .then(commits => {
//         commits.forEach(commit => {
//             console.log(commit.commit.author.date, commit.commit.message);
//         });
//     })
//     .catch(error => {
//         console.error(error.message);
//     });
