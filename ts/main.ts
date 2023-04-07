// main.ts

interface RSVP {
    name: string;
    email: string;
}

function saveRSVP(rsvp: RSVP): void {
    localStorage.setItem("rsvp", JSON.stringify(rsvp));
}

function showMessage(message: string): void {
    const messageElement = document.getElementById("message") as HTMLElement;
    messageElement.innerText = message;
    messageElement.hidden = false;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rsvp-form") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameElement = document.getElementById("name") as HTMLInputElement;
        const emailElement = document.getElementById("email") as HTMLInputElement;

        const rsvp: RSVP = {
            name: nameElement.value,
            email: emailElement.value,
        };

        saveRSVP(rsvp);
        showMessage("RSVP가 저장되었습니다. 감사합니다!");
    });
});

