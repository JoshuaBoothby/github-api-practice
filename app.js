"use strict";
// Part 1: 1
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log("Response Data:", data);

    if (data.length > 0) {
      console.log("Title of the First Post:", data[0].title);
    } else {
      console.log("No posts available.");
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// Part 1: 2
async function getGitPost() {
  const options = {
    method: "POST",
    title: "Hello GitHub",
    body: "This is a sample post",
    userId: 1,
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getGitPost();

// Part 2: 1
async function fetchGitHubUserInfo(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    console.log(`Username: ${data.login}`);
    console.log(`Public Repos: ${data.public_repos}`);
    console.log(`Profile: ${data.html_url}`);
  } catch (error) {
    console.log(error);
  }
}

fetchGitHubUserInfo("JoshuaBoothby");

// Part 2: 2
async function listGitHubUserRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();

    console.log("First five repositories:");
    for (let i = 0; i < 5 && i < data.length; i++) {
      console.log(`${i + 1}. ${data[i].name}`);
    }
  } catch (error) {
    console.log(error);
  }
}

listGitHubUserRepos("JoshuaBoothby");
