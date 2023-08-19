
// withdraw event handler



document.getElementById("Withdraw_button").addEventListener("click", function(){
    
    const withdrawField = document.getElementById("Withdraw_input");
    const newWithDrawAmountString = withdrawField.value ;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString) ;

    
    //get withdraw amount
    const WithdrawtotalElement = document.getElementById("withdraw_out") ;
    const previousWithdrawString = WithdrawtotalElement.innerText ;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount ;
    WithdrawtotalElement.innerText = currentWithdrawTotal ;



    //get final balance
    const balanceTotalElement = document.getElementById("balance_out") ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    //new balance 
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount ;
    balanceTotalElement.innerText = newBalanceTotal ;

    withdrawField.value = "" ;
})