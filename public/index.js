import { africanDishes, africanDishesDescription, africanDishesFunFacts, africanDishesEnglish, africanDishesFrench} from "./data.js";

// app.listen(port, ()=>{
//     console.log(`server running on port ${port}`);
// })


document.addEventListener('DOMContentLoaded', function() {
    
    const music = document.getElementById('background-music');

    function playMusic() {
        music.volume = 0.4; // play at 50% of computer volume
        music.loop = true; //ensure looping
        music.play().catch(error =>{
            console.log("Autoplay blocked by browser", error);
        });
    }

    function pauseMusic(){
        if (!music.paused){
            music.pause();
        }
    }
    playMusic(); //Attempt autoplay

    //if autoplay is blocked, play when the user interacts with the page
    document.addEventListener("click", () => {
       if(music.paused) {
        playMusic();
    }
    }, {once:true});

    //Pause musice when the user switches tab
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    //pause music when user clicks outside the window
    window.addEventListener("blur", pauseMusic);

    //resume music when user returns to the page
    window.addEventListener("focus", playMusic);

});

console.log( "funfacts = " + africanDishesFunFacts[2].funFact );


var randomNumbers = [];
var funfact = "";
var funfactDishName = "";


var randomDishIndex = Math.floor(Math.random() * africanDishes.length); //

// get random numbers to toggle between name of image or description from the arraylist
var randomDescriptionAnswer = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption1 = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption2 = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption3 = Math.floor(Math.random() * 2); //

console.log(randomDishIndex);
console.log(africanDishes[randomDishIndex]);

//gets answer using randomDish id from the africanDishsDescription array
var dishDescriptionAnswer = africanDishesEnglish.filter(obj => obj.id ===randomDishIndex);
console.log(dishDescriptionAnswer[0].name);
console.log(dishDescriptionAnswer[1].name);


var dishDescriptionOptions = generateUniqueNumbers();
console.log("dishDescriptionOptions sequence "+dishDescriptionOptions)

//set new question image from africanDishes array
document.querySelector(".drop-piece-1").setAttribute("src", "/assets/images/img/"+africanDishes[randomDishIndex]+"-P.png");

