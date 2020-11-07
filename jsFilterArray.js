const f1Racers = [
    {
        name: "Max Verstappen",
        age: 23,
        team: "Red Bull Racing"
    },
    {
        name: "Lewis Hamilton",
        age: 35,
        team: "Mercedes"
    },
    {
        name: "Daniel Ricciardio",
        age: 31,
        team: "Renault"
    },
    {
        name: "Carlos Sainz",
        age: 26,
        team: "McLaren"
    },
    {
        name: "Charles Leclerc",
        age: 23,
        team: "Ferrari"
    }
];

// ===== Example 1 ===== //
const max = f1Racers.filter(function(driver) {
    return driver.name === "Max Verstappen";
});

console.log(max);

const maxES6 = f1Racers.filter(driver => driver.name === "Max Verstappen");

console.log(maxES6);

// ===== Example 2 ===== //

const nonRenault = f1Racers.filter(drivers => drivers.team !== "Renault");

console.log(nonRenault);

const nonRenaultNonES6 = f1Racers.filter(function (drivers) {
   return drivers.team !== "Renault";
});

console.log(nonRenaultNonES6)

// ===== Example 3 ===== //

const age = f1Racers.filter(drivers => drivers.age > 30);

console.log(age);

const ageNonES6 = f1Racers.filter(function(drivers) {
   return drivers.age > 30;
});

console.log(ageNonES6);
