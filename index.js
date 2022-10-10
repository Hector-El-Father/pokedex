const cards=document.getElementById('cards')
const templateCard=document.getElementById('template-card').content
const fragment=document.createDocumentFragment()
const clone=templateCard.cloneNode(true)

document.addEventListener('DOMContentLoaded', ()=>{
    const pokemones=pokemon(4)
    fetchData(pokemones)
})

const fetchData = async (id) =>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        pintarCards(data)
    } catch(error){
        console.log('soy un error', error);
    }
}
const pokemon= (numero)=>{
    for (let i=1; i<=numero; i++){
        fetchData(i);
    }
}

const pintarCards=pintarPokemons=>{

    clone.querySelector('.card-img-top').setAttribute('src', pintarPokemons.sprites.other.dream_world.front_default)
    clone.querySelector('h5').textContent=pintarPokemons.species.name
    clone.querySelector('p').textContent=pintarPokemons.id
    fragment.appendChild(clone)
    cards.appendChild(fragment)
}
