// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

function Card(props) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgSrc = document.createElement('img');
    const span = document.createElement('span');

    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(imgSrc);
    author.appendChild(span);

    card.classList.add('card');
    title.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    title.textContent = props.headline;
    author.textContent = props.authorName;
    imgSrc.src = props.authorPhoto;
    span.textContent = props.authorName;

    return card;
}

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res);
    res.data.articles.bootstrap.forEach(item => {
        cardContainer.appendChild(Card(item));
    })
    res.data.articles.javascript.forEach(item => {
        cardContainer.appendChild(Card(item));
    })
    res.data.articles.jquery.forEach(item => {
        cardContainer.appendChild(Card(item));
    })
    res.data.articles.node.forEach(item => {
        cardContainer.appendChild(Card(item));
    })
    res.data.articles.technology.forEach(item => {
        cardContainer.appendChild(Card(item));
    })
})
.catch(err => {
    console.log('You messed something up in Cards.', err);
})