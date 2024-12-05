// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  const drivers = [
    { name: "Sam", hometown: "Seattle" },
    { name: "Sally", hometown: "Portland" },
    { name: "Sarah", hometown: "New York" },
    { name: "john", hometown: "Austin" },
  ];
  
  console.log(findMatching(["Sam", "Sally", "Sarah"], "sally")); // ["Sally"]
  console.log(fuzzyMatch(["Sam", "Sally", "Sarah"], "Sa")); // ["Sam", "Sally", "Sarah"]
  console.log(matchName(drivers, "Sam")); // [{ name: "Sam", hometown: "Seattle" }]
        