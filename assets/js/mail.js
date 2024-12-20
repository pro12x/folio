function SendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email_id").value;
    let phone = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
        alert("Please fill all the fields !");
        return;
    }

    var params = {
        from_name: name,
        email_id: email,
        phone_number: phone,
        subject: subject,
        message: message
    }
    
    emailjs.send("service_5jlyyxa", "template_9du9j6m", params).then(function(res) {
        if (res.status == 200) {
            alert("Thank you for contacting us, we will get back to you soon !");

            document.getElementById("name").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("number").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            return;
        }
        alert("Something went wrong, please try  !");
    });
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    SendMail();
});