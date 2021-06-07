//Variables
var numero1 = "";
var numero2 = "";
var operacion;
var operacionAnterior;
var operacionMarcada = false;
var primeraOperacion = true;
var display = document.getElementById("display");

function init() {
    //Al iniciar, se mostrará un 0 en la pantalla
    display.value = 0;    
}


//Función que mostrará por pantalla el número que se apreta
function apretarNumero(num) {
    if (operacionMarcada == false) {
        numero1 += num;
        display.value = numero1;
    }
    else {
        numero2 += num;
        display.value = numero2;
    }

}


//Función llamada al apretar operador
function operador(operador) {
    let resultadoTemporal;

    if (numero1 == "" && primeraOperacion == true){ //Si el primer número es negativo
        numero1 = "-";
    }
    else {
        
        operacionMarcada = true; //Indicamos que hemos marcado una operación

        if (primeraOperacion == false && numero2 == "" && operador == "-"){
            numero2 = "-"; //Para que podamos marcar que un número es negativo
        }
        else {
            operacion = operador;
            if (primeraOperacion == false) { //Si no es la primera vez que marcamos,    queremos que en la pantalla ya salga la operación anterior calculada
            resultadoTemporal = calculadora(operacionAnterior, numero1, numero2);
            numero1 = resultadoTemporal;

            if (numero1 == "No se puede dividir entre 0, reseteando..."){
                alert(numero1);
            
            }
            else {
                display.value = numero1;
            }
        
            numero2 = "";
            }
    
            operacionAnterior = operacion; //La operación que nos calcula cuando le damos por segunda vez, es la de la primera

            primeraOperacion = false;
            //Si hemos dividido entre 0, reseteamos todo
            if (numero1 == "No se puede dividir entre 0, reseteando...") {
            limpiar();
            }
        }        
    }    
}


function limpiar(){
    numero1 = "";
    numero2 = "";
    operacion = "";
    operacionAnterior = "";
    operacionMarcada = false;
    primeraOperacion = true;
    display.value = 0;    
}


//Función de igual, para que calcule el resultado
function igual(){
    let resultado;
    resultado = calculadora(operacion, numero1, numero2);
    //Controlamos si hemos dividido entre 0
    if (resultado == "No se puede dividir entre 0, reseteando...") {
        alert("No se puede dividir entre 0, reseteando...");
        limpiar();
    }
    else{
        display.value = resultado;
    }    
}


//Función que realiza el cálculo
function calculadora(operacion, num1, num2) {
    let resultado;
    let numero1 = parseFloat(num1);
    let numero2 = parseFloat(num2);

    if (operacion == "/" && numero2 == 0){
        resultado = "No se puede dividir entre 0, reseteando...";    
    }
    else {
        switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        default:
            resultado = numero1 / numero2;    
        }    
    }
    
    return resultado;
}