$(document).ready(function(){
// colocar o que ta escrito na parte dos posts
    $("#button-galinha").click(function(event){
      event.preventDefault();
      var inputValue = $("#galinha-input").val();
      $("#posts-area").append(`<div class="dudu">${inputValue}</div>`)
      $(".dudu").addClass("post-box");
    });

    // $(".post-list").append(`<li><span>${text}</span><button class="delete-button" data-id="${key}">Excluir</button></li>`)



});