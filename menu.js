const price = document.querySelectorAll('button');
const display = document.querySelectorAll('#p1display')

for (let prices of price) {
    count = 0;
    prices.addEventListener('click', function () {
        count++;

        console.log(count);

    })
    
}
