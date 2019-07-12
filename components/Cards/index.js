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

        const javaScript = 'javascript'
        const bootstrap = 'bootstrap'
        const technology = 'technology'
        const jquery = 'jquery'
        const node = 'node'


        for (let i in articles) {
            if (i.includes(`${javaScript}`)) {
                let items = []
                items = res.data.articles.javascript
                for (let item in items) {
                    console.log(items[item])
                    const element = createCard(items[item])
                    console.log(cardsContainer)
                    cardsContainer.appendChild(element)

                }
            }
            if (i.includes(`${bootstrap}`)) {
                let items = []
                items = res.data.articles.bootstrap
                for (let item in items) {
                    console.log(items[item])
                    const element = createCard(items[item])
                    console.log(cardsContainer)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`${technology}`)) {
                let items = []
                items = res.data.articles.technology
                for (let item in items) {
                    console.log(items[item])
                    const element = createCard(items[item])
                    console.log(cardsContainer)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`${jquery}`)) {
                let items = []
                items = res.data.articles.jquery
                for (let item in items) {
                    console.log(items[item])
                    const element = createCard(items[item])
                    console.log(cardsContainer)
                    cardsContainer.appendChild(element)
                }
            }
            if (i.includes(`${node}`)) {
                let items = []
                items = res.data.articles.node
                for (let item in items) {
                    console.log(items[item])
                    const element = createCard(items[item])
                    console.log(cardsContainer)
                    cardsContainer.appendChild(element)
                }
            }
        }
    })
    .catch(e => {
        console.log(e)
    })


function createCard(item) {

    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = item.headline

    const author = document.createElement('div')
    author.classList.add('author')
    author.textContent = item.authorName

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const image = document.createElement('img')
    image.src = item.authorPhoto

    const authorName = document.createElement('span')


    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(authorName)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)


    return card


}