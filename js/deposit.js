// console.log("deposit")

// step-1 : add event lister with deposit button
document.getElementById("deposit_button").addEventListener("click", function(){
    const depositFlied = document.getElementById("deposit_input") ;
    const depositAmount = depositFlied.value ; // get the deposit input field

    // document.getElementById("deposit_out").innerText = depositAmount
    const depositTotalElement = document.getElementById("deposit_out") ;
    depositTotalElement.innerText = depositAmount ;
    
    depositFlied.value = "" ;
})