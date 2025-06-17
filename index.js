document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".guest-details");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = document.getElementById("guestName");

        const guestList = document.getElementById("guestDisplay");

        const name = input.value.trim();

         
    });
    
});
           