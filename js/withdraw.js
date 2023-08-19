
// withdraw event handler



document.getElementById("Withdraw_button").addEventListener("click", function(){
    
    const withdrawField = document.getElementById("Withdraw_input");
    const newWithDrawAmountString = withdrawField.value ;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString) ;

    console.log( typeof newWithDrawAmount)

    withdrawField.value = "" ;
})