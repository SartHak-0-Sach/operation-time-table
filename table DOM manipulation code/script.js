document.getElementById('surgeryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const otNumber = parseInt(document.getElementById('ot').value);
    
    if (otNumber < 1 || otNumber > 3) {
        alert('Invalid OT Number. Please enter a number between 1 and 3.');
        return;
    }

    const table = document.getElementById('scheduleTable').getElementsByTagName('tbody')[0];
    let slotFound = false;

    for (let i = 0, row; row = table.rows[i]; i++) {
        const cell = row.cells[otNumber];

        if (cell.innerHTML.trim() === '') {
            cell.innerHTML = `${name} - ${type}`;
            slotFound = true;
            break;
        }
    }

    if (!slotFound) {
        alert('No available slot for the selected OT.');
    }

    // Reset form fields
    document.getElementById('surgeryForm').reset();
});
