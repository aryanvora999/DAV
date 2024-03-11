const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const userFeedback = document.getElementById("feedback");
const subBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("userRev");
//add the click event listener
stars.forEach((star) => {
    star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        rating.innerText = value;
        //Remove all the existing classes
        stars.forEach((s) =>
            s.classList.remove("one", "two", "three", "four", "five"));
        //Assigning the selected value to the star
        stars.forEach((s, index) => {
            if (index < value) {
                s.classList.add(colourStars(value))
            }
            //remove selected value from all stars
            stars.forEach((s) => s.classList.remove("selected"));
        });
        //add the selected class to the one clicked 
        star.classList.add("selected");
    });
});
//displaying the user entered reviews
subBtn.addEventListener("click", () => {
    const feedback = userFeedback.value
    const userRating = parseInt(rating.innerText)
    if (!userRating || !feedback){
        alert("Please select the rating and review before submitting")
        return
    }
    //creating the new elements for displaying the userFeedbacks
    if (userRating > 0){
        const rev = document.createElement("div")
        rev.classList.add("feedback")
        rev.innerHTML = `<p><strong>Rating: ${userRating}/5</strong></p><p>${feedback}</p>`
        reviewsContainer.appendChild(rev)

        //Reset all the values for another userFeedback
        userFeedback.value = ""
        rating.innerText = 0
        stars.forEach((s) =>
            s.classList.remove("one", "two", "three", "four", "five"));
    }
}) 
//function to colour stars
function colourStars(val) {
    switch (val) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        default:
            return "";
    }
}