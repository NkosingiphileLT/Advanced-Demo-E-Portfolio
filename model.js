let isModelOpen = false;
function toggleModel(){
    if(isModelOpen){
        isModelOpen = false;
 return document.body.classList.remove("model--open"); 
}
isModelOpen = true;
document.body.classList += "model--open"
}

let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
      document.body.classList += "dark--theme"  
    }
    else{
        document.body.classList.remove("dark--theme")
    }
}

const scaleFacctor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFacctor;
    const y = event.clientY * scaleFacctor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt})`
    }
}