let updateLi = (e) => {
    let display = document.getElementById(e).style.display;
    if(display == "none"){
       document.getElementById(e).style.display = 'block';      
    }else{
       document.getElementById(e).style.display = 'none';      
    }
};