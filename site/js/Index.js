// Close the dropdown if the user clicks outside of it
var lis = document.querySelectorAll("a");

for(var i = 0; i < lis.length; i++){
   //console.log(this.id);
   lis[i].addEventListener("mouseover", function(){
      console.log("mouseover");
       this.id="selected";
       
   });

   lis[i].addEventListener("mouseout", function(){
    console.log("mouseout");
       this.id="deselected";
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}
$('a').on("mouseover", function(e) {
  if (e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});   