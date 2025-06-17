document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".guest-details");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = document.getElementById("guestName");

        const guestList = document.getElementById("guestDisplay");

        const name = input.value.trim();

          if (name.length=== 0) {
          
           alert("Please enter a name.");
              return;
           
        }

        if (guestList.children.length >= 10) {
           return alert("!Guest list is full!");
        }
          
    });
    
});
           