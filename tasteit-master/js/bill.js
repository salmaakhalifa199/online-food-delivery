const addBillForm = document.getElementById('add-bill-form');
const billsTableBody = document.getElementById('bills-table-body');

function addBill(event) {
  event.preventDefault();

  // Get form data
  const customerName = document.getElementById('customer-name').value;
  const items = document.getElementById('items').value.split(','); // Split items into an array

  // Clear form fields
  addBillForm.reset();

  // (Replace with actual API call)
  // Simulate successful API response with dummy data
  const data = {
    customerName,
    items,
    totalCost: calculateTotalCost(items), // Function to calculate total cost (implementation needed)
  };

  // Update UI with the new bill data
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${data.customerName}</td>
    <td>${data.items.join(', ')}</td>
    <td>${data.totalCost}</td>
    <td>
      <button class="delete-bill">Delete</button>
    </td>
  `;

  billsTableBody.appendChild(tableRow);

  // Add functionality for deleting a bill (implementation needed)
  const deleteButton = tableRow.querySelector('.delete-bill');
  deleteButton.addEventListener('click', handleDeleteBill);
}

// Function to calculate total cost (implementation needed based on item pricing logic)
function calculateTotalCost(items) {
  // Replace with your logic to calculate total cost based on item prices
  return Math.random() * 100; // Placeholder for actual calculation
}

// Function to handle deleting a bill (implementation needed)
function handleDeleteBill(event) {
  // Implement logic to delete the bill from the server and remove the table row
  const tableRow = event.target.parentElement.parentElement;
  billsTableBody.removeChild(tableRow);
  // (Optional) Show a confirmation message
}
