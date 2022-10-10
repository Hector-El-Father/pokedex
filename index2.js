const cards=document.getElementById('cards')
const templateCard=document.getElementById('template-card').content
const urlPokemon='https://pokeapi.co/api/v2/pokemon/'
const atras=document.getElementById('atras')
const siguiente=document.getElementById('siguiente')
let nextPokemon='';
let previewPokemon='';


document.addEventListener('DOMContentLoaded', ()=>{
    traerPokemons(urlPokemon);
    // siguientePagina()
    // atrasPagina()
})
const traerPokemons=async(url)=>{
    try{
        const res=await fetch(url)
        const result=await res.json()
        console.log(result);
        datosPokemons(result.results)
        // console.log(result.next);
        // nextPokemon=result.next
        // previewPokemon=result.previous
        // siguientePagina(result.next)
        // atrasYsiguiente(result.next)
    } catch(error){
        console.log('soy un error', error);
    }
}
const datosPokemons=async(data)=>{
    try{
        for(let index of data){
            const respuesta=await fetch(index.url)
            const resultado=await respuesta.json()
            // console.log(resultado);
            pintarCards(resultado)
            // siguientePagina(resultado)
        }
    } catch(error){
        console.log('soy un error', error);
    }
}
const pintarCards=pintarPokemons=>{
    // console.log(pintarPokemons);
    const fragment=document.createDocumentFragment()
    const clone=templateCard.cloneNode(true)
    clone.querySelector('.card-img-top').setAttribute('src', pintarPokemons.sprites.other.home.front_default)
    clone.querySelector('h5').textContent=pintarPokemons.species.name
    clone.querySelector('p').textContent=pintarPokemons.id
    // Foreach
    clone.querySelector('button').textContent=pintarPokemons.types[0].type.name
    // clone.querySelector('.subtipo').textContent=pintarPokemons.types[1].type.name
    fragment.appendChild(clone)
    cards.appendChild(fragment)
}


// function siguientePagina(){
//     const siguiente=document.getElementById('siguiente')
//     siguiente.addEventListener('click',()=>{
//         traerPokemons(nextPokemon)
//     })
// }
// function atrasPagina(){
//     const atras=document.getElementById('atras')
//     atras.addEventListener('click',()=>{
//         traerPokemons(previewPokemon)
//     })
// }
// siguientePagina()

// function linkSiguiente(){

// }

 