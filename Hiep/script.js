const data = [['1', 'one'], ['2', 'two'],
              ['3', 'three'], ['4', 'four'],
              ['5', 'five'], ['6', 'six'],
              [7, 'seven'], [8, 'eight'],
              [9, 'nine'], [10, 'ten'],
              [11, 'eleven'], [12, 'twelfth'],
              [13, 'thirdteen'], [14, 'fourteen'],
              [15, 'fifteen'], [16, 'sixteen'],
              [17, 'seventeen'], [18, 'eightteen'],
              [19, 'nineteen'], [20, 'twenty']
            ];
let boxs = document.getElementsByClassName('box');


//get random data with length = 6
let wordIndex = [];
while(wordIndex.length < 6){
    let temp = Math.floor(Math.random() * 20);
    if(wordIndex.includes(temp)== false){
        wordIndex.push(temp);
    }
}
console.log(wordIndex);

//random box with no duplicate
let boxIndexForE = [];
while(boxIndexForE.length <= 5){
    let temp = Math.floor(Math.random() * 12);
    if(boxIndexForE.includes(temp) == false){
        boxIndexForE.push(temp);
    }
}
console.log(boxIndexForE);

let boxIndexForV = [];
while(boxIndexForV.length <= 5){
    let temp = Math.floor(Math.random() * 12);
    if(boxIndexForV.includes(temp) == false && boxIndexForE.includes(temp) == false){
        boxIndexForV.push(temp);
    }
}
console.log(boxIndexForV);
// render data

for(let i = 0; i < 6; i++){
    boxs[boxIndexForE[i]].textContent = data[wordIndex[i]][0];
    boxs[boxIndexForV[i]].textContent = data[wordIndex[i]][1];
}
