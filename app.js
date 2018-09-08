$(document).ready(function(){
// colocar o que ta escrito na parte dos posts
    $("#button-galinha").click(function(event){
      event.preventDefault();
      var inputValue = $("#galinha-input").val();
      $("#posts-area").append(`<div class="box-content">${inputValue}</div>`)
      $(".box-content").addClass("post-box");
      $("#galinha-input").val("");
      
    });

    // $(".post-list").append(`<li><span>${text}</span><button class="delete-button" data-id="${key}">Excluir</button></li>`)

// fazer o que tem no bot

});