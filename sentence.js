console.log('Click the button to get a randomized book idea!');

let genre = ['action', 'adventure', 'comedy', 'crime thriller', 'mystery', 'fantasy', 'historical fiction', 'horror', 'romance', 'science fiction', 'cyberpunk', 'romance'];
let gender = ['woman', 'girl', 'man', 'boy'];
let names = ['Lena', 'Kai', 'Amara', 'Jasper', 'Zoe', 'Milo', 'Sage', 'Nova', 'Elio', 'Rhea',
    'Aria', 'Theo', 'Isla', 'Ezra', 'Luna', 'Orion', 'Freya', 'Leo', 'Nina', 'Rowan',
    'Ivy', 'Silas', 'Ayla', 'Nico', 'Wren', 'Juno', 'Felix', 'Mira', 'Asher', 'Skye',
    'Eden', 'Atlas', 'Maeve', 'Rory', 'Dahlia', 'Cassian', 'Lyra', 'Kieran', 'Phoebe', 'Bodhi',
    'Cleo', 'Rafael', 'Talia', 'Hugo', 'Selene', 'Lucian', 'Indira', 'Caius', 'Zara', 'Finn'];
let forces = ['An evil tyrant or oppressive ruler', 'A corrupt system or government',
    'Time', 'Nature', 'A powerful monster or creature', 'Loss or grief',
    'Societal norms or expectations', 'Addiction or obsession',
    'Destiny or prophecy', 'Technology', 'artificial intelligence',
    'A mysterious illness or curse', 'The unknown', 'The void', 'evil',
    'love', 'humanity', 'the world', 'themselves', 'their inner demons', 'bureaucracy', 'their evil nemissis that was previously their best friend', 'their evil nemissis', 'mysterious circumstances', 'invisible ninjas'];

function randomizeArr(arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    let randArr = arr[randNum];
    return randArr;
} 

let newGenre = randomizeArr(genre);
let newGender = randomizeArr(gender);
let newName = randomizeArr(names);
let newForces = randomizeArr(forces);

console.log(`You should write a ${newGenre} story about a ${newGender} named ${newName} that fights the forces of ${newForces} and Saves the day!`)