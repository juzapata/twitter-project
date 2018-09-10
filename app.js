$(document).ready(function(){
   $("#tweet-button").on("click", function(event){
    let textValue = $("#text-area").val();
    event.preventDefault();
    $("#posts-area").append(`<div class="inside-posts">${textValue}</div>`);
    $(".inside-posts").addClass("post-box");
    $("#text-area").val("");
  });
  $("#text-area").on("input keydown", function () {
    var limite = 139;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;
    $("#carac-count").html(caracteresRestantes);
    if (caracteresDigitados >= 0 && caracteresDigitados < 120){
      $("#carac-count").addClass("blue-font");
    }
    if (caracteresDigitados >= 120 && caracteresDigitados < 130){
      $("#carac-count").removeClass("blue-font");
      $("#carac-count").addClass("yellow-font");
    } 
    if (caracteresDigitados > 130){
      $("#carac-count").removeClass("yellow-font");
      $("#carac-count").addClass("red-font");
    }
  });
$("input").on("input keyup", function () {
  if ($(this).val() === "" ){
    console.log("vazio");
    $("#tweet-button").attr("disabled", "disabled"); 
  } else if($(this).val().length > 140){
    console.log("maior que 140 caracteres");
    $("#tweet-button").attr("disabled", "disabled"); 
    } else {
      $("#tweet-button").removeAttr("disabled");
    }
    });
});
 

















/* anotações a validas
Quando eu chamei o valor da arae de texto fora da função do click do botão. Ele não funcinou
textArea === " " || textArea.length > 140 || !textArea.trim()
*/

/* Função pra nao ter parametro vazio

    */







