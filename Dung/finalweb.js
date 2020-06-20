let english = [
    ["What's up?", "Có chuyện gì vậy?"],
    ["How's it going?", "Dạo này ra sao rồi?"],
    ["What have you been doing? ", "Dạo này đang làm gì?"],
    ["Nothing much.", "Không có gì mới cả."],
    ["What's on your mind?", "Bạn đang lo lắng gì vậy?"],
    ["I was just thinking. ", "Tôi chỉ nghĩ linh tinh thôi."],
    ["I was just daydreaming", " Tôi chỉ đãng trí đôi chút thôi."],
    ["It's none of your business.", " Không phải là chuyện của bạn"],
    ["Is that so?", " Vậy hả?"],
    ["How come?", " Làm thế nào vậy?"],
    ["Absolutely! ", "Chắc chắn rồi!"],
    ["Definitely!", "Quá đúng!"],
    ["Of course! ", " Dĩ nhiên!"],
    ["You better believe it!", "Chắc chắn mà."],
    ["I guess so", "Tôi đoán vậy."],
    ["There's no way to know", " Làm sao mà biết được."],
    [' I can not say for sure','Tôi không thể nói chắc'],
    ['This is too good to be true!',' Chuyện này khó tin quá!'],
    [' No way! (Stop joking!)','Thôi đi (đừng đùa nữa).'],
    [' I got it.','Tôi hiểu rồi.'],
    ['Right on! (Great!)','Quá đúng!'],
    ['I did it! (I made it!) ','Tôi thành công rồi!'],
    ['Got a minute?','Có rảnh không?'],
    [' About when?','Vào khoảng thời gian nào?'],
    [' I will not take but a minute','Sẽ không mất nhiều thời gian đâu.'],
    [' Speak up!','Hãy nói lớn lên!'],
    [' Seen Melissa?','Có thấy Melissa không?'],
    [' Come here','Đến đây.'],
    [' Come over.',' Ghé chơi.'],
    ['Please go first. After you.',' Xin nhường đi trước. Tôi xin đi sau.'],
    ['Thanks for letting me go first','Cám ơn đã nhường đường.'],
    [' What a relief','Thật là nhẹ nhõm.'],
    ['What the hell are you doing?','Anh đang làm cái quái gì thế kia?'],
    ['I know I can count on you','Tôi biết mình có thể trông cậy vào bạn mà.'],
    ['Get your head out of your ass! ',' Đừng có giả vờ khờ khạo!'],
    ['Do as I say','Làm theo lời tôi.'],
    ['This is the limit! ','Đủ rồi đó!'],
    [' Explain to me why','Hãy giải thích cho tôi tại sao'],
    ['Ask for it! ','Tự mình làm thì tự mình chịu đi!'],
    ['In the nick of time','Thật là đúng lúc.'],
    ['No litter.','Cấm vứt rác.'],
    [' Go for it!','Cứ liều thử đi!'],


];


var sec = 180,
    countDiv = document.getElementById("timer"),
    secpass,
    countDown = setInterval(function () {
        'use strict';

        secpass();
    }, 1000);


function secpass() {
    'use strict';

    var min = Math.floor(sec / 60),
        remSec = sec % 60;

    if (remSec < 10) {

        remSec = '0' + remSec;

    }
    if (min < 10) {

        min = '0' + min;

    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {

        sec = sec - 1;

    } else {

        clearInterval(countDown);

        countDiv.innerHTML = 'Time up!';

    }

};

let boxs = document.getElementsByClassName("box");


let wordIndex = [];
while(wordIndex.length < 16){
    let temp = Math.floor(Math.random() * 40);
    if(wordIndex.includes(temp)== false){
        wordIndex.push(temp)
    }
}
console.log(wordIndex);


let boxIndexForE = [];
while(boxIndexForE.length <= 15){
    let temp = Math.floor(Math.random() * 32);
    if(boxIndexForE.includes(temp) == false){
        boxIndexForE.push(temp);
    }
}
console.log(boxIndexForE);

let boxIndexForV = [];
while(boxIndexForV.length <= 15){
    let temp = Math.floor(Math.random() * 32);
    if(boxIndexForV.includes(temp) == false && boxIndexForE.includes(temp) == false){
        boxIndexForV.push(temp);
    }
}
console.log(boxIndexForV);


for(let i = 0; i < 16; i++){
    boxs[boxIndexForE[i]].textContent = english[wordIndex[i]][0];
    boxs[boxIndexForV[i]].textContent = english[wordIndex[i]][1];
}


