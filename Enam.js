let input = [4, 3, 6, 7, 1];
let angka = 10;
let hasil = "";

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        if (input[i]+input[j]==angka) {
            hasil = "Bisa"
            console.log(input[i],input[j]);
        } else if(input[i]+input[j]!=angka){
            if (hasil=="Bisa") {
                hasil="Bisa"
            } else {
                hasil="Tidak Bisa"
            }
        }
    }
}
console.log(hasil);