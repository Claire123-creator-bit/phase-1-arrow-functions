// Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function called square
const square = (x) => x * x;

// Arrow function called add
const add = (a, b) => a + b;

// Function expression
const saturdayFun = function(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

// Function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Arrow function that returns a function
const wrapAdjective = (flair = "*") => {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
};

