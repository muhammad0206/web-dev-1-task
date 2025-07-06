const submitFeedback = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const feedbackMessage = document.getElementById("feedbackMessage");

    if (!name || !email || !age) {
        feedbackMessage.textContent = "Please fill in all fields";
        feedbackMessage.className = "error";
        return;
    }

    feedbackMessage.textContent = "Thank for your " + name + "!";
    feedbackMessage.className = "Success";

    name = document.getElementById("name").value = "";
    email = document.getElementById("email").value = "";
    age = document.getElementById("age").value = "";

}

const onclickEnter =(event) => {
    if (event.key === "Enter"){
        submitFeedback();
    }
}

