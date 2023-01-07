//1.

const names = ['Mike', 'Nikola', 'Tom'];
console.log(names[2]);
names[1] = 'Alex';
names.length = 1;
console.log(names.length);

//2.

const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];

function compare(arr1, arr2) {
  if (arr1.length > arr2.length) {
    console.log(`a > b`);
  } else if (arr1.length < arr2.length) {
    console.log(`a < b`);
  } else {
    console.log(`a = b`);
  }
}

compare(a, b);

//3.

let phrase = 'I am learning JavaScript right now';

const array = phrase.split(' ');
console.log(array);

//4.

const array1 = [5, 3, 8, 5, 3, 2, 1, 2];
const array2 = [];

array1.forEach((value, index) => {
  array2[index] = value;
});
console.log(array2);

//5.

const users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function selectedAge(arr) {}
