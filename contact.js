// JS PAGECONTACT

function formValide(){
    const username=document.getElementById("username").value
    const mail=document.getElementById("mail").value
    const message=document.getElementById("message").value

    const errorUsername=document.getElementById("error-username")
    const errorMail=document.getElementById("error-mail")
    const errorMessage=document.getElementById("error-message")

    errorUsername.innerHTML=""
    errorMail.innerHTML=""
    errorMessage.innerHTML=""

    let isValid=true

    if (username===""){
        errorUsername.innerHTML="Le nom d'utilisateur est obligatoire."
        isValid=false
    }
    if (mail===""){
        errorMail.innerHTML="L'adresse e-mail est obligatoire."
        isValid=false
    }else if(!mail.includes("@")){
        errorMail.innerHTML="L'adresse e-mail doit contenir un @."
        isValid=false
    }
    if(message===""){
        errorMessage.innerHTML="Un message est obligatoire."
        isValid=false
    }
    if(isValid){
        prompt("Le formulaire a bien été soumis.")
    }
    return isValid
}
