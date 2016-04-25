$(document).ready(function(){

  // Obteniendo el valor de los Textarea
  $("div button").click(function(){
    console.log("Precionaste el boton :) ");

    var producto = $("#prod").val();
    var precio = $("#prec").val();

    console.log("Producto= " + producto);
    console.log("Precio= " + precio);

    // rellenando elementos del contenedor
    $('tbody').append('<tr><td>'+producto+'</td><td>'+precio+'</td><td><button>Eliminar</button></td></tr>');

    var total = 0;
    total =  parseFloat(precio) + parseFloat(total);

    $('#total').text('$' + total.toFixed(2));


    //console.log(fila);
    console.log(producto);
    console.log(precio);
    console.log(total);
    // Hacer sumatoria de precio

  });

    //borrando el contenido
    $(document).on('click', 'td', function () {
      $(this).parent().remove();
      total = total - parseFloat($(this).prev().text());
  });

});
