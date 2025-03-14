let box = document.querySelector('.box')
let data = []
let bouton = document.querySelector('.inpu')
let range = document.querySelector('.tirets')
let span = document.querySelector('.inp span')

async function paysList() {
    await fetch("https://restcountries.com/v3.1/all")
     .then((response) => response.json()
    ).then((res) => data = res)
    console.log(data);
    affichDonne(range.value) 
}

function affichDonne(nPays){
    let box = document.querySelector('.box')
    box.innerHTML = '';

    let paysAffiche = data.slice(0, nPays)

    paysAffiche.forEach((pays)=>{
        let div = document.createElement("div");
        let image = document.createElement('img')
        let titre = document.createElement('h2')
        let titre1 = document.createElement('h3')
        let para = document.createElement('p')
        
        image.src = pays.flags.svg
        titre.textContent = pays.name.common
        titre1.textContent = pays.capital
        para.textContent = `Population: ${pays.population}`;

        image.style.width = '90px'
        image.style.height = '90px'
        div.style.backgroundColor = 'black'
        div.style.width = '23vw'
        div.style.height = '37vh'
        div.style.borderRadius = '30px'
        div.style.color = 'white'
        div.style.lineHeight = '35px'
        div.style.paddingTop = '25px'
        div.style.textAlign = 'center'

        div.appendChild(image);
        div.appendChild(titre);
        div.appendChild(titre1);
        div.appendChild(para);

        box.appendChild(div);
    })
}

// afficharge du nombre en fonction de range
    
range.addEventListener('input', (e)=>{
    let nPays = e.target.value;
    span.textContent = nPays;

    affichDonne(nPays)
})

window.addEventListener('load',paysList)