const showComment = () => {
  
    const nameVal = document.getElementById('contact-input').value
    const emailVal = document.getElementById('email-input').value
    const phoneVal = document.getElementById('phone-input').value
    const commentVal = document.getElementById('message-input').value
    const form = document.getElementById('f1')
    if (nameVal.length <= 0){
      alert("please enter a Name")
    } 
    if (emailVal.length <= 0){
      alert("please enter an email address")
    }   
    if (phoneVal.length <= 0){
        alert("please enter your phone number")
      } 
    if (commentVal.length <= 0){
      alert("please enter a comment")
    }
    if (((nameVal.length >= 1) && (emailVal.length >= 1) && (phoneVal.length >= 1) && (commentVal.length >= 1)))
    {
     
      alert("Thankyou for your message, " + nameVal + "!") 

    }
}
document.getElementById('comment-data').addEventListener('click', showComment)
