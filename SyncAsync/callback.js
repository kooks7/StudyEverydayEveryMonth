console.log("코드시작!");
const user = getUser(1);
const UserCallback = getUserCallback(1, user => {
  getRepo(user.githubID, repo => {
    console.log(repo);
  });
});
console.log(user);
console.log("코드 끝!");

function getUser(id) {
  //DB 접속해서 유저 찾는 함수
  const user = [{ id: 1, githubID: "MJ" }, { id: 2, githubID: "KIM" }];
  let user;
  setTimeout(() => {
    user = user.find(user => user.id === id);
  }, 2000);
  return user;
}

function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}

function getRepo(githubID, callback) {
  const repos = [
    { githubID: "kim", commitsID: 1 },
    { githubID: "MJ", commitsID: 2 }
  ];
  setTimeout(() => {
    const repo = users.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}

function getCommits(commitID, callback) {
  const commits = [
    { commitID: 1, contents: "HI" },
    { commitID: 2, contents: "반갑습니다" }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitID === commitID);
    callback(commit);
  }, 2000);
}
