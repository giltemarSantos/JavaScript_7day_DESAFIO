

//var
let computerNumber
let userNumbers = [] 
let attempts = 0 
let maxguesses = 10 

//função para resetar todo o jogo
function newGame() {
    window.location.reload()
}

//function para gerar o n° random de 0 a 100
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    //console.log(computerNumber) //exibe o numero do computador
 }

 //Armazenar o numero e mostrar na tela usando um array
 //Retorna os numeros no Guess
function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value) //vid-4 01:18
    userNumbers.push(' ' + userNumber) //array que será alimentado 
    document.getElementById('guesses').innerHTML = userNumbers //local que recebe o numero digitado
    
    //comparando os numeros 
     if (attempts < maxguesses) {
         if (userNumber > computerNumber) {
             document.getElementById('textOutput').innerHTML = 'Your number is too high' 
             document.getElementById('inputBox').value = '' //resetando o campo inserindo o valor vazio
             attempts++ // incremento do numero de tentativas
             document.getElementById('attempts').innerHTML = attempts //retornando na tela o valor de attemps
            }
            else if (userNumber < computerNumber) {
             document.getElementById('textOutput').innerHTML = 'Your number is too low' 
             document.getElementById('inputBox').value = '' 
             attempts++ 
             document.getElementById('attempts').innerHTML = attempts 
            }
            else {
             document.getElementById('textOutput').innerHTML = 'Congratulations!!!' 
             attempts++ // incremento do numero de tentativas
             document.getElementById('attempts').innerHTML = attempts //retornando na tela o valor de attemps
             document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //msg vitoria e para o jogo
            }
     }
     //Informando ao user que ele estourou o número de tentativas.
     else {
         document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber 
         document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
     }   
 }