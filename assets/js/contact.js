const showComment = () => {
  const nameVal = document.getElementById("contact-input").value;
  const emailVal = document.getElementById("email-input").value;
  const phoneVal = document.getElementById("phone-input").value;
  const commentVal = document.getElementById("message-input").value;

  if (
    nameVal.length >= 1 &&
    emailVal.length >= 1 &&
    phoneVal.length >= 1 &&
    commentVal.length >= 1
  ) {
    alert("Thankyou for your message, " + nameVal + "!");
  }
};
document.getElementById("comment-data").addEventListener("click", showComment);
