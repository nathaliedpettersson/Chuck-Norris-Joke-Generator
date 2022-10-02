/* Variables */
const modal = document.querySelector(".modal");
const show = document.querySelector(".show");
const closeBtn = document.querySelector(".close-button");
const categories = document.getElementById("categories");

/* Display random joke from category */
function showModal() {

    const url = `https://api.chucknorris.io/jokes/random?category=${categories.value}`;
    const randomJoke = document.querySelector('h1');

    fetch(url).then(
        (response) => {
            return response.json();
        }
    ).then(
        (data) => {
            randomJoke.innerText = data.value;
            modal.classList.toggle("show-modal");
        }
    ).catch(
        (error) => {
            console.log(error, "Can not get URL");
        }
    )
}

/* Event listeners for triggering and closing joke */
closeBtn.addEventListener("click", showModal);

show.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
})