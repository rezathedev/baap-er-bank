// step 1: add event handler to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2: get the deposit amout from the input field
    const depositField = document.getElementById('deposit-amout');
    const newDepositAmoutString = depositField.value;
    const newDepositAmout = parseFloat(newDepositAmoutString);
    // step 3 get previous deposit amout
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 4 add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmout;

   depositTotalElement.innerText = currentDepositTotal;


    // step 5 add deposit to the total balance
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBanalceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat (previousBanalceString);

    // step 6 calculate current total balance
    const currentBalanceTotal = previousBalance + newDepositAmout;
    // set the balance total 
    previousBalanceElement.innerText = currentBalanceTotal;



//    clear the deposit field
   depositField.value = '';
})