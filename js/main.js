// main.ts
function saveRSVP(rsvp) {
    localStorage.setItem("rsvp", JSON.stringify(rsvp));
}
function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.innerText = message;
    messageElement.hidden = false;
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("rsvp-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var rsvp = {
            name: nameElement.value,
            email: emailElement.value
        };
        saveRSVP(rsvp);
        showMessage("RSVP가 저장되었습니다. 감사합니다!");
    });
});
