import { showTicketDescription } from './showTicketDescription';
import { cancelBtns } from './cancelBtns';
import { updateTicketTextContent } from './updateTicket';
import { deleteTicket } from './deleteTicket';
import { updateTicketStatus } from './updateTicketStatus';

function loadTicketsFromServer() {
        fetch('https://backend-rh9i.onrender.com/?method=allTickets')
        .then((response) => {
            const tickets = response.json();
            return tickets
        })
        .then((tickets) => {
            tickets.forEach(loadedTicket => {
                let newTicket = document.createElement('div');
                newTicket.classList.add('ticket');
                newTicket.innerHTML = `
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
                `;

                const newTicketTitle = newTicket.querySelector('.ticket-title');
                newTicketTitle.textContent = loadedTicket.name.trim();

                const newTicketDescription = newTicket.querySelector('.ticket-description');
                newTicketDescription.textContent = loadedTicket.description.trim();

                const newTicketDate = newTicket.querySelector('.ticket-date');
                const thisTicketMs = loadedTicket.created;
                const thisTicketDate = new Date(thisTicketMs).toLocaleString();
                newTicketDate.textContent = thisTicketDate;

                const newTicketCheckbox = newTicket.querySelector('.ticket-checkbox');
                console.log(loadedTicket)
                if (loadedTicket.status === true) {
                    newTicketCheckbox.checked = true;
                } 

                newTicket.setAttribute('id', loadedTicket.id);

                const ticketBox = document.querySelector('#ticket-box');
                ticketBox.appendChild(newTicket);
            });
        })
        .then(() => {
            showTicketDescription();
            cancelBtns();
            updateTicketTextContent();
            updateTicketStatus();
            deleteTicket();
        });
}

export function loadTickets() {
    document.addEventListener('DOMContentLoaded', loadTicketsFromServer());
};