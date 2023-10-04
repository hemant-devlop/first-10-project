const btn=document.querySelector(".color-btn");
const body=document.body;
const text=document.querySelector(".head-span");
genrateRamdomColor=()=>{
    red=Math.floor(Math.random()*256)
    green=Math.floor(Math.random()*256)
    blue=Math.floor(Math.random()*256)
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}
btn.addEventListener('click',()=>{
    const randomColor=genrateRamdomColor();
    body.style.backgroundColor=randomColor;
    text.textContent=randomColor
    
})


