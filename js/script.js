//Creo la costante per il container 
const containerRow = document.querySelector(".row");


// Devo creare un ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    if ((i % 3 === 0) && (i % 5 === 0)) {
        containerRow.innerHTML += `<div class="col">
                                      <div class="ratio ratio-1x1 square-text fizzbuzz">fizzbuzz</div>
                                   </div>`;
    } else if (i % 3 === 0) {
        containerRow.innerHTML += `<div class="col">
                                      <div class="ratio ratio-1x1 square-text fizz">fizz</div>
                                   </div>`;
    } else if (i % 5 === 0) {
        containerRow.innerHTML += `<div class="col">
                                      <div class="ratio ratio-1x1 square-text buzz">buzz</div>
                                   </div>`;
    } else {
        containerRow.innerHTML += `<div class="col">
                                      <div class="ratio ratio-1x1 square-text elsecolor">${i}</div>
                                   </div>`;
    }
}