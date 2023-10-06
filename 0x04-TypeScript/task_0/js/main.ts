interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Daniel',
    lastName: 'Ade',
    age: 30,
    location: 'Canada'
}

const studentTwo: Student = {
    firstName: 'Jumoke',
    lastName: 'Fade',
    age: 20,
    location: 'Bermingham'
}

const studentsList = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const th1: HTMLTableHeaderCellElement = row.insertCell(0);
const th2: HTMLTableHeaderCellElement = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
studentsList.map((student) => {
    const nRow: HTMLTableRowElement = body.insertRow();
    const fNameRow: HTMLTableCellElement = nRow.insertCell();
    const locationRow: HTMLTableCellElement = nRow.insertCell();
    fNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
})