// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabComponent = document.querySelector(".topics")

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        //console.log('lambda-times', data)
        const tabData = data.data.topics
        tabData.forEach(item => {
            const element = tabCreate(item)
            tabComponent.appendChild(element)
        })

    })
    .catch(e => {
        console.log('what what wrong ', e)
    })


function tabCreate(topic) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic

    tab.addEventListener('click', event => {
        //get all cards with category
        const articlesByCat = document.querySelectorAll('.card[data-category]')
        //console.log(articlesByCat)
        //loop through and hide any where topic does not match [data-category]
        articlesByCat.forEach(article => {
            const category = article.dataset.category
            //console.log(category)
            //reset view & remove hidden class
            if (category === topic) {
                //article.style.display = "flex"
                article.classList.remove('hidden')

            } else {
                article.classList.add('hidden')
                //article.style.display = "none"
            }
        })
    })

    return tab

}

//EXAMPLE of using FETCH & Object.keys()

//const fetch = require('node-fetch')

/*
task: print headlines for JS
*/

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(res => res.data)
//     .then(data => {
//         //console.log('typeof', typeof data)
//         const dataKeys = Object.keys(data)
//         const categories = Object.keys(data.articles)
//         //console.log('categories', categories)
//         categories.forEach(cat => {
//             //console.log(cat)
//             data.articles[cat].forEach(article => {
//                 // TODO: add to DOM in here, individual article
//                 // addCard(article)

//                 //console.log(categories)
//             })


//         })

//         console.log(categories)


// const articles = data.articles
// const jsArticles = data.articles.javascript
// console.log('jsArticles isArray:', Array.isArray(jsArticles))

// })