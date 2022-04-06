function meter(meters){
    return ((meters*3.28084).toFixed(3));
}
function feet(feets){
    return ((feets*0.3048).toFixed(3));
}
function litre(liters){
    return ((liters*0.264172).toFixed(3));
}
function gallon(gallons){
    return ((gallons*3.78541).toFixed(3));
}
function kilogram(kilograms){
    return ((kilograms*2.20462).toFixed(3));
}
function pound(pounds){
    return ((pounds*0.453592).toFixed(3));
}
function converter(){
    let lengthEl=document.getElementById("length-el");
    let volumeEl=document.getElementById("volume-el");
    let massEl=document.getElementById("mass-el");
    let value=document.getElementById("values").value;
    if(value===" "){
        value=0;
    }
    lengthEl.textContent=`${value} meters = ${meter(value)} feets || ${value} feets = ${meter(value)} meters` ;
    volumeEl.textContent=`${value} liters = ${litre(value)} gallons || ${value} gallons = ${gallon(value)} liters` ;
    massEl.textContent=`${value} kilograms = ${kilogram(value)} pounds || ${value} pounds = ${pound(value)} kilograms` ;
}