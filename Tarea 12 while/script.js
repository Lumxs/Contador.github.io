function ContaNumeros(){
const limit= document.getElementById('limite').value;
let conta=0;
let resultado='';
while (conta <= limit){
    resultado += conta +'';
    conta ++;
}
document.getElementById('resultado').innerText= resultado;
}