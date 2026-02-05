/* task 1 */


// let price = 500;
// function total(quantity) {
//   let discount = 0;
//   if (quantity >= 10) {
//     total = Number((price - price * 0.1) * 0.18 * quantity);
//     console.log(`your total is ${total}`);
//   } else {
//     total = Number(price * 0.18 * quantity);
//     console.log(`your total payable amount is ${total}`);
//   }
// }

// total(12);


/* task 2 */

let x = 10;
function outer(){
    x = 20;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();
