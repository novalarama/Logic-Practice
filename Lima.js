let input = [120,40,28,100,9000]

let max = input[0];

for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
        max = input[i]
    }
}
console.log(`Angka Terbesar adalah ${max}`);
