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
          // Creates a new  item table
        const newTable = document.createElement("table");

            // takes the input name and adds a timestamp
            newTable.textContent = `${name} (added at:  ${new Date().toLocaleTimeString()})`;
        
            // guest removal button from table
            
            deleteButton.textContent = "Remove";

            const deleteButton = document.createElement("button");

              // Add a class to the button for styling
            deleteButton.classList.add("btn");

            deleteButton.onclick= () =>{
                guestList.removeChild(newTable);
            };
            newTable.appendChild(deleteButton);

            // attendance marking button
            const attendanceBtn = document.createElement("button");
                attendanceBtn.textContent = "Mark as Attending";

            // Add a class to the button for styling           
            attendanceBtn.classList.add("btn");

                let isAttending = false;

                attendanceBtn.onclick = () => {
                    isAttending = !isAttending; // attendance boolean

                    newTable.style.background = isAttending ? "black" : "white";

                    attendanceBtn.textContent = isAttending ? "Mark as Not Attending" : "Mark as Attending";
                };
                newTable.appendChild(attendanceBtn);

                 // Append the new list item to the guest list
            guestList.appendChild(newTable);

            // Clear the input field after submission
            input.value = '';   
    });
    
});
           