/*
    1. Variavel para armazenar as cores 01:55
    2.  Variavel para o botão 
*/

// 02:17 > criando um array das cores do tipo const
// 03:27 > criando a variavel do botão

/* Projeto 3: Add a função no botão
    00:23
    01:27 > o botão irá escutar o evento de click
    02:29 > criando a função para o btn de click
    03:14 > trocando a cor do background de formar fixa, 
    ditando qual a cor irá aparecer. 
        btn.addEventListener('click', function(){
        document.body.style.background = colors[1]
})
*/
/* Projeto 3: Gerando a cor randomica
    00:25 > função para criar um num. randomico
    01:46 > Add a function random dentro do event addEventListener
    02:15 / 02:49 > explanação sobre o Math.random
                    - o Math.random só gera numero entre 0 e 1.
                    Exemplo[1]:[irar gerar valores entre 0 á 10 com dizimas decimais ]
                        function getRandomColor(){
                            return Math.random() * 10
                        }

    03:52 > Math.floor: arredondar valores no index do array 
            para sair da faixa de entre zero [0] até um [1].
                Exemplo[2]:[irar arredondar para valores inteiros entre 0 á 10]
                    function getRandomColor(){
                        return Math.floor(Math.random() * 10)
                    }
    
    05:18 > Irá usar o tamanho do array como referencia para trocar os numeros do index
                function getRandomColor(){
                    return Math.floor(Math.random() * colors.length)
                }
*/

/* Projeto 3: Trocando as cores com o Botão

*/

/* Projeto 3: Retornando ao HTML o nome da cor

*/

const colors = ['red','#174169','purple','yellow','green','palevioletred', 'aquamarine'] //02:17
const btn = document.getElementById('btn') //03:27
const colorName = document.querySelector('.color')

//Action Click
btn.addEventListener('click', function(){
    const randomColor = getRandomColor() // 01:46
    document.body.style.background = colors[randomColor] //trocando a cor de fundo 
    colorName.textContent = colors[randomColor] 

})
 
//Generate random
//00:25 | 05:18
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}
