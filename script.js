//1.

const users = ['Mike', 'Nikola', 'Tom'];
console.log(users[2]);
users[1] = 'Alex';
users.length = 1;
console.log(users.length);

//2.

const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];

function compare(arr1, arr2) {
  const minLength = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < minLength; i++) {
    if (arr1[i] > arr2[i]) {
      console.log(`a[${i}] > b[${i}]`);
    } else if (arr1[i] < arr2[i]) {
      console.log(`a[${i}] < b[${i}]`);
    } else {
      console.log(`a[${i}] = b[${i}]`);
    }
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

function selectedAge(arr){
  
}