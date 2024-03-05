// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("go swimming"));

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

mondayWork();

function wrapAdjective(sign = "*") {
  return function (whatever = "special") {
    return `You are ${sign}${whatever}${sign}!`;
  };
}
