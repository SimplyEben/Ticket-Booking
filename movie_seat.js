const emptySeats = document.querySelectorAll(".empty-seat");
const occupiedSeat = document.querySelectorAll(".occupied");
const selectMovie = document.getElementById("select-movie");
const selectCount = document.getElementById("count");
const totalPrice = document.getElementById("total");
let ticketPrice = 0;
let selectedSeat = document.querySelectorAll(".selected-seat");
selectedSeat = 0;

function movieFunction() {
  console.log(1);
  if (
    selectMovie.value === "10" ||
    selectMovie.value === "12" ||
    selectMovie.value === "8" ||
    selectMovie.value === "9"
  ) {
    console.log(2);
    emptySeats.forEach((emptySeat) => {
      console.log(selectMovie.value);
      emptySeat.addEventListener("click", function (event) {
        if (emptySeat.classList.contains("selected-seat")) {
          emptySeat.classList.remove("selected-seat");
          selectedSeat--;
        } else {
          emptySeat.classList.add("selected-seat");
          selectedSeat++;
        }
        selectCount.textContent = selectedSeat;
        selectCount.style.color = "aqua";
        ticketPrice = selectedSeat * selectMovie.value;
        totalPrice.innerText = ticketPrice;
        totalPrice.style.color = "aqua";
      });
      totalPrice.innerText = selectedSeat * selectMovie.value;
    });
  }
  console.log("hello");
}

movieFunction();

selectMovie.addEventListener("change", movieFunction);
