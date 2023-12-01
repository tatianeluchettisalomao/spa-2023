//console.log("Funciona!!!");

//let el= document.querySelector('#txtExemplo');
    //el.addEventListener('focusout',function(e) {

    

//console.log(e.target.value);
//document.querySelector('#txtClone').value=e.target.value;
//});
//console.log(el)
document.querySelector('#txtExemplo').addEventListener('keydown',function(e){
    document.querySelector('#txtClone')
    .value=e.target.value;

})