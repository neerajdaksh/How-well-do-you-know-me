//import library 
var readlineSync = require('readline-sync');
 
var score = 0;

//take the user name
var userName = readlineSync.question(chalk.red('Hello! What is Your name? '));

console.log("Welcome "+userName+" to DO YOU KNOW Neeraj? ");
console.log("--------------------------");

var questionOne = {
  question:'Where do I live? ',
  answer:'rishikesh',
  
}

var questionTwo = {
  question:'Who is my favorite superhero? ',
  answer:'ironman'
}
var questionThree={
  question:'Which is my favorite song? ',
  answer:'jogi'
}

var questionFour = {
  question:'What is my surname? ',
  answer:'kumar'
}

var questionFive = {
  question:'What is my favorite movie? ',
  answer:'hacker'
}

var questionList = [questionOne,questionTwo,questionThree,questionFour,questionFive];

// play function
function play(question,answer){
var userAnswer = readlineSync.question(question);
if(userAnswer===answer)
{
 console.log("You Are Right");
score = score+1;  
console.log("Current Score: "+score);
console.log("--------------------------");  
}
else{
  console.log("You Are Wrong");
  console.log("Current Score: "+score);
console.log("--------------------------");  
}
  
}


for(var i=0;i<questionList.length;i++){

var currentQuestionIndex = questionList[i]; 

play(currentQuestionIndex.question,currentQuestionIndex.answer);
  
}


console.log("YOU SCORED: "+score);
console.log("Thank You ☺");
