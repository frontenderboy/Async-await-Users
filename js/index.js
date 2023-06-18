const wrapperNode = document.querySelector('.wrapper');
const api = 'https://jsonplaceholder.typicode.com/users';

async function userList() {
    try {
        const response = await fetch(api)
        const data = await response.json();
        createCards(data)
    } catch (error) {
        console.log('Error: ' + error.message)
    } 
}

const createCards = (cardsData) => {
    cardsData.forEach(item => {
        const card = `<div class="card">
                        <img class="user__photo" src="./user-images/user-logo.jpg" alt="user logo" width="150">
                        <h3 class="name">${item.name}</h3>
                        <span class="user-name">${item.username}</span>
                        <a href="mailto:${item.email}" class="user__email">${item.email}</a>
                        <a href="" class="user__website-link">${item.website}</a>
                    </div>`

        wrapperNode.insertAdjacentHTML('beforeend', card)
    })
}

userList()