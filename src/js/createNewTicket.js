export function createNewTicket() {
    const addTicketForm = document.querySelector('.add-ticket-form');
    const newTitle = document.querySelector('.new-title');
    addTicketForm.addEventListener('submit', () => {
        if (newTitle.value.trim()) {
            const newTitle = document.querySelector('.new-title').value;
            const newDescription = document.querySelector('.new-description').value;
            const newTicketData = {
              name: newTitle,
              description: newDescription,
            };
            fetch('http://localhost:7070?method=createTicket', {
              method: "POST",
              body: JSON.stringify(newTicketData)
            })
            .then((response) => {
              const newTicket = response.json();
              return newTicket
            })
            .then((newTicket) => {
              const addedTicket = document.createElement('div');
              addedTicket.classList.add('ticket');
              addedTicket.innerHTML = `
                <div class="ticket-content">
                  <input type="checkbox" class="ticket-checkbox">
                  <div class="ticket-text-content">
                    <div class="ticket-title"></div>
                    <div class="ticket-description"></div>  
                  </div>
                  <div class="ticket-date"></div>
                  <div class="ticket-btns">
                    <div class="btn edit-btn">&#10000;</div>
                    <div class="btn remove-btn">&#x2715;</div>
                  </div>
                </div>`;
              const addedTitle = addedTicket.querySelector('.ticket-title');
              addedTitle.textContent = newTicket.name;
              const addedDescription = addedTicket.querySelector('.ticket-description');
              addedDescription.textContent = newTicket.description;
        
              const ticketBox = document.querySelector('#ticket-box');
              ticketBox.appendChild(addedTicket);
            });
        } else {
            alert('Форма не заполнена!')
        }
    });
}
