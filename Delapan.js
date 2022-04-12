let input = [
    {nama : 'durian', jumlah : 10},
    {nama : 'apel', jumlah : 10},
    {nama : 'mangga', jumlah : 20},
    {nama : 'jeruk', jumlah : 30},
    {nama : 'pepaya', jumlah : 10}
]

let max = input[0].jumlah;
let buah
for (let i = 1; i < input.length; i++) {
    if (input[i].jumlah > max) {
        max = input[i].jumlah
        buah = input[i].nama
    }
}
console.log(`Angka Terbesar adalah ${buah}`);