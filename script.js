const quotes = [
    "If you want to talk, please get out of the class and talk.", 
    "Don't try to act oversmart with me.", 
    "Talk loudly! You didn’t have breakfast or what?",
    "Are you here to waste your parents' money?",
    " *Hits you with a chalk* ",
    "In my 16 years of teaching, I have never seen this type of class.", 
    "I want pin drop silence in class!",
    "Be quiet! Is this a fish market?",
    "We are so behind on the portion!",
    "Who did this? Tell me or no one goes home!",
    "Give me your parent’s phone number.",
    "No daydreaming in my class!",
    "I took the free period to teach my subject.",
    "I will not tolerate such behaviour in my class!",
    "Your body is here but your mind is wandering.",
    "Just 2 more minutes.(10 minutes after the recess started)",
    "Tell me when you all have finished talking.", 
    " *Bangs the duster on the table* ",
    "You think we teachers are fools to teach you?",
    "Why are you laughing? Come to the front and tell us all. Tell us the joke too, we also want to laugh.", 
    "Are you here only to waste your parents' money?", 
    "Sit properly. This is a classroom, not your house!",
    "Keep quiet! The principal is taking a round of the school.",
    "What do you mean by forgot the textbook? Do you forget to eat?"
    ];



const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new");
    
function getRandomQuote() {
const randomIndex = Math.floor(Math.random()* quotes.length);
return quotes[randomIndex];
}
    

function changeBackgroundColor() {
const colors = ["#F043DA", "#ADC4CE6", "#116A7B", "#A4BC92", "#CEEDC7","#CYEDC7" ];
const randomColorIndex = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[randomColorIndex];
}
  
// newQuoteButton.addEventListener("click", () => {
//   const randomQuote = getRandomQuote();
//   quoteElement.textContent = randomQuote;
//   changeBackgroundColor();
// });