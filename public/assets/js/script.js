let netflix = (films) => {
    let result = []
    for (let film of films) {
        console.log(film)
        result.push(film)
    }
    return result
}

let films = ["Film1", "Film2", "Film3", "Film4", "Film5"]

let filmContainer = document.getElementById('films')
filmContainer.innerHTML = ''

films.forEach(film => {
    let filmCard = document.createElement('div')
    filmCard.classList.add('film-card')

    filmCard.innerHTML = `
        <h3>${film}</h3>
        <p>Some description about ${film}</p>
        <button>Watch Now</button>
    `
    filmContainer.appendChild(filmCard)
})
