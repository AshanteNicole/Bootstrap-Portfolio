// $('.form-control').on('submit', function(event){
//     event.preventDefault();
//     var submit = $("#inputdefault").val().trim()
//     // var payload = {name:name}
//     //   $.post("/api/burgers/",payload, function(data){
//       console.log(name)
//     //   location.reload()
//     })

$("#new-button-form").on("submit", function(event){
    event.preventDefault()
    var newButton = $("#new-button-text").val().trim()
    console.log(newButton)
    topics.push(newButton)
 
})