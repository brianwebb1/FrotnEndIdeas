function logoImageAdd (){
    let logo = document.querySelector('.imageContainer')
    const imageForLogo = [
        'https://playapkmod.com/files/2021/10/Download-Logo-Maker-Create-Logos-and-Icon-Design-Creator.png' //For Example
    ]
    logo.children[0].setAttribute('src' , imageForLogo[0])
}
logoImageAdd()


let homePage = document.querySelector('.homePage')
homePage.addEventListener('click' , (e) => {
    e.preventDefault()
    window.open('./header.html' , '_self')
})

// NOTE navigation menu open hide and style
let navMenuLinks = document.querySelector('.navMenuLinks')
let itemBox = document.querySelector('.itemBox')
const search = document.querySelector('.search')
search.addEventListener('click' , (e) => {
    e.preventDefault()
    itemBox.classList.toggle('showMenu')
    notificationBox.classList.remove('showMenuNotification')
    aboutBox.classList.remove('aboutBoxShow')
    accountBox.classList.remove('showAccountBox')

    search.classList.toggle('fillColor')
    notificationIcon.classList.remove('notificationFill')
    aboutIcon.classList.remove('fillAbout')
    accountIcon.classList.remove('accountFill')

    navMenuLinks.children[1].classList.toggle('borderTop')
    navMenuLinks.children[2].classList.remove('borderTop')
    navMenuLinks.children[3].classList.remove('borderTop')
    navMenuLinks.children[4].classList.remove('borderTop')
})


let notificationIcon = document.querySelector('.notificationIcon')
let notificationBox = document.querySelector('.notificationBox')
notificationIcon.addEventListener('click' , (e) => {
    e.preventDefault()
    notificationBox.classList.toggle('showMenuNotification')
    itemBox.classList.remove('showMenu')
    aboutBox.classList.remove('aboutBoxShow')
    accountBox.classList.remove('showAccountBox')

    notificationIcon.classList.toggle('notificationFill')
    search.classList.remove('fillColor')
    aboutIcon.classList.remove('fillAbout')
    accountIcon.classList.remove('accountFill')

    navMenuLinks.children[4].classList.remove('borderTop')
    navMenuLinks.children[3].classList.remove('borderTop')
    navMenuLinks.children[2].classList.toggle('borderTop')
    navMenuLinks.children[1].classList.remove('borderTop')
})


let aboutIcon = document.querySelector('.aboutIcon')
let aboutBox = document.querySelector('.aboutBox')
aboutIcon.addEventListener('click' , (e) => {
    e.preventDefault()
    aboutBox.classList.toggle('aboutBoxShow')
    notificationBox.classList.remove('showMenuNotification')
    itemBox.classList.remove('showMenu')
    accountBox.classList.remove('showAccountBox')

    navMenuLinks.children[1].classList.remove('borderTop')
    navMenuLinks.children[2].classList.remove('borderTop')
    navMenuLinks.children[3].classList.toggle('borderTop')
    navMenuLinks.children[4].classList.remove('borderTop')
    
    aboutIcon.classList.toggle('fillAbout')
    search.classList.remove('fillColor')
    notificationIcon.classList.remove('notificationFill')
    accountIcon.classList.remove('accountFill')
})

let accountIcon = document.querySelector('.accountIcon')
let accountBox = document.querySelector('.accountBox')
accountIcon.addEventListener('click' , (e) => {
    e.preventDefault()
    accountBox.classList.toggle('showAccountBox')
    notificationBox.classList.remove('showMenuNotification')
    itemBox.classList.remove('showMenu')
    aboutBox.classList.remove('aboutBoxShow')

    navMenuLinks.children[1].classList.remove('borderTop')
    navMenuLinks.children[2].classList.remove('borderTop')
    navMenuLinks.children[3].classList.remove('borderTop')
    navMenuLinks.children[4].classList.toggle('borderTop')

    accountIcon.classList.toggle('accountFill')
    search.classList.remove('fillColor')
    notificationIcon.classList.remove('notificationFill')
    aboutIcon.classList.remove('fillAbout')
})



// NOTE btn listener cant log in and cant register
let button = document.querySelectorAll('.button')
button.forEach(function (item , index) {
    if(index === 0){
        item.addEventListener('click' , (e) => {
            e.preventDefault()
            alert('Log in unavailable')
        })
    }else{
        if(index === 1){
            item.addEventListener('click' , (e) => {
                e.preventDefault()
                alert("can't register now")
            })
        }
    }
})
