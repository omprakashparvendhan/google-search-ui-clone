
let a = {
  name: "Om Prakash",
  skill: "Java",
  experience: 4
};

let b = {
  name: "Kani Mozhi",
  skill: "Crack Head",
  experience: 25
};


function compareExperience(nextObjectExp) {
  return this.experience >= nextObjectExp;
}

Function.prototype.compareExperienceBind = function(currentObj, otherObj) {
  var func = this;
  if(!otherObj.experience) {
    console.log("WARNING: experience is null");
  }
  return func.bind(currentObj, otherObj.experience);
}


var compareExperiences = compareExperience.compareExperienceBind(b, a);
console.log(compareExperiences());
