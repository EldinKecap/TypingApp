let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, nam nemo, amet eaque expedita dignissimos nulla voluptate excepturi ex fugit totam fugiat. Quos itaque, vitae officiis nostrum veritatis dignissimos vero!';

function startTyping(){
    let typingBox = document.getElementById('typingBox');
    let arrOfSetTimeouts = [];

    if (typingBox.innerHTML != '') {
        arrOfSetTimeouts
    }

    typingBox.innerHTML = '';

    // scrambler
    // for (let i = 0; i < text.length; i++) {
    //     let timeoutTime = Math.floor(Math.random()*10000);
    //     setTimeout(()=>{
    //         typingBox.innerHTML = typingBox.innerHTML.concat(text[i]);
    //         i++;
    //         console.log(timeoutTime);
    //     },timeoutTime);
    // }
    //proper Output
    // let intervalTime = Math.random()*1000;
    // let i = 0;
    // let typingInterval = setInterval(()=>{
    //     intervalTime = Math.random()*10000;
    //     typingBox.innerHTML = typingBox.innerHTML.concat(text[i]);
    //     i++;
    //     if (i >= text.length) {
    //         clearInterval(typingInterval);
    //     }
    //     console.log(intervalTime);
    // },intervalTime)
    let i = 0;
    (function loop() {
        var rand = Math.round(Math.random() * 500);
        setTimeout(function() {
            typingBox.innerHTML = typingBox.innerHTML.concat(text[i]);
            i++;
            if (i >= text.length) {
                return;
            }
                loop();  
        }, rand);
    }());
    //Radi i nije modifikovano
    // (function loop() {
    //     var rand = Math.round(Math.random() * 500);
    //     setTimeout(function() {
    //         typingBox.innerHTML = typingBox.innerHTML.concat(text[i]);
    //         i++;
    //         if (i >= text.length) {
    //             return;
    //         }
    //             loop();  
    //     }, rand);
    // }());

//     function smth() {
//         var rand = Math.round(Math.random() * 10500);
//         setTimeout(function() {
//             typingBox.innerHTML = typingBox.innerHTML.concat(text[i]);
//             i++;
//             if (i >= text.length) {
//                 return;
//             }
//     });

// }
//     for (let j = 0; j < text.length; j++) {
//         smth();
//         console.log('bog');
//     }


}
