var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
  {
    username: "Sally",
    password: "123",
  },
  {
    username: "Ingrid",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning",
  },
  {
    username: "Sally",
    timeline: "JS is cool!",
  },
  {
    username: "Mitch",
    timeline: "JS is nice!",
  },
];
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Wrong Username and Password");
  }
}

signIn(userNamePrompt, passwordPrompt);
