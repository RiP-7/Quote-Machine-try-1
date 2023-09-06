const quotes= [
  {text:"If you want to talk, please get out of the class and talk.",
  author: "Your teacher"},
  {text:"Don't try to act oversmart with me.",
  author: "Your teacher"},
  {text:"Talk loudly! You did not have breakfast or what?",
  author: "Your teacher"},
  {text:"*Hits you with a chalk*",
  author: "Your teacher"},
  {text:"In my 10 years of teaching, I have never seen this type of class.",
  author: "Your teacher"},
  {text:"I want pin drop silence in class!",
  author: "Your teacher"},
  {text:"Are you here to waste your parents' money?",
  author: "Your teacher"},
  {text:"Be quiet! Is this a class or a fish market?",
  author: "Your teacher"},
  {text:"We are so behind on the portion! We need to catch up like A division.",
  author: "Your teacher"},
  {text:"Give me your parents phone number.",
  author: "Your teacher"},
  {text:"No daydreaming in my class!",
  author: "Your teacher"},
  {text:"Just 2 more minutes.(10 minutes after the recess started)",
  author: "Your teacher"},
  {text:"Tell me when you all have finished talking",
  author: "Your teacher"},
  {text:"Your body is here but your mind is wandering. Physically you are here but where are you mentally?",
  author: "Your teacher"},
  {text:"I took the free period to teach my subject.",
  author: "Your teacher"},
  {text:"*Bangs the duster on the table*",
  author: "Your teacher"},
  {text:"Who did this? Tell me or no one goes home!",
  author: "Your teacher"},
  {text:"Are you here only to waste your parents' money?",
  author: "Your teacher"},
  {text:"I will not tolerate such behaviour in my class!",
  author: "Your teacher"},
  {text:"You think we teachers are fools to teach you?",
  author: "Your teacher"},
  {text:"Sit properly. This is a classroom, not your house!",
  author: "Your teacher"},
  {text:"What do you mean by forgot the textbook? Do you forget to eat?",
  author: "Your teacher"},
  {text:"Why are you laughing? Come to the front and tell us all. Tell us the joke too, we also want to laugh.",
  author: "Your teacher"},
  {text:"Keep quiet! The principal is taking a round of the school.",
  author: "Your teacher"},
  ];

 
   
    const backgrounds = [
      "https://images.hindustantimes.com/img/2022/01/20/1600x900/a0aaf782-7a22-11ec-92d4-e30affc03428_1642705111219.jpg",
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/2B1A/production/_124343011_gettyimages-144104082.jpg",
      "https://inc42.com/wp-content/uploads/2019/09/teacher-featured.jpg",
      "https://img.freepik.com/premium-photo/blank-chalkboard-wall-classroom-3d-render_124437-1959.jpg",
      "https://www.heraldgoa.in/uploads/news/big_179675_school.png",

      
    
    ];
    
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    function getRandomColor() {
      const colors = [
        "#740001", "#1a472a", "#0e1a40", "#ecb939",
        "#ae0001", "#2a623d", "#222f5b", "#f0c75e",
        "#eeba30", "#5d5d5d", "#726255",
        "#d3a625", "#946b2d", "#372e29"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function getRandomBackground() {
      const randomIndex = getRandomIndex(backgrounds.length);
      const imageUrl = `url(${backgrounds[randomIndex]})`;
      document.body.style.backgroundImage = imageUrl;
    }
    
    function getRandomIndex(arrayLength) {
      return Math.floor(Math.random() * arrayLength);
    }
    
    function displayQuote() {
      const { text, author } = getRandomQuote();
      const randomColor = getRandomColor();
      
      document.body.style.backgroundColor = randomColor; // Set background color
      document.querySelector("button").style.backgroundColor = randomColor; // Set button background color
      document.querySelector(".quote").textContent = text;
      document.querySelector(".author").textContent = "- " + author;
      //document.querySelector(".quote").style.color = randomColor; // Set text color
      //document.querySelector(".author").style.color = randomColor;
      //document.querySelector("#top-left-text").style.color = randomColor; // Set author color
      
      getRandomBackground(); // Set the background image
    }
    
    document.getElementById("new-quote").addEventListener("click", displayQuote);
    
    // Display a random quote and change colors when the page loads
    displayQuote();
    