let check = document.getElementById("mode");



const mode = ()=>{
    if(check.checked === true){
        document.querySelector('body').style.backgroundColor = '#cfcfcf';
}else if (check.checked == false){
    document.querySelector('body').style.backgroundColor = '#eee';
}

}
document.addEventListener('click',mode);