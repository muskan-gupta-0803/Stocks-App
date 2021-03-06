var initialPrice=document.querySelector('#initial-price');
var stocksQuantity=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');
var submitBtn=document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler); //on click its calling the submit handler function

function submitHandler(){
    var ip=Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);

    calcProfitLoss(ip,qty,curr);
}

function calcProfitLoss(initial,quantity,current){
    if(initial > current){
        //loss
        var loss=(initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity)) *100;
        
        showOutput(`The loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`);
        outputBox.style.color='red';
        outputBox.style.border='2px solid red';
    }
    else if(current>initial){
        //profit
        var profit=(current - initial) * quantity;
        var profitPercentage = (profit/(initial*quantity)) *100;
        showOutput(`The Profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`);
        outputBox.style.color='green';
        outputBox.style.border='2px solid green';
    }
    else{
        //anything else
        showOutput('NO GAIN , NO LOSS');
    }
}


function showOutput(message){
    outputBox.innerHTML=message;

}
