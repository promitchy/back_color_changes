const buttton = document.querySelector("button")
const body = document.querySelector("body")
const color = ['blue','purple','red','yellow','red','green']
buttton.addEventListener('click',changesB=()=>{
        const colorIndex =parseInt(Math.random()*color.length)
        body.style.backgroundColor=color[colorIndex]
    })