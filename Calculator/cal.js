const  equal=document.querySelector('.btn-equal')
const  button=document.querySelector('.buttons')
// const clear = document.querySelector('.btn-clear')
const input= document.querySelector('.screen')


function ComputeValues(e){
    if (e.target.classList.contains('btn')){
        input.value += e.target.value

        
    }else if(e.target.classList.contains('btn-clear')){
            input.value = '';
        }

    

}
function DisplayEqual() {

    if (input.value==''){
        input.value = ''

    }
    else if (calc=input.value){
    input.value= eval(calc)
    
}
}

equal.addEventListener('click', DisplayEqual)
button.addEventListener('click', ComputeValues)
