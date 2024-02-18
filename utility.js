
function getElementById(id){
   const getElement = document.getElementById(id).innerText;
   return getElement;
}
function setElementById(id,value){
    document.getElementById(id).innerText = value;
}

function setBgColor(id){
    const element = document.getElementById(id);
    element.style.background = "green";
    element.style.color = "white";
    console.log(element);

}




