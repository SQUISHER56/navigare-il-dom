const ul = document.querySelector("ul");//seleziono un determinato nodo
console.log(`elemento padre di <ul> ${ul.parentElement}`);//stampo elemento padre di <ul></ul>

const secondLi = ul.children[1];//seleziono un determinato nodo
console.log(`secondo elemento figlio di <ul> ${secondLi.innerText}`);//stampo il figlio in posizione 1 nell'elemento <ul></ul>

console.log(`fratello successivo di <li> ${secondLi.nextElementSibling.innerText}`);//stampo l'elemento successivo all'elemento secondLI

console.log(`fratello precedente di <li> ${secondLi.previousElementSibling.innerText}`);//stampo l'elemento precedente all'elemento secondLI
