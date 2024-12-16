import { deleteTicket } from "./deleteTicket";
import { updateTicketTextContent } from "./updateTicket";
import { showTicketDescription } from "./showTicketDescription";

function createNewTicket(e) {
  e.preventDefault();
  const newTitle = document.querySelector('.new-title');
  if (newTitle.value.trim()) {
    const newTitle = document.querySelector('.new-title').value;
    const newDescription = document.querySelector('.new-description').value;
    const newTicketData = {
      name: newTitle,
      description: newDescription,
    };
    fetch('https://backend-rh9i.onrender.com/?method=createTicket', {
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
        <input type="checkbox" class="ticket-checkbox">
        <div class="ticket-text-content">
          <div class="ticket-title"></div>
          <div class="ticket-description"></div>  
        </div>
        <div class="ticket-date"></div>
        <div class="ticket-btns">
          <div class="btn edit-btn">&#10000;</div>
          <div class="btn remove-btn">&#x2715;</div>
        </div>`;

      addedTicket.id = newTicket.id;

      const addedTitle = addedTicket.querySelector('.ticket-title');
      addedTitle.textContent = newTicket.name;

      const addedDescription = addedTicket.querySelector('.ticket-description');
      addedDescription.textContent = newTicket.description;

      const addedDate = addedTicket.querySelector('.ticket-date');
      const newTicketDate = new Date(newTicket.created).toLocaleString();
      addedDate.textContent = newTicketDate;

      const ticketBox = document.querySelector('#ticket-box');
      ticketBox.appendChild(addedTicket);

      const addTicketForm = document.querySelector('.add-ticket-form');
      addTicketForm.classList.add('hide-form');

      showTicketDescription();
      updateTicketTextContent();
      deleteTicket();
    });
  } else {
      alert('Форма не заполнена!')
  }
}

export function newTicketForm() {
    const addTicketBtn = document.querySelector('.add-ticket-btn');
    addTicketBtn.addEventListener('click', () => {
        const form = document.querySelector('.ticket-form');
        form.classList.remove('hide-form');
        const newTitle = document.querySelector('.new-title');
        newTitle.focus();
    });
    const addTicketForm = document.querySelector('.add-ticket-form');
    addTicketForm.addEventListener('submit', (e) => {
      createNewTicket(e);
      const thisForm = e.target;
      const thisFormFields = Array.from(thisForm.querySelectorAll('.form-field'));
      thisFormFields.forEach(formField => formField.value = '');
    });
}
