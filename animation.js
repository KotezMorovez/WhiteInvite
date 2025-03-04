const header = document.querySelector('#headerText')
const headerDate = document.querySelector('#headerDate')
const background = document.querySelector('#background')
const greetingsHeader = document.querySelector('#greetingsHeader')
const greetingsBody = document.querySelector('#greetingsBody')
const detailsHeader = document.querySelector('#eventDetailsHeader')
const deatilsBody = document.querySelector('#eventDetailsBody')
const calendar = document.querySelector('#calendar')

const headerHeight = header.getBoundingClientRect().height
const greetingsHeaderBounds = greetingsHeader.getBoundingClientRect()
const greetingsBodyBounds = greetingsBody.getBoundingClientRect()
const detailsHeaderBounds = detailsHeader.getBoundingClientRect()
const deatilsBodyBounds = deatilsBody.getBoundingClientRect()
const calendarBounds = deatilsBody.getBoundingClientRect()

let bgTimer = setTimeout(() => {
    background.classList.remove('background-hidden')
}, 500)

let timer = setTimeout(() => {
    header.classList.remove('header-text-hidden')
}, 1000)

let dateTimer = setTimeout(() => {
    headerDate.classList.remove('header-date-hidden')
}, 1000)

window.addEventListener('scroll', () => {
    let currentscroll = window.scrollY

    if (currentscroll > greetingsHeaderBounds.height) {
        greetingsHeader.classList.remove('section-style-hidden')
    }

    let scrollWithHeader = currentscroll + headerHeight

    if (scrollWithHeader > greetingsBodyBounds.y + greetingsBodyBounds.height) {
        greetingsBody.classList.remove('section-style-hidden')
    }

    if (scrollWithHeader > detailsHeaderBounds.y + detailsHeaderBounds.height) {
        detailsHeader.classList.remove('section-style-hidden')
    }

    if (scrollWithHeader > deatilsBodyBounds.y + deatilsBodyBounds.height) {
        deatilsBody.classList.remove('section-style-hidden')
    }

    if (scrollWithHeader > calendarBounds.y + calendarBounds.height) {
        calendar.classList.remove('table-calendar-hidden')
    }
})