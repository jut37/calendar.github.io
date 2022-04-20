const year = document.getElementById('year-block');
const month = document.getElementById('month-block');
const day = document.getElementById('day-block');
const nextBtn = document.getElementById('next');
const preBtn = document.getElementById('pre');

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function firstday(year, month) {
    let day = new Date(year, month, 1);
    return (day.getDay());
}

function render(current) {
    let content = '';
    let total = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
    let first = firstday(current.getFullYear(), current.getMonth());

    month.innerHTML = monthName[current.getMonth()];
    year.innerHTML = current.getFullYear();

    for (let i = 0; i < first; i++) {
        content = content + '<li></li>';
    }

    for (let i = 1; i <= total; i++) {
        if (i == today.getDate() && current.getMonth() == today.getMonth() && current.getFullYear() == today.getFullYear()) {
            content = content + '<li class="today">' + i + '</li>';
            continue;
        }
        content = content + '<li>' + i + '</li>';
    }
    day.innerHTML = content;
}

render(today);

nextBtn.addEventListener('click', function () {
    currentMonth++;
    let nextMonth = new Date(currentYear, currentMonth);
    render(nextMonth);
})

preBtn.addEventListener('click', function () {
    currentMonth--;
    let preMonth = new Date(currentYear, currentMonth);
    render(preMonth);
})

month.addEventListener('click', function () {

})
