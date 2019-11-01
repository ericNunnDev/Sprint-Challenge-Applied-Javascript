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

headerContainer.appendChild(Header());

function Header() {
    // Define Elements
    const header = document.createElement('div');
    const title = document.createElement('h1');
    const dateSpan = document.createElement('span');
    const tempSpan = document.createElement('span');

    // Set Class Names
    header.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');
    
    // Set Text Content
    
    dateSpan.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';
    
    // Setup Structure
    header.appendChild(dateSpan);
    header.appendChild(title);
    header.appendChild(tempSpan);

    return header;
}
