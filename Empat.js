let input = [2,4,5,9,10]
let hasil = []

for (let i = 0; i < input.length; i++) {
    if (input[i] %2 == 1) {
        hasil.push(
            "Ganjil"
        )
    }else{
        hasil.push("Genap")
    }
    
}
console.log(hasil);