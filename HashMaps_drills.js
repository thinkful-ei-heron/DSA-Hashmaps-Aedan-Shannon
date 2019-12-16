let HashMap = require('./HashMap');


let data= [{ 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
{ 'Wizard': 'Gandolf' }, { 'Human': 'Aragon' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
{ 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
{ 'Ent': 'Treebeard' }];

function main() {

    const lotr = new HashMap();

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    for(let i = 0; i < data.length; i++) {
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


const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
};

main();