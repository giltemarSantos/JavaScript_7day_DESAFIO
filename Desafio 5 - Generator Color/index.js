
const colors = ['red','#174169','purple','yellow','green','palevioletred', 'aquamarine']
const btn = document.getElementById('btn') 
const colorName = document.querySelector('.color')

//Action Click
btn.addEventListener('click', function(){
    const randomColor = getRandomColor() 
    document.body.style.background = colors[randomColor] 
    colorName.textContent = colors[randomColor] 

})
 
 //Generate random
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}
