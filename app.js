const inputEl = document.getElementById("input-el")
let first =  document.getElementById("first-el")
let second = document.getElementById("second-el")
let third = document.getElementById("third-el")
let render = ""

function renderall(num, num2, ptype, quanity, quanity2) {
    render = inputEl.value * num
    render = render.toFixed(3)
    ptype.textContent = quanity + render + "  "

    render = inputEl.value * num2
    render = render.toFixed(3)
    ptype.textContent += "/    " + quanity2 + render 

}

inputEl.addEventListener("input", function() {
    // render = inputEl.value * 3.2808
    // render = render.toFixed(3)
    // first.textContent = "Meters:   " + render + "  "
      renderall(3.2808, 0.3048, first, "Meters: ", "feets: ")
    // render = inputEl.value * 0.3048
    // render = render.toFixed(3)
    // first.textContent += "/    " + "feets:  " + render 
      renderall(2.2046, 0.45359, second, "Kilograms: ", "pounds: ")
    // render = inputEl.value * 2.2046
    // render = render.toFixed(3)
    // second.textContent = "Kilograms:   " + render + "  "
      renderall(0.26417, 3.7854, third, "Liters: ", "Gallons: ")
    // render = inputEl.value * 0.45359
    // render = render.toFixed(3)
    // second.textContent += "/    " + "pounds:  " + render 

    // render = inputEl.value * 0.26417
    // render = render.toFixed(3)
    // third.textContent = "Liters:   " + render + "  "

    // render = inputEl.value * 3.7854
    // render = render.toFixed(3)
    // third.textContent += "/    " + "Gallons:  " + render 
})

