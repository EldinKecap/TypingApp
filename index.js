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
        var rand = Math.round(Math.random() * 300);
        setTimeout(function() {
            newElement.innerHTML = newElement.innerHTML.concat(text[i]);
            i++;
        
            if (i >= text.length) {
                return;
            }
                loop();  
        }, rand);
    };

    loop();

}

let typeOutBtn = document.getElementById('typeOut');
console.log(typeOutBtn);
typeOutBtn.addEventListener('click',()=>{
    startTyping()
});