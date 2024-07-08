const emptySeats = document.querySelectorAll(".empty-seat");
let selectedSeat = document.querySelectorAll(".selected-seat");
const occupiedSeat = document.querySelectorAll(".occupied");
const selectMovie = document.getElementById("select-movie");
const selectCount = document.getElementById("count");
const totalPrice = document.getElementById("total");
 selectedSeat = 0;
 
if (
  selectMovie.value === "10" ||
  selectMovie.value === "12" ||
  selectMovie.value === "8" ||
  selectMovie.value === "9") {
  
  emptySeats.forEach((emptySeat) => {
    emptySeat.addEventListener("click", function(event) {
        event.preventDefault();
         if (emptySeat.classList.contains("selected-seat")) {
            emptySeat.classList.remove("selected-seat");
            selectedSeat--;
        } else {
            emptySeat.classList.add("selected-seat");
            selectedSeat++;
        }
          selectCount.textContent = selectedSeat;
          selectCount.style.color = "aqua";
          let ticketPrice = selectedSeat * selectMovie.value;
          totalPrice.textContent = ticketPrice;
          totalPrice.style.color = "aqua";
        })
      
      
    });
    
  }


