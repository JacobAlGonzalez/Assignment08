//STEP 1
//let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
//console.log(favoriteMovies[1]); 

//STEP 2
// let movies = new Array(5);
// movies[0] = "Inception";
// movies[1] = "The Matrix";
// movies[2] = "Interstellar";
// movies[3] = "The Dark Knight";
// movies[4] = "Gladiator";
// console.log(movies[0]); 

//STEP 3
//movies.splice(2, 0, "Shawshank Redemption"); // Adding "Shawshank Redemption" at the 3rd position
//console.log(movies.length); 

//STEP 4
//let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
//delete moviesLiteral[0]; // Removing the first movie
//console.log(moviesLiteral); 

//STEP 5
//let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
//for (let index in moviesLiteral) {
//    console.log(moviesLiteral[index]);
//}

//STEP 6
//let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
//for (let movie of moviesLiteral) {
//    console.log(movie);
//}

//STEP 7
// let moviesLiteral = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
// moviesLiteral.sort();
// for (let movie of moviesLiteral) {
//     console.log(movie);
// }

//STEP 8
// let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
// let leastFavMovies = ["Twilight", "Transformers", "The Emoji Movie"];

// console.log("Movies I like:");
// favoriteMovies.forEach(movie => console.log(movie));

// console.log("\nMovies I regret watching:");
// leastFavMovies.forEach(movie => console.log(movie));

//STEP 9
// let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Gladiator"];
// let leastFavMovies = ["Twilight", "Transformers", "The Emoji Movie"];
// let allMovies = favoriteMovies.concat(leastFavMovies);
// allMovies.sort().reverse(); // Sorting in reverse order
// console.log(allMovies);

//STEP 10
// console.log(allMovies[allMovies.length - 1]); 

//STEP 11
// console.log(allMovies[0]); 

//STEP 12
// let allMovies = favoriteMovies.concat(leastFavMovies);
// let dislikedMovieIndices = leastFavMovies.map(movie => allMovies.indexOf(movie));
// dislikedMovieIndices.forEach(index => allMovies[index] = "The Prestige");
// console.log(allMovies); 

//STEP 13
// let moviesWithRanking = [
//     ["Inception", 1], 
//     ["The Matrix", 2], 
//     ["Interstellar", 3], 
//     ["The Dark Knight", 4], 
//     ["Gladiator", 5]
//   ];
  
//   let movieNames = moviesWithRanking.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);
//   console.log(movieNames);
  
//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// let showEmployee = function(empArray) {
//   console.log("Employees:");
//   empArray.forEach(emp => console.log(emp));
// };

// showEmployee(employees);

//STEP 15
// function filterValues(arr) {
//     return arr.filter(value => value !== false && value !== null && value !== 0 && value !== "");
//   }
  
//   console.log(filterValues([58, '', 'abcd', true, null, false, 0])); 
  
//STEP 16
// function getRandomItem(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     return arr[randomIndex];
//   }
  
//   console.log(getRandomItem([1, 2, 3, 4, 5])); 
  
//STEP 17
// function getLargestNumber(arr) {
//     return Math.max(...arr);
//   }
  
//   console.log(getLargestNumber([5, 9, 1, 3, 7])); 
  