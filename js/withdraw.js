// 1 add event handler with withdraw button

document.getElementById ('btn-withdraw').addEventListener('click', function(){
    // 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // 3
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // 4
    const currentWithdrawTotal = withdrawAmount + previousWithdraw;

    // 5
    previousWithdrawElement.innerText = currentWithdrawTotal;

    

    // 6
    const balanceTotalElement = document.getElementById('total-balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const newBalanceTotal = balanceTotal - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    if (withdrawAmount > newBalanceTotal){
        alert ('eto taka nai')
        return
    }


    // 7
    withdrawField.value = "";

})