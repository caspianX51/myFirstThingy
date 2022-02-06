var ayer = 2002;
var hoy = 2022;

function substraction(restado, resta){
 return restado - resta;
}

var tiempo = substraction(hoy, ayer);

console.log(tiempo);

function longevidad(anios){
    if (anios > 100) {
        return "mas de un siglo";
    } else if (anios > 10) {
        return "mas de una decada";
    } else { 
        return "menos de una decada"
    }
}

console.log(longevidad(tiempo))