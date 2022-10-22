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
    let bar = `<div class="bar_height" style="height:${datum.amount * 2.5}px;"></div>`
    if (datum.day === 'wed') {
        bar = `<div class="bar_height" style="height:${datum.amount * 2.5}px; background-color: var(--cyan);"></div>`
    }
    return `
    <div class="bar">
        <span class="bar_amount_text">$${datum.amount}</span>
        ${bar}
        <span class="bar_date">${datum.day}</span>
    </div>
    `
}