import { showTicketDescription } from './showTicketDescription';
import { ticketBtns } from './ticketBtns';
import { updateTicket } from './updateTicket';
import { deleteTicket } from './deleteTicket';

export function loadTickets() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://petr-firsov.github.io/backend/?method=allTickets')
        .then((response) => {
            const tickets = response.json();
            return tickets
        })
        .then((tickets) => {
            tickets.forEach(ticket => {
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
                newTicketTitle.textContent = ticket.name.trim();

                const newTicketDescription = newTicket.querySelector('.ticket-description');
                newTicketDescription.textContent = ticket.description.trim();

                const newTicketDate = newTicket.querySelector('.ticket-date');
                const thisTicketMs = ticket.created;
                const thisTicketDate = new Date(thisTicketMs).toLocaleString();
                newTicketDate.textContent = thisTicketDate;

                newTicket.setAttribute('id', ticket.id);

                const ticketBox = document.querySelector('#ticket-box');
                ticketBox.appendChild(newTicket);
            });
        })
        .then(() => {
            showTicketDescription();
            ticketBtns();
            updateTicket();
            deleteTicket();
        });
    })
};