let imgWrapper = document.querySelector('#imgWrapper')

// Calculating how much of the boxes are off screen
let widthOfBoxes = imgWrapper.clientWidth
let screenWidth = document.querySelector('body').clientWidth
let hiddenWidth = (widthOfBoxes) - screenWidth

let mouseDown = false
let initX
let newX
let movedX
let transformed = 0

window.addEventListener('mousedown', (e) => {
  mouseDown = true
  initX = e.clientX
})

window.addEventListener('mouseup', () => {
  mouseDown = false
})

window.addEventListener('mousemove', (e) => {
  if (mouseDown) {
    newX = e.clientX
    movedX = initX - newX
    transformed = transformed - movedX


    if (transformed > 0) {
      console.log("scrolled too far left")
      transformed = 0
      imgWrapper.style.transform = "translateX(" + transformed + "px)"
    } else if (-transformed > hiddenWidth) {
      console.log(transformed)
      console.log("scrolled too far right")
      transformed = -hiddenWidth
      imgWrapper.style.transform = "translateX(" + transformed + "px)"
      console.log(transformed)
    }
    else {
      imgWrapper.style.transform = "translateX(" + transformed + "px)"
    }



  }
})







// let initX
// let newX
// let translated = 0

// window.addEventListener('mousedown', (e) => {
//   if (mouse)
// })



// window.addEventListener('mouseup', (e) => {

//   if (translated > 0) {
//     newX = e.clientX
//     let diff = initX - newX
//     translated = translated + diff

//     console.log(translated)

//     imgWrapper.style.transform = "translateX(" + -diff + "px)"
//   }




// })


