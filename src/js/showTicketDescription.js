export function showTicketDescription() {
    const tickets = document.getElementsByClassName('ticket');
    const ticketsArray = Array.from(tickets);
    ticketsArray.forEach(ticket => ticket.addEventListener('click', (e) => {
      const ticketDescription = ticket.querySelector('.ticket-description');
      if (!e.target.classList.contains('btn') && (!e.target.classList.contains('ticket-checkbox')) && ticketDescription.textContent) {
        if (ticketDescription.classList.contains('hide-description')) {
          ticketDescription.classList.remove('hide-description');
          ticketDescription.classList.add('show-description');
        } else if (ticketDescription.classList.contains('show-description')) {
          ticketDescription.classList.remove('show-description');
          ticketDescription.classList.add('hide-description');
        } else {
          ticketDescription.classList.add('show-description');
        }
      }
    }));
  }