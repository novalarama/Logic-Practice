let input = 2
let hasil = 0

for (let i = 1; i <= input; i++) {
    hasil += (i);
    if (i < input) {
    console.log(`${i} + `)
   }
    else if (i === input) {
     console.log(`${i}`)   
    }
    
}
console.log(` = ${hasil}`);