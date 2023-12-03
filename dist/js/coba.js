const btn1=$('#btn');
const close=$('#close');
const closeb=$('#closeb')
const modalBox=$('#modal-box');
const boxModal=$('#box-modal');
const bg=$('#bg')
btn1.click(function(){
    bg.show(1991)
    modalBox.fadeIn(1990)
})
closeb.click(function(){
    modalBox.hide(3000)
    bg.hide(2999)
})
