export function preventTextHighlight() {
    const body = document.body;
    body.addEventListener('mousedown', (e) => {
        if (!e.target.classList.contains('form-field'))  {
            e.preventDefault();
        }
    });
}