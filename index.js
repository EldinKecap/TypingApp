async function fetchData() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    let data = await response.json();
    console.log(data);
    return data;
}

async function startTyping(typingTime){
    let typingBox = document.getElementById('typingBox');
    let userInput = document.getElementById('userInput');
    let text = userInput.value;
    userInput.value = '';
    console.log(text);
    if (text == '') {
        text = await fetchData();
        text = text.joke
    }
    let i = 0;
    let newElement = document.createElement('p');
    let blinker = document.createElement('span');
    blinker.innerHTML = '|';
    typingBox.appendChild(newElement);
    console.log(typingTime-typingTime/100*5);
    function loop() {
        var rand = Math.round(Math.random() * typingTime);
        setTimeout(function() {
            i++;
            newElement.innerHTML = text.slice(0,i);
            newElement.appendChild(blinker);
            if (rand > typingTime-typingTime/100*5) {
                let letters = ['a','e','i','o','u'];
                newElement.removeChild(blinker);
                newElement.innerHTML = newElement.innerHTML.concat(letters[Math.floor(Math.random()*4)]);
                newElement.appendChild(blinker);
                i--;             
            }
            
            
            if (i >= text.length) {
                blinker.className = 'blink';
                return;
            }
                loop();  
        }, rand);
    };
    
    loop();
    
}


let typeOutBtn = document.getElementById('typeOut');
// console.log(typeOutBtn);
typeOutBtn.addEventListener('click',()=>{
    startTyping(250)
});

let typeOutFastBtn = document.getElementById('typeOutFast');
// console.log(typeOutBtn);
typeOutFastBtn.addEventListener('click',()=>{
    startTyping(150)
});

let typeOutSlowBtn = document.getElementById('typeOutSlow');
// console.log(typeOutBtn);
typeOutSlowBtn.addEventListener('click',()=>{
    startTyping(500);
});

let modeSlider = document.getElementById('mode');
modeSlider.addEventListener('click',()=>{
    let modeButton = document.getElementById('modeButton');
    let cssLink = document.getElementById('cssLink');
    if (cssLink.getAttribute('href').includes('LM')) {
        modeButton.style.animationName='slideDM';
        cssLink.setAttribute('href','./styleDM.css');
    }else{
        modeButton.style.animationName='slideLM';
        cssLink.setAttribute('href','./styleLM.css');
    }
});