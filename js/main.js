const inputElements = Array.from( document.querySelectorAll('.form__input') )

const onFocus = (e) => {
    e.target.parentElement.classList.add('active')
}
const onBlur = (e) => {
    e.target.parentElement.classList.remove('active')
}

inputElements.forEach(element => {
    element.addEventListener( 'focus', (event) => onFocus(event) )
    element.addEventListener( 'blur', (event) => onBlur(event) )
})



const customCheckbox = Array.from( document.querySelectorAll('.custom__checkbox') )

const toggleActiveCheckBoxClass = (e) => {
    e.target.classList.toggle('agree')
}

customCheckbox.forEach(element => {
    element.addEventListener('click',(event) => toggleActiveCheckBoxClass(event) )
})



const state = {
    currentCurrency: null,
    currentCountry: null
}
const countries = ['russian', 'italy', 'finland', 'deutsch', 'spain', 'ukraine', 'singapore']
const currency = ['usd', 'eur', 'jpy', 'gbp', 'aud']

const dropDownLists = Array.from(
    document.querySelectorAll('.drop-block')
)
const elementThatCouldBeSelect = Array.from(
    document.querySelectorAll('.drop__list > ul > li')
)

const updateValueOnPage = (event) => {
    const currencyBlock = document.getElementById('input-currency')
    const countryBlock = document.getElementById('input-country')
    const openLists = Array.from( document.querySelectorAll('.show') )
    const openListArrows = Array.from( document.querySelectorAll('.open') )

    const removeShowClass = () => {
        openLists.forEach(element => {
            element.classList.remove('show')
        })
    }
    const removeOpenClass = () => {
        openListArrows.forEach(element => {
            element.classList.remove('open')
        })
    }
    const removeChoisenCyrrencyClass = () => {
        const choisenElements = Array.from( document.querySelectorAll('.choisenCyrrency') )
        if ( choisenElements.length != 1 ) {
            choisenElements.forEach(element => 
                element.classList.remove('choisenCyrrency')
            )
        }
    }
    const removeChoisenCountryClass = () => {
        const choisenElements = Array.from( document.querySelectorAll('.choisenCountry') )
        if ( choisenElements.length != 1 ) {
            choisenElements.forEach(element => 
                element.classList.remove('choisenCountry')
            )
        }
    }

    if ( state.currentCurrency ) {
        currencyBlock.innerHTML = state.currentCurrency
        currencyBlock.classList.add('selected')
        removeChoisenCyrrencyClass()
        event.target.classList.add('choisenCyrrency')
        removeShowClass()
        removeOpenClass()
    } else {
        currencyBlock.innerHTML = 'Currency'
    }

    if ( state.currentCountry ) {
        countryBlock.innerHTML = state.currentCountry
        countryBlock.className = 'form__input'
        countryBlock.classList.add('dropdown')
        countryBlock.classList.add('selected')
        countryBlock.classList.add(state.currentCountry)
        removeChoisenCountryClass()
        event.target.classList.add('choisenCountry')
        removeShowClass()
        removeOpenClass()
    } else {
        countryBlock.innerHTML = 'Country'
    }
}

dropDownLists.forEach(element => {
    const elementToDropDownId = element.dataset.select
    element.addEventListener('click', () => {
        const element = document.getElementById(elementToDropDownId)
        element.classList.toggle('show')
        element.previousElementSibling.childNodes[5].classList.toggle('open')
    }
)})
elementThatCouldBeSelect.forEach(element => {
    element.addEventListener('click', (event) => {
        const value = event.target.innerHTML
        if ( currency.includes(value) ) {
            state.currentCurrency = value
            updateValueOnPage(event)
            return
        }
        if ( countries.includes(value) ) {
            state.currentCountry = value
            updateValueOnPage(event)
            return
        }
    })
})