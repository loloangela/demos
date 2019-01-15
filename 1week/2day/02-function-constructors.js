function Bike(frontGears, backGears, material) {
  this.frontGears = frontGears;
  this.backGears = backGears;
  this.material = material;

  this.ride = () => {
    console.log('you ride the bike');
  }
}

let myBike = new Bike(3, 7, 'carbon');
let otherBike = new Bike(1, 7, 'steel');
console.log(myBike);
console.log('otherBike: ', otherBike);

myBike.ride();