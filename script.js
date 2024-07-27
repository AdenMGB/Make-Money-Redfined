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

const scoreDisplayGamblingNum1 = document.getElementById('score');
const scoreDisplayGamblingNum2 = document.getElementById('score');
const scoreDisplayGamblingNum3 = document.getElementById('score');

document.getElementById('gambling-button').addEventListener('click', () => {
    let gamblingnum1 = Math.random() * 9;
    let gamblingnum2 = Math.random() * 9;
    let gamblingnum3 = Math.random() * 9;
});

let upgrade_1;
let upgrade_2;
let upgrade_3;

upgrade_1 = localStorage.getItem('upgrade_1');
upgrade_2 = localStorage.getItem('upgrade_2');
upgrade_3 = localStorage.getItem('upgrade_3');

const scoreDisplayUpgrade_1 = document.getElementById('upgrade_1');
const scoreDisplayUpgrade_2 = document.getElementById('upgrade_2');
const scoreDisplayUpgrade_3 = document.getElementById('upgrade_3');

document.getElementById('upgrade-button-1').addEventListener('click', () => {
    upgrade_1 + 0.1;
    localStorage.setItem('upgrade_1', upgrade_1);
    scoreDisplayUpgrade_1.innerText = upgrade_1;
});

document.getElementById('upgrade-button-2').addEventListener('click', () => {
    upgrade_2 + 0.1;
    localStorage.setItem('upgrade_2', upgrade_2);
    scoreDisplayUpgrade_2.innerText = upgrade_2;
});

document.getElementById('upgrade-button-3').addEventListener('click', () => {
    upgrade_3 + 0.1;
    localStorage.setItem('upgrade_3', upgrade_3);
    scoreDisplayUpgrade_3.innerText = upgrade_3;
});