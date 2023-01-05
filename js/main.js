let b1 = document.getElementById('box-head-5');
let outerdiv = document.querySelector('.carbox-outer');
let box = document.querySelector('.boxhead-5');
let boxp = document.querySelector('.box-head-5-desc1'); 
let boxarrow = document.querySelector('.btn-arrow') 

b1.addEventListener("click",function(){
    console.log("hey");
    outerdiv.classList.toggle('carbox-outer2');
    box.classList.toggle('boxheadmob-5');
    boxp.classList.toggle('boxheadmob-p-5')
    boxarrow.classList.toggle('btn-arrow-mb')
});