// gets the answer to the picture above and puts in any of the 4 options
document.querySelector(".drag-piece-"+dishDescriptionOptions[0]).setAttribute("src", "/assets/images/img-d/"+(dishDescriptionAnswer[randomDescriptionAnswer].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[0]).setAttribute("id", (dishDescriptionAnswer[randomDescriptionAnswer].name));


//generate 3 other pictures from dishDescription array that is different from the picture question
var otherOptions = (generateUniqueDishes(randomDishIndex))
console.log("otherOptions", otherOptions);
var dishDescriptionOtherOptions1 = africanDishesEnglish.filter(obj => obj.id === otherOptions[0]);
var dishDescriptionOtherOptions2 = africanDishesEnglish.filter(obj => obj.id === otherOptions[1]);
var dishDescriptionOtherOptions3 = africanDishesEnglish.filter(obj => obj.id === otherOptions[2]);

//set images and id on the remaining 3 other options
document.querySelector(".drag-piece-"+dishDescriptionOptions[1]).setAttribute("src", "/assets/images/img-d/"+(dishDescriptionOtherOptions1[randomDescriptionAnswerOption1].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[1]).setAttribute("id", (dishDescriptionOtherOptions1[randomDescriptionAnswerOption1].name));

document.querySelector(".drag-piece-"+dishDescriptionOptions[2]).setAttribute("src", "/assets/images/img-d/"+(dishDescriptionOtherOptions2[randomDescriptionAnswerOption2].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[2]).setAttribute("id", (dishDescriptionOtherOptions2[randomDescriptionAnswerOption2].name));

document.querySelector(".drag-piece-"+dishDescriptionOptions[3]).setAttribute("src", "/assets/images/img-d/"+(dishDescriptionOtherOptions3[randomDescriptionAnswerOption3].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[3]).setAttribute("id", (dishDescriptionOtherOptions3[randomDescriptionAnswerOption3].name));








//function to generate the remining 3 options excluding the index of the answer to the question
function generateUniqueDishes(excludeIndex) {
    let availableIndices = africanDishes.map((_, index) => index).filter(index => index !== excludeIndex);
    let result = [];
    while (result.length < 3) {
        let randomIndex = Math.floor(Math.random() * availableIndices.length);
        result.push(availableIndices.splice(randomIndex, 1)[0]); // Remove and push
    }
    return result;
}
// console.log(generateUniqueDishes(randomDish));


//generate 4 unique numbers to toggle the answer to any of the 4 options given
function generateUniqueNumbers() {
    let numbers = [1, 2, 3, 4]; // Possible numbers
    let result = [];
    
    while (numbers.length > 0) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        result.push(numbers.splice(randomIndex, 1)[0]); // Remove and push
    }
    
    return result;
}



document.addEventListener("DOMContentLoaded", function () {

    fetch("http://localhost:3000/api/log-visit", {
        method: "POST"
    });

    
    const dropZone = document.querySelector(".drop-1");
    const body = document.body;
    const levelTitle = document.getElementById("level-title");
    const pElement = document.querySelector(".funfact");
    console.log ("pelement = " + pElement)
    let level = 1;
    let correctAnswer;
    let draggedItemOriginalParent = null; // Store original position
    let footerContainer = document.querySelector(".footer-container");
    let footer = document.querySelector("footer");
    let lang = document.querySelector(".selected-lang");



    const langMenu = document.querySelector(".lang-menu");
    let currentLanguage = "english";

    function updateLanguage(newLang) {
        currentLanguage = newLang;
        console.log ("language selected: " + currentLanguage );
        loadNewQuestion();

        lang.innerHTML = currentLanguage === "english" ? "English" : "French"

        //Toggle classes for flag updates

        if (currentLanguage === "english") {
            lang.classList.remove("fr-flag");
            lang.classList.add("ca-flag");
        } else {
            lang.classList.remove("ca-flag");
            lang.classList.add("fr-flag");
        }
    }

    langMenu.addEventListener("click", function(event){
        if(event.target.classList.contains("ca")) {
            updateLanguage("english");
            lang.innerHTML="English";
            // console.log("languageeee: "+ lang.innerText);
        } else if (event.target.classList.contains("fr")) {
            updateLanguage("french");
            lang.innerHTML="French";
            // console.log("languageeee: " +lang.innerText);

        }
    });

    function getDishesByLanguage() {
        return currentLanguage === "english" ? africanDishesEnglish : africanDishesFrench;
    }
    // console.log("get Dishes by Language " + getDishesByLanguage());

    function loadNewQuestion() {
        let dishData = getDishesByLanguage();
        var randomDescriptionAnswer = Math.floor(Math.random() * 2); //

        let newRandomIndex = Math.floor(Math.random() * africanDishes.length);
        // correctAnswer = africanDishesDescription.filter(obj => obj.id === newRandomIndex);
        correctAnswer = dishData.filter(obj => obj.id === newRandomIndex);
        console.log (" correctAnswer " + correctAnswer[randomDescriptionAnswer].name);

        funfact = africanDishesFunFacts[newRandomIndex].funFact 
        funfactDishName = africanDishesFunFacts[newRandomIndex].name; 
        // console.log( " corretAnwser - funfacts about " + funfactDishName + " : " + funfact );


        // Update question image
        document.querySelector(".drop-piece-1").setAttribute("src", `/assets/images/img/${africanDishes[newRandomIndex]}-P.png`);
        document.querySelector(".drop-piece-1").setAttribute("alt", `${africanDishes[newRandomIndex]}'s picture`);

        // Get 4 new random options
        let dishDescriptionOptions = generateUniqueNumbers();
        let otherOptions = generateUniqueDishes(newRandomIndex);
        console.log("dish Description Options " + dishDescriptionOptions);

        // Get correct answer position
        let correctOption = document.querySelector(`.drag-piece-${dishDescriptionOptions[0]}`);
        correctOption.setAttribute("src", `/assets/images/img-d/${correctAnswer[randomDescriptionAnswer].name}.png`);
        correctOption.setAttribute("id", correctAnswer[randomDescriptionAnswer].name);
        correctOption.dataset.correct = "true"; // Mark correct option

        // Assign incorrect options
        for (let i = 1; i <= 3; i++) {

            // Generate 2 incorrect dishes for each option
            var randomWrongDishAnswer = Math.floor(Math.random() * 2); //

            // let wrongDish = africanDishesDescription.filter(obj => obj.id === otherOptions[i - 1])[randomWrongDishAnswer].name;
            let wrongDish = dishData.filter(obj => obj.id === otherOptions[i - 1])[randomWrongDishAnswer].name;

            let wrongOption = document.querySelector(`.drag-piece-${dishDescriptionOptions[i]}`);
            wrongOption.setAttribute("src", `/assets/images/img-d/${wrongDish}.png`);
            wrongOption.setAttribute("id", wrongDish);
            wrongOption.dataset.correct = "false"; // Mark incorrect options
        }

        // Remove previous event listeners before adding new ones
        removeExistingListeners();
        initializeInteractions();

        console.log("New Correct Answer:", correctAnswer);
    }

    function checkAnswer(selectedItem) {
        let isCorrect = selectedItem.dataset.correct === "true";

        //When an image is selected it is moved to .drop-1
        dropZone.innerHTML = ""; 
        dropZone.appendChild(selectedItem.cloneNode(true)); //clone instead of moving


        if (isCorrect) {
            body.style.backgroundColor = "rgb(0,255,0)"; // Green for correct
            var audio = new Audio("/sound/right.mp3");
            audio.play();
            level++; // Increment by 1
            levelTitle.innerText = `CORRECT!!: Level ${level}`; // Update level title
            pElement.innerText = `Faits amusants: ${funfact}`; // Update fun fact paragraph
            pElement.setAttribute ("id", "funfact");

            footer.style.backgroundColor="rgb(0,255,0)";
            footerContainer.style.backgroundColor="rgb(0,255,0)";
            

            //add a border effect when the user gets the correct answer
            dropZone.classList.add("correct-highlight", "drop-1-after");
            // pElement.classList.toggle("#funfact", true); // Update css class list
            console.log("paragraph element " + pElement.innerText);

            setTimeout(() => {
                body.style.backgroundColor = "";
                footer.style.backgroundColor="";
                footerContainer.style.backgroundColor="";
                // resetGame(selectedItem);
                resetGame();
                loadNewQuestion();
                pElement.innerText = "Match names or defination of dishes with image at the left column above. ";
                pElement.removeAttribute("id");
                dropZone.classList.remove("correct-highlight", "drop-1-after");
                // pElement.classList.toggle("#funfact", false); // Reset css class list
            }, 5000);
        } else {
            body.style.backgroundColor = "pink"; // Red for incorrect
            footer.style.backgroundColor="pink";
            footerContainer.style.backgroundColor="pink";
            var audio = new Audio("/sound/wrong.mp3");
            audio.play();
            levelTitle.innerText = "Wrong Answer: Game Over";

            setTimeout(() => {
                body.style.backgroundColor = "";
                footer.style.backgroundColor="";
                footerContainer.style.backgroundColor="";
                level = 1; // Reset level
                levelTitle.innerText = "Level 1";
                window.location.reload(); // Restart game
            }, 1000);
        }
    }
        // Return image to original position
        function resetGame() {
            // Reset .drag items without using draggedItemOriginalParent
            document.querySelectorAll(".drag img").forEach((item) => {
                let newItem = item.cloneNode(true);
                item.parentNode.replaceChild(newItem, item);
            });
        
            dropZone.innerHTML = ""; // Clear drop zone
            initializeInteractions(); // Reinitialize event listeners
        }


    

    function initializeInteractions() {
        const draggableItems = document.querySelectorAll(".drag img");

        draggableItems.forEach((item) => {
            item.setAttribute("draggable", "true"); 

            item.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("text", event.target.id);
                draggedItemOriginalParent = event.target.parentElement; // Store original position
            });

            item.addEventListener("dblclick", () => {
                checkAnswer(item);
            });
        });
    }

    function removeExistingListeners() {
        const draggableItems = document.querySelectorAll(".drag img");

        draggableItems.forEach((item) => {
            let newItem = item.cloneNode(true); // Clone the element to remove existing listeners
            item.parentNode.replaceChild(newItem, item);
        });
    }

    // Allow dropping
    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.classList.add("highlight");
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.classList.remove("highlight");

        let draggedItemId = event.dataTransfer.getData("text");
        let draggedItem = document.getElementById(draggedItemId);

        if (draggedItem) {
            checkAnswer(draggedItem);
        }
    });

    // Generate new question on load
    loadNewQuestion();
});



