
 function updateText(){
    let typedText = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = typedText;
 }    
  
  function makeBold(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
}
  
  function makeItalic(elem){
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  function makeUnderline(elem){
    elem.classList.toggle('active');
    let underText = document.getElementById('text-output');
    if (underText.classList.contains("underline")){
        underText.classList.remove("underline")
    } else {
        underText.classList.add("underline")
    }
  }
  
  
  function alignText(elem, alignType){

    document.getElementById('text-output').style.textAlign = alignType;
    let button = document.getElementsByClassName('align');
    for (let index = 0; index < button.length; index++) {
      button[index].classList.remove('active')
    }
    elem.classList.toggle('active');
  }

function cleartheText () {
  document.getElementById('text-input').value = "";
  document.getElementById('text-output').innerText = "";
}