

var randomNumbers = [];
var africanDishes = [ "Alloco", "Brik", "Claclo", "Dibi", "Eguisi", "FouFou", "Garri", "Hawawshi", "Injera", "Jollof", "Kedjenou", "Lafidi", "Mafe" ];


var africanDishesDescription = africanDishes.flatMap((dish, index) => [
    { id: index, name: dish },
    { id: index, name: dish + "-D" }
]);


var randomDishIndex = Math.floor(Math.random() * africanDishes.length); //

// get random numbers to toggle between name of image or description from the arraylist
var randomDescriptionAnswer = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption1 = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption2 = Math.floor(Math.random() * 2); //
var randomDescriptionAnswerOption3 = Math.floor(Math.random() * 2); //

console.log(randomDishIndex);
console.log(africanDishes[randomDishIndex]);

//gets answer using randomDish id from the africanDishsDescription array
var dishDescriptionAnswer = africanDishesDescription.filter(obj => obj.id ===randomDishIndex);
console.log(dishDescriptionAnswer[0].name);
console.log(dishDescriptionAnswer[1].name);


var dishDescriptionOptions = generateUniqueNumbers();
// for (var i = 0; i < africanDishes.length; i++){
//     var randomDish = Math.floor(Math.random()* 11);
//     randomNumbers.push(randomNumber);
// }
console.log("dishDescriptionOptions sequence "+dishDescriptionOptions)
// console.log("dish description Options " +dishDescriptionOptions[0])
// console.log("dish description Options " +dishDescriptionOptions[1])
// console.log("dish description Options " +dishDescriptionOptions[2])
// console.log("dish description Options " +dishDescriptionOptions[3])

//set new question image from africanDishes array
document.querySelector(".drop-piece-1").setAttribute("src", "./images/img/"+africanDishes[randomDishIndex]+"-P.png");

