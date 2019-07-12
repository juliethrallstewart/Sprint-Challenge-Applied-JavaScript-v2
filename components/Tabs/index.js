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


            // let elements = 0;
            // tabData.forEach(item => elements++)

            // function addData(elements) {

            //     for (let i = 0; i <= elements; i++) {
            //         return addData(element.setAttribute('data-tab', `${i}`))

            //     }
            // }
            // addData(elements)

            // let addData = (function () {
            //     return function () {
            //         for (let i = 0; i <= elements; i++) {
            //             return addData(element.setAttribute('data-tab', `${i}`))
            //         }
            //     }
            // })();

            // addData()

            //console.log(element)

        })

    })
    .catch(e => {
        console.log('what what wrong ', e)
    })

function tabCreate(item) {
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = item

    return topic

}