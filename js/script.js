document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector(`.navbar`)
    const addShadow = () => {
        if (window.scrollY >= 10) {
            navBar.classList.add('shadow-bg')
        } else {
            navBar.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)

})