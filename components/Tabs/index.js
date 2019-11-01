// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicEntry = document.querySelector('.topics')

function Tab() {
    const tab = document.createElement('div');
    tab.classList.add('tab');
}

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
      console.log(res);
      res.data.topics.forEach(value => {
          console.log(value);
        //   const newTab = Tab(value);
        //   topicEntry.appendChild(newTab);
      });
  })
  .catch(err => {
      console.log('What are you doin man? Something aint right. Fix it fix it fix it fix it!', err);
  });