// gets the answer to the picture above and puts in any of the 4 options
document.querySelector(".drag-piece-"+dishDescriptionOptions[0]).setAttribute("src", "./images/img-d/"+(dishDescriptionAnswer[randomDescriptionAnswer].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[0]).setAttribute("id", (dishDescriptionAnswer[randomDescriptionAnswer].name));


//generate 3 other pictures from dishDescription array that is different from the picture question
var otherOptions = (generateUniqueDishes(randomDishIndex))
console.log("otherOptions", otherOptions);
var dishDescriptionOtherOptions1 = africanDishesDescription.filter(obj => obj.id === otherOptions[0]);
var dishDescriptionOtherOptions2 = africanDishesDescription.filter(obj => obj.id === otherOptions[1]);
var dishDescriptionOtherOptions3 = africanDishesDescription.filter(obj => obj.id === otherOptions[2]);

//set images and id on the remaining 3 other options
document.querySelector(".drag-piece-"+dishDescriptionOptions[1]).setAttribute("src", "./images/img-d/"+(dishDescriptionOtherOptions1[randomDescriptionAnswerOption1].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[1]).setAttribute("id", (dishDescriptionOtherOptions1[randomDescriptionAnswerOption1].name));

document.querySelector(".drag-piece-"+dishDescriptionOptions[2]).setAttribute("src", "./images/img-d/"+(dishDescriptionOtherOptions2[randomDescriptionAnswerOption2].name)+".png");
document.querySelector(".drag-piece-"+dishDescriptionOptions[2]).setAttribute("id", (dishDescriptionOtherOptions2[randomDescriptionAnswerOption2].name));

document.querySelector(".drag-piece-"+dishDescriptionOptions[3]).setAttribute("src", "./images/img-d/"+(dishDescriptionOtherOptions3[randomDescriptionAnswerOption3].name)+".png");
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

// console.log(generateUniqueNumbers());

// document.getElementById("container").addEventListener("click", function(){
    // window.location.reload();
// })

// var options1 = document.querySelector(".drag-piece-"+dishDescriptionOptions[0]);
// console.log ("Option A "+ options1);
// var options2 = document.querySelector(".drag-piece-"+dishDescriptionOptions[1]);
// console.log ("Option B "+ options2);
// var options3 = document.querySelector(".drag-piece-"+dishDescriptionOptions[2]);
// console.log ("Option C "+ options3);
// var options4 = document.querySelector(".drag-piece-"+dishDescriptionOptions[3]);
// console.log ("Option D "+ options4);


// options1.addEventListener("drag", function(event){
//     console.log(event.target.id + " is being dragged.");
// });
// options2.addEventListener("drag", function(event){
//     console.log(event.target.id + " is being dragged.");
// });

// options3.addEventListener("drag", function(event){
//     console.log(event.target.id + " is being dragged.");
// });

// options4.addEventListener("drag", function(event){
//     console.log(event.target.id + " is being dragged.");
// });



// const answerDrop = document.querySelector(".drop-1");
// console.log(answerDrop);

// let beingDragged ;
// answerDrop.addEventListener("dragover", (event)=>{
//     event.preventDefault();
//     console.log("You are dragging "+ event.target.id + " over " + event.target.classList);
// });
// answerDrop.addEventListener("dragenter", function(event){
//      event.target.classList.add("highlight");
//     console.log("You entered " + event.target.classList);
// });

// answerDrop.addEventListener("dragleave", function(event){
//     event.target.classList.remove("highlight");
//     console.log("You left " + event.target.classList);
// });
// answerDrop.addEventListener("drop", function(event){
//     event.preventDefault();
//     event.target.appendChild(event.target);
//     console.log("You dropped " + event.target.classList);
//     console.log("And dropped on " + answerDrop.classList);
//     if(event.target.classList.contains("drag-piece-"+dishDescriptionOptions[0])){
//         console.log("Correct Answer!");
//     } else {
//         console.log("Wrong Answer!");
//     }
//     event.target.classList.remove("highlight");
// });
// answerDrop.addEventListener("dragend", function(event){
//     event.target.classList.add("target");
//     setTimeout(()=> event.target.classList.remove("target"),100);
//     console.log("You are no longer dragging");
// });

// answer.addEventListener("dragend",);




document.addEventListener("DOMContentLoaded", function () {
    const dropZone = document.querySelector(".drop-1");
    const body = document.body;
    const levelTitle = document.getElementById("level-title");
    let level = 1;
    let correctAnswer;
    let draggedItemOriginalParent = null; // Store original position

    function loadNewQuestion() {
        var randomDescriptionAnswer = Math.floor(Math.random() * 2); //

        let newRandomIndex = Math.floor(Math.random() * africanDishes.length);
        correctAnswer = africanDishesDescription.filter(obj => obj.id === newRandomIndex);
        console.log (" correctAnswer " + correctAnswer[randomDescriptionAnswer].name);

        // Update question image
        document.querySelector(".drop-piece-1").setAttribute("src", `./images/img/${africanDishes[newRandomIndex]}-P.png`);
        document.querySelector(".drop-piece-1").setAttribute("alt", `${africanDishes[newRandomIndex]}'s picture`);

        // Get 4 new random options
        let dishDescriptionOptions = generateUniqueNumbers();
        let otherOptions = generateUniqueDishes(newRandomIndex);
        console.log("dish Description Options " + dishDescriptionOptions);

        // Get correct answer position
        let correctOption = document.querySelector(`.drag-piece-${dishDescriptionOptions[0]}`);
        correctOption.setAttribute("src", `./images/img-d/${correctAnswer[randomDescriptionAnswer].name}.png`);
        correctOption.setAttribute("id", correctAnswer[randomDescriptionAnswer].name);
        correctOption.dataset.correct = "true"; // Mark correct option

        // Assign incorrect options
        for (let i = 1; i <= 3; i++) {

            // Generate 2 incorrect dishes for each option
            var randomWrongDishAnswer = Math.floor(Math.random() * 2); //

            let wrongDish = africanDishesDescription.filter(obj => obj.id === otherOptions[i - 1])[randomWrongDishAnswer].name;
            let wrongOption = document.querySelector(`.drag-piece-${dishDescriptionOptions[i]}`);
            wrongOption.setAttribute("src", `./images/img-d/${wrongDish}.png`);
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
            var audio = new Audio("sound/right.mp3");
            audio.play();
            level++; // Increment by 1
            levelTitle.innerText = `CORRECT!!: Level ${level}`; // Update level title

            setTimeout(() => {
                body.style.backgroundColor = "";
                // resetGame(selectedItem);
                resetGame();
                loadNewQuestion();
            }, 1000);
        } else {
            body.style.backgroundColor = "pink"; // Red for incorrect
            var audio = new Audio("sound/wrong.mp3");
            audio.play();
            levelTitle.innerText = "Wrong Answer: Game Over";

            setTimeout(() => {
                body.style.backgroundColor = "";
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



