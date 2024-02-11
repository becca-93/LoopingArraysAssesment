// LOOP 1
for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

// LOOP 2
for (let i = 0; i <=10000; i++) {
    if(i === 2500) {
        alert("A quarter of the way there!")
    }
    if(i === 5000) {
        alert("Halfway there!")
    } 
    if(i === 10000) {
        alert("The loop is done!")
    }
}

// PART 3
const favShows = [
    "Breaking Bad",
    "The Office", 
    "Game of Thrones", 
    "The Vampire Diaries",
    "Friends"  
  ];
  
  for (let i = 0; i < favShows.length; i++) {
    console.log("My #" + (i+1) + " favorite TV show is " +  favShows[i]);
  }