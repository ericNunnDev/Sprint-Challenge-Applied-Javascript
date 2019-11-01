// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

function Header() {
    // Define Elements
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const tempSpan = document.createElement('span');

    // Setup Structure
    header.appendChild(dateSpan);
    header.appendChild(title);
    header.appendChild(tempSpan);

    // Set Class Names
    header.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    // Set Text Content


    return header;
}
