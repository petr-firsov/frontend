function checkboxCheckUncheck(e) {
    const checkboxState = e.target.checked;
    console.log(checkboxState)
    const currentId = e.target.parentElement.id;
    const updateData = {
        status: checkboxState,
    };
    fetch(`https://backend-rh9i.onrender.com/?method=updateById&id=${currentId}`, {
        method: "POST",
        body: JSON.stringify(updateData)
    })
}

export function updateTicketStatus() {
    const checkboxes = Array.from(document.querySelectorAll('.ticket-checkbox'));
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => checkboxCheckUncheck(e)))
}