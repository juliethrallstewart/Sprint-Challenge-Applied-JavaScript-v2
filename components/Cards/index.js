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

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        //console.log(res.data.articles.bootstrap[0].headline)
        //console.log(res.data.articles)
        const articles = res.data.articles

        for (let i in articles) {
            if (i.includes('javascript')) {
                let items = res.data.articles.javascript
                const category = 'javascript'
                //console.log(items)
                for (let item in items) {
                    //console.log(items[item])
                    const element = createCard(items[item], category)
                    //console.log(cardsContainer)
                    cardsContainer.appendChild(element)

                }
            }
            if (i.includes(`bootstrap`)) {
                let items = res.data.articles.bootstrap
                const category = 'bootstrap'
                for (let item in items) {
                    const element = createCard(items[item], category)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`technology`)) {
                let items = res.data.articles.technology
                const category = 'technology'
                for (let item in items) {
                    const element = createCard(items[item], category)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`jquery`)) {
                let items = res.data.articles.jquery
                const category = 'jquery'
                for (let item in items) {
                    const element = createCard(items[item], category)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`node`)) {
                let items = res.data.articles.node
                const category = 'node'
                for (let item in items) {
                    const element = createCard(items[item], category)
                    cardsContainer.appendChild(element)
                }
            }
        }
    })
    .catch(e => {
        console.log(e)
    })


function createCard(item, category) {

    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.category = category || 'none'; // add dataset to card 

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = item.headline

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const image = document.createElement('img')
    image.src = item.authorPhoto

    const authorName = document.createElement('span')
    authorName.textContent = item.authorName



    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(authorName)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)

    //console.log(card)
    return card


}