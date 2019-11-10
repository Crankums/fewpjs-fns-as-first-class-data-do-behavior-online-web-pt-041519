/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet() {

}

function displayMessage(time) {
  let hours = time.split(":")
  let phours = parseInt(hours[0], 10)
    if (phours < 12) {
      return "Good Morning"
    }
    if (phours > 12 && phours < 5) {
      return "Good Afternoon"
    }
    else {
      return "Good Evening"
    }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
