let intro = document.querySelector('.intro');
let introRed = document.querySelector('.introRed');
let logoTitle = document.querySelector('#logoTitle');
let altTitle = document.querySelector('#altTitle');
const text = [ 'ユノミ', '湯呑', 'ゆのみ', 'ティーカップ'];

window.addEventListener('DOMContentLoaded', ()=> {

    introRed.style.visibility = 'hidden';
    altTitle.style.display = 'none';
    changeText();

    async function changeText() {
        for (let a = 0; a < 4; a++) { /* a => how many time it should cycle*/
           for (let x = 0; x < text.length - 1; x++) {          
                await new Promise(resolve => setTimeout(resolve, 100)); /*change the speed (ms)*/
                logoTitle.innerHTML = text[x+1];
            }   
        }
        addAltTitle();
        async function addAltTitle() {
            await new Promise(resolve => setTimeout(resolve, 375)); /*change the speed (ms)*/
            altTitle.style.display = 'inline';
        }   
    }

    setTimeout(()=> {

        setTimeout(()=> {
            intro.style.top = '-100vh';
            introRed.style.visibility = 'visible';
        }, (text.length * 400) + 500)
    })
    setTimeout(()=> {

        setTimeout(()=> {
            introRed.style.top = '-100vh';
        }, (text.length * 400) + 550)
    })
})