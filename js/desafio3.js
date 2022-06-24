


function precio (){


    let texto= "";
    let producto_ingresado = "";
    let precio_total= 0; 
    let productos = ["buzo ferrari","buzo mercedes","buzo red bull","remera coraje"];
    let precio_unidad= [5000,5000,5000,1500];
    let desea_cancelar = "";

   while (producto_ingresado != "esc"){

    producto_ingresado = prompt ("Ingrese el nombre del producto que desea comprar( Si desea ver el total de la transaccion escriba esc):","");

     if (productos.includes (producto_ingresado) == true) {
        let position = productos.indexOf (producto_ingresado);
        texto += productos[position] + " --> " + "$" + precio_unidad [position] + "\n";
        
        if (precio_total == 0){
            precio_total = precio_unidad[position];
        } 
        else {
            precio_total += precio_unidad[position];
        }   
     } 
     else if (producto_ingresado == "esc" ){
        break;
        } 
     else if (producto_ingresado == null) {
            texto = "";
            break; 
     }

        else {
        alert ("No es un producto existente");
         }

     } //end while


   if (texto != "") {
    console.log (texto + "\n" + "precio total --> " + "$" + precio_total);

    alert (texto + "\n" + "precio total --> " + "$" + precio_total);
   }
}
