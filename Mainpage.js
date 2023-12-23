let mysong = document.querySelector('#mysong');
let icon = document.querySelector('#icon')
icon.onclick = function(){
    
    if(mysong.paused){
        mysong.play();
        icon.src = "Pause-button.png";
    
    } else {
        mysong.pause();
        icon.src = "Play-button.jpg";
    }
}
let menuBox = document.querySelector('#menuBox');
let menuIcon = document.querySelector('#menuIcon');

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");
}

let textelement = document.querySelector('#Text');
let Text = 'Le Tourisme . . .  Autrement.'
let index = 1 
writeText()
function writeText(){
    textelement.innerText = Text.slice(0,index);
    index++
    if(index > Text.length) { index=1}
    setTimeout(writeText, 170);
}
let Events = document.querySelectorAll('.Event');
Events.forEach((Event)=>{

    Event.addEventListener('click',()=>{
    removeActiveClasses()
    Event.classList.add('active')
 })
})

function removeActiveClasses(){
    Events.forEach(Event => {
        Event.classList.remove('active')
    })
    }

let left = document.querySelector('.BPmaisondhote');
let right = document.querySelector('.BPcamping');
let mainpageBonsplans = document.querySelector('.mainpageBonsplans');

left.addEventListener('mouseenter', () => mainpageBonsplans.classList.add('hover-left') )
left.addEventListener('mouseleave', () => mainpageBonsplans.classList.remove('hover-left') )
right.addEventListener('mouseenter', () => mainpageBonsplans.classList.add('hover-right') )
right.addEventListener('mouseleave', () => mainpageBonsplans.classList.remove('hover-right') )



var btn = document.getElementsByClassName("btn");
let slide = document.querySelector('#slide');
btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");

}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");


}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)"
    for(i=0;i<4;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}


let popup = document.getElementById("popup");


function openPopup(){

    popup.classList.add("open-popup")


}
function closePopup(){

    popup.classList.remove("open-popup")


}





