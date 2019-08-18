// Close the dropdown if the user clicks outside of it
var lis = document.querySelectorAll("a");

for(var i = 0; i < lis.length; i++){
   //console.log(this.id);
   lis[i].addEventListener("mouseover", function(){
       this.id="selected";  
   });

   lis[i].addEventListener("mouseout", function(){
       this.id="deselected";
   });

   lis[i].addEventListener("click", function(){
   });
}