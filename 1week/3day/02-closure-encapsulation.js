
function Bike(numSpeeds, material) {
  let numberSpeeds = numSpeeds;
  let bikeMaterial = material;

  this.getNumberSpeeds = () => {
    return numberSpeeds;
  }

  this.setNumberSpeeds = (numSpeeds) => {
    numberSpeeds = numSpeeds;
  }

  this.getBikeMaterial = () => {
    return bikeMaterial;
  }

  this.setBikeMaterial = (material) => {
    bikeMaterial = material;
  }
}

let myBike = new Bike(21, 'titanium');
console.log(myBike.getNumberSpeeds());
