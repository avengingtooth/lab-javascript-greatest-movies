let movies = [
    {
        title: 'Dead Poets Society',
        year: 1989,
        director: 'Peter Weir',
        duration: '2h 8min',
        genre: ['Comedy', 'Drama'],
        score: 8
      }
]

function turnHoursToMinutes(moviesArray) {
    let items = []
    moviesArray.forEach(cur =>{
        e = cur
        el = e['duration']
        el = el.split('h')
        if (el[1] != ' '){
            total = Number(el[1].split('min')[0])

        }
        else{
            total = 0
        }
        total += Number(el[0])*60
        e.duration = total
        items.push(e)
    })
    console.log(items, 'i')
    return items
}

console.log(turnHoursToMinutes(movies))