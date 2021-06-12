let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {
    // let sortedMovies = sortMoviesByRank(movies);
    // let sortedMovies = sortMoviesByAttr(movies, getWish);
    displayMovies(sortMoviesByAttr(movies, 'rank'));
    document.getElementById("number-submit").addEventListener("click", getWish);
        // displayMovies(sortedMovies);
}

function getWish() {
    let sortMethod = document.getElementById('searchInput').value;
    let sortedMovies = sortMoviesByAttr(movies, sortMethod);
    displayMovies(sortedMovies);
}

function displayMovies(movies) {
    let table = "<div id='table-content'><table class='table-data' id='myTable' border='1' cellspacing='10' cellpadding='20'>";
    table += "<tr><th>Id</th><th>Title</th><th>Rank</th></tr>";
    for(let index = 0; index < movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>";
    }
    // closing the table
    table += "</table></div>";
    document.getElementById("movies-list").innerHTML = table;
}

function sortMoviesByRank(movies){
    let temp;
    let flag = 0;
    //using bubble sort algorithm
    for(let index = 0; index < movies.length - 1; index++){
        for(let j = 0; j < movies.length - 1 - index; j++){
            if(movies[j].rank > movies[j+1].rank){
                temp = movies[j];
                movies[j] = movies[j+1];
                movies[j+1] = temp;
                flag = 1;
            }
        }
        if(flag === 0) break;
    }
    return movies;
}

function sortMoviesByAttr(movies, setAttr){
    let flag = 0;
    let getAnswer;
    for(let index = 0; index < movies.length - 1; index++){
        let getSortedResult = sortMoviesByWish(movies, index, setAttr);
        getAnswer = getSortedResult.movieDetails;
        // for(let iterator = 0; iterator < movies.length - 1 - index; iterator++){
        //     if(movies[iterator][setAttr] > movies[iterator + 1][setAttr]){
        //         temp = movies[iterator];
        //         movies[iterator] = movies[iterator + 1];
        //         movies[iterator + 1] = temp;
        //         flag = 1;
        //     }
        // }
        // if(flag === 0) break;
    }
    return getAnswer;
}

function sortMoviesByWish(movies, index, sortAttr) {
    let temp;
    for(let iterator = 0; iterator < movies.length - index - 1; iterator++){
        if(movies[iterator][sortAttr] > movies[iterator + 1][sortAttr])
        {
            temp = movies[iterator];
            movies[iterator] = movies[iterator + 1];
            movies[iterator + 1] = temp;
            // flag = 1;
        }
    }

    return {movieDetails: movies}
}


// for the searching in the table code
function searchFun() {
    let searchText = document.getElementById('typeInput').value.toUpperCase();

    let tableContent = document.getElementById('myTable');
    let tableRow = tableContent.getElementsByTagName('tr');

    for(let index = 0; index < tableRow.length; index++) {
        let td = tableRow[index].getElementsByTagName('td')[1];

        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(searchText) > -1){
                tableRow[index].style.display = "";
            } else {
                tableRow[index].style.display = "none";
            }
        }
    }
}