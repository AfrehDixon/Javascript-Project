const inputField=document.querySelector('.text')
const searchbtn =document.querySelector('.submit')

 async function getDetails(word){
    let wordData= await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const wordDetail=wordData.json()
    return wordDetail
 }


async function getword(){
    let word = inputField.value
    const wordInfo=await getDetails(word)
    console.log(wordInfo)
    // await DisplaywordDetails(wordInfo)
    
}

async function DisplaywordDetails(wordDetail){
    let div=document.createElement('div')
    div.className.add('word-info')
    div.innerHTML=`
                <h2 class="word">serene</h2>
                <p class="word-class">adjective /st ri n/</p>
                <p class="synoyms">calm,peaceful</p>
    `

}
searchbtn.addEventListener('click', getword)
