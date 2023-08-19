
// document.getElementById("pass_id").addEventListener("click", function(){
//     console.log("password ok ")
// })

// document.getElementById("email_id").addEventListener("click", function(){
//     console.log("email ok")
// })

document.getElementById("btn_id").addEventListener("click", function(){
    const email = document.getElementById("email_id") ;
    const password = document.getElementById("pass_id") ;

    const get_email = email.value ;
    const get_password = password.value ;

    if( get_email === "rubel@baap.com" && get_password === "karbarbank"){
        console.log("email and password is ok");
    }else{
        console.log("invalid user");
    }


})