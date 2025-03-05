const header = document.querySelector('#headerText')
const headerDate = document.querySelector('#headerDate')
const background = document.querySelector('#background')
const greetingsHeader = document.querySelector('#greetingsHeader')
const greetingsBody = document.querySelector('#greetingsBody')
const detailsHeader = document.querySelector('#eventDetailsHeader')
const deatilsBody = document.querySelector('#eventDetailsBody')
const calendar = document.querySelector('#calendar')
const placeMainInfo = document.querySelector('#place-main-info')
const map = document.querySelector('#map')
const dressCodeHeader = document.querySelector('#dress-code-header')
const dressCodeBody = document.querySelector('#dress-code-body')
const dressCodeFooter = document.querySelector('#dress-code-footer')
const wishesHeader = document.querySelector('#wishes-header')
const wishesBody = document.querySelector('#wishes-body')
const rsvpHeader = document.querySelector('#rsvp-header')
const yaForm = document.querySelector('#ya-form')

const headerHeight = header.getBoundingClientRect().height
const greetingsHeaderBounds = greetingsHeader.getBoundingClientRect()
const greetingsBodyBounds = greetingsBody.getBoundingClientRect()
const detailsHeaderBounds = detailsHeader.getBoundingClientRect()
const deatilsBodyBounds = deatilsBody.getBoundingClientRect()
const calendarBounds = deatilsBody.getBoundingClientRect()
const placeInfoBounds = placeMainInfo.getBoundingClientRect()
const mapBounds = map.getBoundingClientRect()
const dressCodeHeaderBounds = dressCodeHeader.getBoundingClientRect()
const dressCodeBodyBounds = dressCodeBody.getBoundingClientRect()
const dressCodeFooterBounds = dressCodeFooter.getBoundingClientRect()
const wishesHeaderBounds = wishesHeader.getBoundingClientRect()
const wishesBodyBounds = wishesBody.getBoundingClientRect()
const rsvpHeaderBounds = rsvpHeader.getBoundingClientRect()
const yaFormBounds = yaForm.getBoundingClientRect()

let bgTimer = setTimeout(() => {
    background.classList.remove('background-hidden')
}, 500)

let timer = setTimeout(() => {
    header.classList.remove('hidden')
}, 1000)

let dateTimer = setTimeout(() => {
    headerDate.classList.remove('hidden')
}, 1000)

window.addEventListener('scroll', () => {
    let currentscroll = window.scrollY

    if (currentscroll > greetingsHeaderBounds.height) {
        greetingsHeader.classList.remove('hidden')
    }

    let scrollWithHeader = currentscroll + headerHeight

    if (scrollWithHeader > greetingsBodyBounds.y + greetingsBodyBounds.height) {
        greetingsBody.classList.remove('hidden')
    }

    if (scrollWithHeader > detailsHeaderBounds.y + detailsHeaderBounds.height) {
        detailsHeader.classList.remove('hidden')
    }

    if (scrollWithHeader > deatilsBodyBounds.y + deatilsBodyBounds.height) {
        deatilsBody.classList.remove('hidden')
    }

    if (scrollWithHeader > calendarBounds.y + calendarBounds.height) {
        calendar.classList.remove('hidden')
    }

    if (scrollWithHeader > placeInfoBounds.y + placeInfoBounds.height) {
        placeMainInfo.classList.remove('hidden')
    }

    if (scrollWithHeader > mapBounds.y + mapBounds.height) {
        map.classList.remove('hidden')
    }

    if (scrollWithHeader > dressCodeHeaderBounds.y + dressCodeHeaderBounds.height) {
        dressCodeHeader.classList.remove('hidden')
    }

    if (scrollWithHeader > dressCodeHeaderBounds.y + dressCodeHeaderBounds.height) {
        dressCodeHeader.classList.remove('hidden')
    }

    if (scrollWithHeader > dressCodeBodyBounds.y + dressCodeBodyBounds.height) {
        dressCodeBody.classList.remove('hidden')
    }

    if (scrollWithHeader > dressCodeFooterBounds.y + dressCodeFooterBounds.height) {
        dressCodeFooter.classList.remove('hidden')
    }

    if (scrollWithHeader > wishesHeaderBounds.y + wishesHeaderBounds.height) {
        wishesHeader.classList.remove('hidden')
    }

    if (scrollWithHeader > wishesBodyBounds.y + wishesBodyBounds.height) {
        wishesBody.classList.remove('hidden')
    }

    if(scrollWithHeader > rsvpHeaderBounds.y + rsvpHeaderBounds.height) {
        rsvpHeader.classList.remove('hidden')
    }

    if(scrollWithHeader > yaFormBounds.y + yaFormBounds.height) {
        yaForm.classList.remove('hidden')
    }
})