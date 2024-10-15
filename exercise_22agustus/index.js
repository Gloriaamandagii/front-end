const jumlah = function (berat,tinggi){
    let BMI = berat/(tinggi*tinggi);
    return BMI ;
}
let bmi = jumlah (63,1.6);
console.log(bmi);