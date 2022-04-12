let input = [4,1,6,7,1]
let hasil = ""

for (let i = 0; i < input.length; i++) {
   for (let j = i + 1; j < input.length; j++) {
       if (input[i]==input[j]) {
           hasil = "Ada"
           console.log(input[i],input[j]);
       }else if(input[i]!=input[j]){
            if (hasil == "Ada") {
                hasil = "Ada"
            }else{
                hasil = "Tidak Ada"
            }
       }
   }
}
console.log(hasil);