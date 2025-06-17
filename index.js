document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".guest-details");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = document.getElementById("guestName");

        const guestList = document.getElementById("guestDisplay");
        
        const category = document.getElementById("category").value;

        const name = input.value.trim();

          if (name.length=== 0) {
          
           alert("Please enter a name.");
              return;
           
        }

        if (guestList.children.length >= 10) {
           return alert("!Guest list is full!");
        }
          // Creates a new  item div of class guest-entry
        const newG = document.createElement("div");
        newG.classList.add("guest-entry");

          const guestInfo = document.createElement("p");
          // sets the category of the guest
            // takes the input name and adds a timestamp
            // use of .innerHTML to allow HTML tags
            guestInfo.innerHTML = `${name} - <span class= "color"> ${category}</span>  (added at:  ${new Date().toLocaleTimeString()})`;
            newG.appendChild(guestInfo);
        
            // guest removal button from table
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";

              // Add a class to the button for styling
            deleteButton.classList.add("btn");

            deleteButton.onclick= () =>{
                guestList.removeChild(newG);
            };
            newG.appendChild(deleteButton);

            // attendance marking button
            const attendanceBtn = document.createElement("button");
                attendanceBtn.textContent = "Mark as Attending";

            // Add a class to the button for styling           
            attendanceBtn.classList.add("btn");

                let isAttending = false;

                attendanceBtn.onclick = () => {
                    isAttending = !isAttending; // attendance boolean

                    newG.style.background = isAttending ? "white" : "black";

                    attendanceBtn.textContent = isAttending ? "Mark as Not Attending" : "Mark as Attending";
                };
                newG.appendChild(attendanceBtn);

                 // Append the new list item to the guest list
            guestList.appendChild(newG);

            // Clear the input field after submission
            input.value = '';   
    });
    
});
           