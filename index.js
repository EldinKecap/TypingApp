async function fetchData() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    let data = await response.json();
    console.log(data);
    return data;
}

async function startTyping(){
    let typingBox = document.getElementById('typingBox');
    let text = await fetchData();
    text = text.joke
    let i = 0;
    let newElement = document.createElement('p');
    typingBox.appendChild(newElement)
    function loop() {
        var rand = Math.round(Math.random() * 250);
        setTimeout(function() {
            newElement.innerHTML = text.slice(0,i);
            i++;
            if (rand > 240) {
                let letters = ['a','e','i','o','u'];
                newElement.innerHTML = newElement.innerHTML.concat(letters[Math.floor(Math.random()*4)]);
                
                i-=2;             
            }
            
            
            if (i >= text.length) {
                return;
            }
                loop();  
        }, rand);
    };

    loop();

}

async function fastTyping(){
    let typingBox = document.getElementById('typingBox');
    let text = await fetchData();
    text = text.joke
    let i = 0;
    let newElement = document.createElement('p');
    typingBox.appendChild(newElement)
    function loop() {
        var rand = Math.round(Math.random() * 100);
        setTimeout(function() {
            newElement.innerHTML = text.slice(0,i);
            i++;
            if (rand > 95) {
                let letters = ['a','e','i','o','u'];
                newElement.innerHTML = newElement.innerHTML.concat(letters[Math.floor(Math.random()*4)]);  
                i-=2;             
            }
            
            
            if (i >= text.length) {
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
    startTyping()
});

let typeOutFastBtn = document.getElementById('typeOutFast');
// console.log(typeOutBtn);
typeOutFastBtn.addEventListener('click',()=>{
    fastTyping()
});