window.onload = function(){
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
}
//Implementar una función en JS que muestres y esconda opciones de PESO o UF seún tipo de inversión.
$(document).ready(function(){
  $("#renovable").click(function(){
  $("#uf").hide();
  $("input[name=valorAhorro]").val(['pesos']);
  $("#infoRenovable").show();
  });
  $("#pfijo").click(function(){
  $("#uf").show();
  $("input[name=valorAhorro]").val(['']);
  $("#infoRenovable").hide();
  });
  });
  function enviar(){
    var name = document.getElementById("name").value == "";
    if(document.getElementById("name").value == ""){
        alert("No ingresaste ningun nombre");
        document.getElementById("name").focus();
        return false;
      }
    
    var rut = document.getElementById("rut").value == "";
    if(document.getElementById("rut").value == ""){
        alert("No ingresaste ningun Nro. de R.U.T.");
        document.getElementById("rut").focus();
        return false;
      }
    var n_tel = document.getElementById("tel").value == "";
    if(document.getElementById("tel").value == ""){
        alert("No ingresaste ningun Nro. telefónico");
        document.getElementById("tel").focus();
        return false;
        }
    var correo = document.getElementById("email").value == "";
    if(document.getElementById("email").value == ""){
        alert("No ingresaste ningun correo electrónico");
        document.getElementById("email").focus();
        return false;
        }
    if(frm.tipoAhorro[0].checked == true || frm.tipoAhorro[1].checked == true){
    }else{
        alert("Completa el campo tipo de ahorro");
        return false;
   }
   var tipoAhorro;
   campo_input = document.frm.tipoAhorro;
   for(i=0; i<campo_input.length; i++){
     if(campo_input[i].checked){
      tipoAhorro = campo_input[i].value;
       break;
    }
  }
  if(frm.valorAhorro[0].checked == true || frm.valorAhorro[1].checked == true){
  }else{
      alert("Completa el tipo valor");
      return false;
  }
 var valorAhorro;
 campo_input = document.frm.valorAhorro;
 for(i=0; i<campo_input.length; i++){
   if(campo_input[i].checked){
    valorAhorro = campo_input[i].value;
     break;
  }
 }
 if(document.getElementById("monto").value == ""){
    alert("No ingresaste el monto de ahorro");
    document.getElementById("monto").focus();
    return false;
    }
  if(document.getElementById("plazo").value == ""){
    alert("No ingresaste el plazo");
    document.getElementById("plazo").focus();
    return false;
      }
     var montoAhorro = eval(document.getElementById("monto").value);
     var cantPlazo = eval(document.getElementById("plazo").value);

   if(tipoAhorro == "Fijo"){
      /*Para Peso, el tiempo de inversión es de 7 a 90 días y el monto mínimo a invertir es de $10.000, sin tope.*/
   if(valorAhorro == "pesos"){
        if(montoAhorro < 10000){
          alert("Tu monto de ahorro es: $" + montoAhorro + "\nDebe ser superior a $10.000.")
          document.getElementById("monto").value = "";
          document.getElementById("monto").focus();
          return false;
        }
        if(cantPlazo < 7){
          alert("El plazo debe ser entre 7 y 90 días");          
          document.getElementById("plazo").value = "";
          document.getElementById("plazo").focus();
          return false;
        }
        if(cantPlazo > 90){
          alert("El plazo debe ser entre 7 y 90 días");          
          document.getElementById("plazo").value = "";
          document.getElementById("plazo").focus();
          return false;
        }
        }   
  //Para UF, el tiempo de inversion debe ser mayor o igual a 120 días hasta 365 días, con un mínimo de 500 UF, sin tope.
  if(valorAhorro == "uf"){
    if(montoAhorro < 500){
      alert("Tu monto de ahorro es: " + montoAhorro + " U.F.\nDebe ser superior a 500 U.F.")
      document.getElementById("monto").value = "";
      document.getElementById("monto").focus();
      return false;
    }
    if(cantPlazo<120){
      alert("El plazo debe ser entre 120 y 365 días");          
      document.getElementById("plazo").value = "";
      document.getElementById("plazo").focus();
      return false;
    }
    if(cantPlazo > 365){
      alert("El plazo debe ser entre 120 y 365 días");          
      document.getElementById("plazo").value = "";
      document.getElementById("plazo").focus();
      return false;
    }
  }
}if(tipoAhorro == "Renovable"){
  if(montoAhorro < 10000){
    alert("Tu monto de ahorro es: $" + montoAhorro + "\nDebe ser superior a $10.000.")
    document.getElementById("monto").value = "";
    document.getElementById("monto").focus();
    return false;
  }
  if(cantPlazo < 7){
    alert("El plazo debe ser entre 7 y 90 días");          
    document.getElementById("plazo").value = "";
    document.getElementById("plazo").focus();
    return false;
  }
  if(cantPlazo > 90){
    alert("El plazo debe ser entre 7 y 90 días");          
    document.getElementById("plazo").value = "";
    document.getElementById("plazo").focus();
    return false;
  }
  } 
/*Implementar una función en JS que realice el cálculo, y luego muestre a traves de un ALERT, el tipo de inversión seleccionada, montos, plazos
e intereses a ganar, considere la formula para calcular la ganancia como ganancia=plazo*monto*0,0047.*/
var gananciaInteres = cantPlazo * montoAhorro * 0.0047;
  alert("Información Final:\n\n- Tipo de ahorro: " + tipoAhorro + ".\n- Monto: " + montoAhorro + " " + valorAhorro + 
        ".\n- Plazo: " + cantPlazo + " días.\n- Interes a ganar: "+ gananciaInteres + " "+ valorAhorro + ".")
        return true;
}