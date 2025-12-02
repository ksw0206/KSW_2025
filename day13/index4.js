export default async function main() {
    console.log('start App')  


    const mainMenu = document.querySelector('#main-menu')
    // const newGame = document.querySelector('')
    const creditScreen = document.querySelector('#credit-screen')
    let currentScreen = "mainMenu"

    
    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");

    console.log(menuitems.length)
    const menuitem_count = menuitems.length

    menuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {
        menuitems[currentIndex].classList.remove('select')

        if(currentScreen == "mainMenu") {

            console.log(e.key)
            if(e.key == "ArrowUp") {
                currentIndex--
                if(currentIndex < 0) {
                    currentIndex = menuitem_count-1
                }
            }
            else if(e.key == "ArrowDown") {
                currentIndex++
                currentIndex %=menuitem_count
            }
            else if(e.key == "Enter") {
                console.log(menuitems[currentIndex].dataset.action)
                const select_action = menuitems[currentIndex].dataset.action

                if(select_action == 'credit') {
                    mainMenu.classList.add('hide')
                    creditScreen.classList.remove('hide')
                    currentScreen = "creditScreen"
                }
            }

            console.log(currentIndex)
            menuitems[currentIndex].classList.add('select')
            

        }
        else if(currentScreen == "creditScreen") {

            console.log('credit screen')

            if(e.key == "Enter") {
                
                creditScreen.classList.add('hide')
                mainMenu.classList.remove('hide')
                currentScreen = "mainMenu"
            }
        }
        else if(currentScreen == "optionScreen") {
    optionItems[optionIndex].classList.remove('select');

    if(e.key == "ArrowUp") {
        optionIndex--;
        if(optionIndex < 0) optionIndex = optionItems.length - 1;
    }
    else if(e.key == "ArrowDown") {
        optionIndex++;
        optionIndex %= optionItems.length;
    }
    else if(e.key == "Enter") {
        
        if(optionItems[optionIndex].dataset.action === "back") {
            optionScreen.classList.add('hide');
            mainMenu.classList.remove('hide');
            
            optionItems.forEach(el => el.classList.remove('select'));
            menuitems.forEach(el => el.classList.remove('select'));
            currentIndex = 0; 
            menuitems[currentIndex].classList.add('select');
            currentScreen = "mainMenu";
        }
        
    }

    optionItems[optionIndex].classList.add('select');
}

        

    })

    


}