let check = document.getElementById("mode");
let root = document.documentElement;



const mode = ()=>{
   
    if(check.checked === true){
        root.style.setProperty('--bgColor','#cfcfcf');
}else if (check.checked == false){
    root.style.setProperty('--bgColor', '#eee')
}

}
document.addEventListener('click',mode);