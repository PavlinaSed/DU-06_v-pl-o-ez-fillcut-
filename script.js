
const str = prompt('Zadej slovo');
const pocetZnakuStr = str.length 
const len = Number(prompt('Zadej kladne cele cislo'));
const fillcut = () => {
   if (pocetZnakuStr > len) {
      document.body.innerHTML += str.slice(str.length - len, str.length) 
   } else if (pocetZnakuStr < len) {
      document.body.innerHTML += str.padStart(len, '.')
   } else {
      document.body.innerHTML += str
   }
}

fillcut()