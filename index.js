// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *      - counter1 contains the function countMaker(), which declares the variable count, making it available locally, then nesting a function which returns count++.
 * 
 *      - counter2 declares count outside of function, making it available globally, then has a function that simply returns count++.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *       - Although both ARE closures, counter1 USES closure. I can tell because the function countMaker() returns the nested function counter()
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *      - counter1 is preferable because it does not rely on a variable from the outside to run.
 *      - You can use counter2 when you want to manipulate the data on a global scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(maxNum){

    const score = Math.floor(Math.random() * maxNum);

    return score;

}

console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game 
in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, index){

  let Home = 0;
  let Away = 0;

  for (let i = 0; i < index; i++) {
    Home = Home + callback(3);
    Away = Away + callback(3);
    
  };
  
  return {
    "Home": Home,
    "Away": Away
  };
};

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning` that you wrote above
(3) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function getInningScore(inningScore) {
  return inningScore(3);
};


function scoreboard(callback1, callback2, index) {
  let homeScores = 0;
  let awayScores = 0;

  for (let i = 0; i < index; i++) {
    homeScores = homeScores + callback1(3);
    awayScores = awayScores + callback2(callback1);
    
    if (i === 1) {
      console.log(`${i}st inning: ${homeScores} - ${awayScores}`)
    } else if (i === 2) {
      console.log(`${i}nd inning: ${homeScores} - ${awayScores}`)
    } else if (i === 3) {
      console.log(`${i}rd inning: ${homeScores} - ${awayScores}`)
    } else if(i >= 4 && i <= 9) {
      console.log(`${i}th inning: ${homeScores} - ${awayScores}`)
    };

    if (i === 9) {
      console.log(`Final Score: ${homeScores} - ${awayScores}`)
    };
  };
};

scoreboard(inning, getInningScore, 10);

