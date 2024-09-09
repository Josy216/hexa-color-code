function change(){
    var hexnumbers= ["0","1","2","3","4","5","6","7","8","9","A","B","C","E","F"];
    var hecodes = '';
    for(var i=0; i < 6; i++){
        var pro = Math.floor(Math.random() *hexnumbers.length);

        hecodes += hexnumbers[pro]
   }
   document.getElementById("hexcode").innerHTML= hecodes;

   document.getElementsByTagName("body")[0].style.background = "#" + hecodes;
}