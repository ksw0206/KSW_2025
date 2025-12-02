export default async function main() {

    console.log('start app')

    let currentIndex = 0

    const menuItems = document.querySelectorAll('.menu-item');

    console.log(menuItems)

    menuItems[currentIndex].classList.add('select')

    window.addEventListener('keydown', (e) => {

    })

    console.log(e.key)

    menuItems[currentIndex].classList.remove('select')

    if(e.key === 'ArrowDown') {
        currentIndex--

        if(currentIndex < 0) {
            currentIndex = 2
    }

    else if(e.key === 'ArrowUp') {

        currentIndex++
        currentIndex %= 3 

    }
    console.log(currentIndex)
    menuItems[currentIndex].classList.add('select')
}

}