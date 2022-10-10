const cards=document.getElementById('cards')
const templateCard=document.getElementById('template-card').content
const previus=document.getElementById('previus')
const next=document.getElementById('next')
let offset=1;
let limit=19;

document.addEventListener('DOMContentLoaded', ()=>{
    // fetchPokemon(cards)
})
const fetchPokemon=async(id)=>{
    try {
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result=await res.json()
        // console.log(result);
        pintarCards(result)
        
    } catch (error) {
        console.log('soy error', error);
    }
}
function fetchPokemons(offset, limit){
    for(let i=offset; i<=offset+limit;i++){
        fetchPokemon(i);
    }
}

function pintarCards(pintarPokemons) {
    const fragment=document.createDocumentFragment()
    const clone=templateCard.cloneNode(true)
    clone.querySelector('.card-img-top').setAttribute('src', pintarPokemons.sprites.other.home.front_default)
    // clone.querySelector('.shiny').setAttribute('src', pintarPokemons.sprites.other.home.front_shiny)
    clone.querySelector('h4').textContent=pintarPokemons.species.name
    clone.querySelector('p').textContent=`#${pintarPokemons.id}`
    clone.querySelector('.hp').textContent=pintarPokemons.stats[0].base_stat
    clone.querySelector('.atack').textContent=pintarPokemons.stats[1].base_stat
    clone.querySelector('.defense').textContent=pintarPokemons.stats[2].base_stat
    clone.querySelector('.special-attack').textContent=pintarPokemons.stats[3].base_stat
    clone.querySelector('.special-defense').textContent=pintarPokemons.stats[4].base_stat
    clone.querySelector('.speed').textContent=pintarPokemons.stats[5].base_stat
    clone.querySelector('.hp').setAttribute('style',`width: ${pintarPokemons.stats[0].base_stat}%`)
    clone.querySelector('.atack').setAttribute('style',`width: ${pintarPokemons.stats[1].base_stat}%`)
    clone.querySelector('.defense').setAttribute('style',`width: ${pintarPokemons.stats[2].base_stat}%`)
    clone.querySelector('.special-attack').setAttribute('style',`width: ${pintarPokemons.stats[3].base_stat}%`)
    clone.querySelector('.special-defense').setAttribute('style',`width: ${pintarPokemons.stats[4].base_stat}%`)
    clone.querySelector('.speed').setAttribute('style',`width: ${pintarPokemons.stats[5].base_stat}%`)
    clone.querySelector('.categoria').textContent=pintarPokemons.types[0].type.name
    fragment.appendChild(clone)
    cards.appendChild(fragment)
}

previus.addEventListener('click',()=>{
    if(offset!=1){
        offset-=20;
        removeChildNodes( cards);
    fetchPokemons(offset,limit);
    }
})
next.addEventListener('click',()=>{
    offset+=20;
    removeChildNodes( cards);
    fetchPokemons(offset,limit);
})

function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}
fetchPokemons(offset, limit);
  
