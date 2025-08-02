const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const seq11 = marvel_heros.concat(dc_heros)
// console.log(seq11);

// spread(...) operator
const seq = [...marvel_heros, ...dc_heros]
// console.log(seq);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const res = another_array.flat(Infinity)
// console.log(res);

console.log(Array.isArray("Praveen"));
console.log(Array.from("Praveen"));

console.log(Array.from({name : "Praveen"}));


let s1 = 10
let s2 = 20
let s3 = 30

console.log(Array.of(s1,s2,s3));

