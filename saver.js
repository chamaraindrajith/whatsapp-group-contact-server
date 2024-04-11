// Define the text containing phone numbers
var text = document.querySelectorAll("#main > header > div._amie")[0].childNodes[1].childNodes[0].textContent;

var regex = /\+\d{2,3}\s?\d{2,3}\s?\d{3}\s?\d{4}/g;

// Extract phone numbers from the text
var phoneNumbers = text.match(regex);

// Remove spaces from the extracted phone numbers
var formattedPhoneNumbers = phoneNumbers.map(number => number.replace(/\s/g, ''));

// Log the extracted phone numbers without spaces
console.log(formattedPhoneNumbers);

var csvData = formattedPhoneNumbers.join('\n');

// Function to export data to a CSV file
function exportToCSV(data, filename) {
    var blob = new Blob([data], { type: 'text/csv' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var groupName = document.querySelectorAll("#main > header > div._amie")[0].childNodes[0].textContent;
var csvFileName = "Phone-Numbers-" + groupName + ".csv";
csvFileName = csvFileName.replace(/ /g, '-');

// Export the data to a CSV file
exportToCSV(csvData, csvFileName);
