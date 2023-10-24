// Deixar com duas casas decimais
function formatMoney(value)
{
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value    
}

// Deixar com duas casas decimais
    function formatSplity(value)
    {
        if (value ==1) {
           return value + ' Person' 
        } else {
            return value + ' Peaple' 
        }
    }



//capturandoInformações
function update()
{
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    // console.log(bill, tipPercent, split); verificação
    // console.log({bill, tipPercent, split}); verificação

    //real.Calc
    let tipValue = bill * (tipPercent/100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    //exibir resulted
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue )
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplity(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}



