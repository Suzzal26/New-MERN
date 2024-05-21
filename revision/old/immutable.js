/* const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names
const names = characters.map(characters => characters.name);
console.log(names);


// Get an array of all heights
const heights=characters.map(characters=>characters.height);
console.log(heights);

// Get an array of objects with just name and height properties
const properties=characters.map(characters=>{
    return{
        name:characters.name,
        height:characters.height
    }
})
console.log(properties);

// Get an array of all first names
const firstName=characters.map(character=>{
    return character.name.split(' ')[0];
})
console.log(firstName)

// REDUCE
// Get the total mass of all characters
const masse=characters.reduce((accumulators,characters)=>{
    return accumulators+parseInt(characters.mass);
},0)
console.log(masse)

// Get the total height of all characters
const heightss=characters.reduce((accumulators,characters)=>{
    return accumulators+parseInt(characters.height);
},0)
console.log(heightss)

// Get the total number of characters in all the character names
const namess=characters.reduce((accumulators,characters)=>{
    return accumulators+characters.name.length;
},0)
console.log(namess)

// Get the total number of characters by eye color (hint. a map of eye color to count)
const eyeColors=characters.reduce((eyeMap,characters)=>{
    eyeMap[characters.eye_color] = (eyeMap[characters.eye_color] || 0) + 1;
    return eyeMap;
}, {});
console.log(eyeColors) */



