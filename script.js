let counter;
counter = localStorage.getItem('counter');
const scoreDisplay = document.getElementById('score');

document.getElementById('income-button').addEventListener('click', () => {
    counter++;
    scoreDisplay.innerText = counter;
    localStorage.setItem('counter', counter);
});

document.getElementById('wipe-data').addEventListener('click', () => {
    localStorage.clear()
    window.close();
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})