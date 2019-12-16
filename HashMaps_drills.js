let HashMap = require('./HashMap');


let data = [{ 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
  { 'Wizard': 'Gandolf' }, { 'Human': 'Aragon' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
  { 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
  { 'Ent': 'Treebeard' }];

function main() {

  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  for (let i = 0; i < data.length; i++) {
    Object.keys(data[i]).forEach(key => {
      lotr.set(key, data[i][key]);
    });
  }

  console.log(lotr);
  lotr._hashTable.forEach(index => console.log(index));



  // What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
  // key of Maiar = Sauron
  // key of Hobbit = Frodo
  // the reasoning for the two is the two keys are the same. thus overriding the previous value. If they had separate keys it wouldn't have this problem.

  // capacity =24 because of the _resize method. It multiplies the capacity by the size_ratio so 8 * 3 = 24. 



  WhatDoesThisDo();

  // Because of the aforementioned property of HashMaps because the Key is not different the values are being overwritten. 



}


const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// main();


//number 3
// part1:
// 22 88 empty empty 4 15 28 17 59 31 10
//part 2:
// empty, 28-19-10, 20, 12, empty, 5, 15-33, empty, 17

function duplicate(string) {
  let hashMap = new HashMap();
  for (let i = 0; i < string.length; i++) {
    hashMap.set(string[i], string[i]);
  }
  let result = '';
  for (let i = 0; i < hashMap._hashTable.length; i++) {
    if (hashMap._hashTable[i]) {
      result += hashMap._hashTable[i].value;
    }
  }
  //in order?
  let sortedResult = '';
  for (let i = 0; i < string.length; i++) {
    if (result.includes(string[i]) && !sortedResult.includes(string[i])) {
      sortedResult += string[i];
    }
  }
  return sortedResult;
}

// console.log(duplicate('google all that you think can think of'));


function palindrome(string) {
  let hashMap = new HashMap();
  let odd = 0;
  let hashMapValue= null;
  for (let i = 0; i < string.length; i++) {
    try {
      hashMapValue = hashMap.get(string[i]);
    }
    catch (err) {
      hashMapValue = null;
    }
    if (!hashMapValue) {
      hashMap.set(string[i], 1);
      odd++;
    }
    else if (hashMapValue.value % 2 === 0) {
      hashMap.set(string[i], hashMapValue.value++);
      odd++;
    }
    else {
      hashMap.set(string[i], hashMapValue.value++);
      odd--;
    }
  }
  if (odd <= 1) {
    return true;
  }
  return false;
}

console.log(palindrome('acecarr'));