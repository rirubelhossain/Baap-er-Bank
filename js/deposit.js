// console.log("deposit")

// step-1 : add event lister with deposit button
document.getElementById("deposit_button").addEventListener("click", function(){
    const depositFlied = document.getElementById("deposit_input") ;
    const newdepositAmountString = depositFlied.value ; // get the deposit input field

    
    const newdepositAmount = parseFloat(newdepositAmountString);
    
    
    const depositTotalElement = document.getElementById("deposit_out") ;
    const previousDepositTotalString = depositTotalElement.innerText ;
    
    const previousDepositTotal = parseFloat(previousDepositTotalString) ;
    
    const currentDepositTotal = previousDepositTotal + newdepositAmount ;

    depositTotalElement.innerText = currentDepositTotal
    

    // get balance 

    const balanceTotalElement = document.getElementById("balance_out") ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString) ;

    // calculate current balance 
    const currentBalanceTotal = previousBalanceTotal + newdepositAmount ;
    balanceTotalElement.innerText = currentBalanceTotal ;



    depositFlied.value = "" ;
})