const button = document.querySelector('#click')
const button2 = document.querySelector('#clickme')
const color = document.querySelector('.color')
const hexcolor = document.querySelector('#hex')

const colors= ['red' , 'yellow' , 'blue' ,' pick' , 'rgb(0,45,34)', '#a3c43d']


function setcolor(){
    const randomcolor =getcolor() 
    document.body.style.backgroundColor = colors[randomcolor]
    color.textContent = colors[randomcolor];
}

function getcolor(){
   return  Math.floor(Math.random() * colors.length)

}

button.addEventListener('click', setcolor)
button2.addEventListener('click', setHex)


const Hexvalues = [ 1 ,2,3,4,5,6,7,8,9,'A','B' ,'C' ,'D' ,'E' ,'F']



function setHex(){
    const randomHex = '#'
    for (i=0;i<6;i++){
        randomHex += Hexvalues[generatehex()]
        

    } 
    document.body.style.backgroundColor = randomHex
    color.textContent = randomHex;
    // console.log(randomHex)

    
}

generatehex=()=>{
    
    return Math.floor(Math.random() * Hexvalues.length)

}


hexcolor.addEventListener('click', setHex)



