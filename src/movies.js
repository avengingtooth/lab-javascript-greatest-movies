// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = []
    moviesArray.forEach((e) => newArr.push(e['director']))
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let newArr = moviesArray.filter(e => e['director'] == 'Steven Spielberg').filter(e => e['genre'].includes('Drama'))
    return newArr.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let avg = moviesArray.reduce((t, e) => {
        if (typeof e['score'] == 'number'){
            t += e['score']
        }
        return t
    }, 0)

    if (moviesArray.length > 0){
        avg/=moviesArray.length
    }
    else{
        avg = 0
    }
    
    return Number.parseFloat(avg.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama = moviesArray.filter(e => e['genre'].includes('Drama'))
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let items = structuredClone(moviesArray)
    let years = []
    items.sort((a,b) => a['year'] - b['year'])
    items.forEach(e => {
        if(!(years.includes(e['year']))){
            years.push(e['year'])
        }
    })
    let ordered = []
    years.forEach(e => {
        let yearBlocks = items.filter(element => element['year'] == e)
        if(yearBlocks.length > 1){
            yearBlocks.sort((a,b) => (a['title'] - b['title']))
            //console.log(yearBlocks, 'y', e)
        }
        if (yearBlocks.length > 0){
            ordered.push(yearBlocks)
            //console.log(yearBlocks.length, e, ordered, yearBlocks)
        }
    })
    //console.log(ordered)
    return items
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let items = []
    moviesArray.forEach((e) => items.push(e['title']))
    items.sort()
    return items.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let items = []
    moviesArray.forEach(cur =>{
        e = structuredClone(cur)
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
    return items
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0){
        return null
    }
    else{
        let max = [0, 0]
        let years = []
        moviesArray.forEach(e => {
            if(!(years.includes(e['year']))){
                years.push(e['year'])
            }
        })

        years.forEach(e => {
            let cur = moviesArray.filter(el => el['year'] == e)
            let total = 0
            cur.forEach(element => {
                total += element['score']
            })
            total /= cur.length
            if(total >= max[1]){
                max = [e, total]
            }
        })
        return `The best year was ${max[0]} with an average score of ${max[1]}`
    }
}
