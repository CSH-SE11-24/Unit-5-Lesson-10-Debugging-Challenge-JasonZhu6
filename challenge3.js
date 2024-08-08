console.log("challenge3.js running");

let input1 = document.querySelector("#step1")
console.log(input1)
let p1 = document.querySelector("#step1Text")
console.log(p1)

input1.addEventListener("keydown", function(){
  if (input1.value.toLowerCase() === "select"){
    p1.textContent = "Correct!"
  } else {
    p1.textContent = "Not quite..."
  }
})

// Set up the other two steps to work correctly as well!
let input2 = document.querySelector("#step2")
let p2 = document.querySelector("#step2Text")

input2.addEventListener("keydown", function(){
  if (input2.value.toLowerCase() === "event"){
    p2.textContent = "Correct!"
  } else {
    p2.textContent = "Not quite..."
  }
})

let input3 = document.querySelector("#step3")
let p3 = document.querySelector("#step3Text")

input3.addEventListener("keydown", function(){
  if (input3.value.toLowerCase() === "Action"){
    p3.textContent = "correct!"
  } else {
    p3.textContent = "Not quite..."
  }
})
