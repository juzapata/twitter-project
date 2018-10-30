$(document).ready(function(){
   $("#tweet-button").on("click", function(event){
    event.preventDefault();
    let textValue = $("#text-area").val();
    $("#posts-area").append(`<div class="inside-posts bg-light">${textValue}</div>`);
    $(".inside-posts").addClass("post-box");
    $("#text-area").val("");
  });
  function areaResize(){
    var textAreaResize = $("#text-area");
    console.log(typeof(textAreaResize.length));
    for (var i = 0; i < textAreaResize.length; i++) {
    textAreaResize[i].setAttribute('style', 'height:' + (textAreaResize[i].scrollHeight) + 'px;overflow-y:hidden;');
    textAreaResize[i].addEventListener("input", OnInput, false);
   }
   function OnInput() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    }
   }
   areaResize();
$("#text-area").on("input keydown", function () {
    var maxWords = 139;
    var textLength = $(this).val().length;
    // var showedWords = maxWords - textLength;
    $("#carac-count").html(textLength);
    if (textLength >= 0 && textLength < 120){
      console.log("menor que 120")
      $("#carac-count").addClass("blue-font");
    }
    if (textLength >= 120 && textLength <= 130){
      console.log("entre 120 e 130")
      $("#carac-count").removeClass("blue-font");
      $("#carac-count").removeClass("red-font");
      $("#carac-count").addClass("yellow-font");
    } 
    if (textLength > 130){
      console.log("maior que 130")
      $("#carac-count").removeClass("yellow-font");
      $("#carac-count").addClass("red-font");
    }
  });
$("#text-area").on("input keyup", function () {
  console.log("Ola: " + $(this).val().length);
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







