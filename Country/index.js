const button = document.querySelector('.btn')
const input = document.querySelector('.input')
const detail= document.querySelector('.countrydetails')



async function FetchCountry(country) {
    const urlLink = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const response = await urlLink.json()
    return response
    
    
}

async function GetCountry() {
    const country = input.value;
    const countryDetails = await FetchCountry(country)
    console.log(countryDetails)
    DisplayCountry(countryDetails[0])
    
}

async function DisplayCountry(countryDetails) {
    const div=document.createElement('div')
    div.classList.add('details')
    div.innerHTML=`
                    <div class='img'>
                    <img src=${countryDetails.flags.png} alt=""> 
                    </div>
                   <h3 class='header'>${countryDetails.name.common}</h3>
                    </div>
    
    
    
                    <p><strong>Capital :</strong>${ countryDetails.capital[0]}</p>
                    <p><strong>Continent :</strong>${countryDetails.continents[0]}</p>
                    <p><strong>Population :</strong> ${countryDetails.population}</p>
                    <p><strong>Currency :</strong> GHS </p>
                    <p><strong>Common Languages :</strong>  English</p>`
                    
                    detail.append(div)   
}








button.addEventListener('click', GetCountry)