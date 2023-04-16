const button = document.querySelector('.button')
const quote = document.querySelector('.quote')

async function Generatequote(){
    const url='https://api.quotable.io/random'
    const response = await fetch(url)
    const responseData = await response.json()
    Displayquote(responseData)


}

async function Displayquote(responseData) {
    quote.textContent= responseData.content;
 


const p =document.createElement('p')
p.classList.add('writer')

p.textContent=responseData.author
quote.append(p)
}


button.addEventListener('click', Generatequote)