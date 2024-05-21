/* // Define the Car object
const Car = {
    name: "Toyota",
    model: "Camry",
    age: 2022 - 2018, 
    // Method to calculate the age of the car
    calculateAge: function() {
      return new Date().getFullYear() - this.age;
    }
  };
  
  // Accessing the properties of the Car object
  console.log("Car Name:", Car.name);
  console.log("Car Model:", Car.model);
  console.log("Car Age:", Car.age, "years");
  
  // Calculating the current age of the car
  console.log("Current Age of the Car:", Car.calculateAge(), "years");

  
 
//Is roleB role included in roleA>false
//Write a js fuction to check if roleB is include in roleA

const roleA=["admin","manager"];
const roleB=["user","receptionist"]
const check=(roleA,roleB)=roleB.every(role => roleA.includes(role))

console.log(check(roleA,roleB)) */

/* const people=[
    {name:"raktim",age:30},
    {name:"bidhan",age:20},
    {name:"dev",age:50}
];

const sorting=people.sort((a,b)=>a.age-b.age)
console.log(sorting); */

