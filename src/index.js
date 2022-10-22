async function getData() {
    const response = await fetch('data.json')
    const data = await response.json()
    display(data)
}
getData()

const barContainer = document.querySelector('.bar_container')

function display(data) {
    barContainer.innerHTML = `${data.map(showBar).join('')}`
}

function showBar(datum) {
    return `
    ${datum.day}
    `
}