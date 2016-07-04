<html>
<head>
<title>Assignment3</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<head>
<body>
<a href="#" id="link1">Click event </a><span id="click" style="color:red"></span><br/><br/>
<a href="#" id="link2">Hover event</a><br/><br/>
<a href="#" id="link3">Focus event</a><br/><br/>
<a href="#" id="link4">Mouseover event</a><br/><br/>
<a href="#" id="link5">Mouseout event</a><br/><br/>
<a href="#" id="link6">Prevent default</a><br/><br/>
<script>
$(document).ready(function(){
   $("#link1").click(function(){
     alert("This is ckick event");//Ckick event triggered 
   });

   $("#link2").hover(function(){
     alert("This is hover event");//hover event triggered 
   });

   $("#link3").focus(function(){
     alert("This is focus event");//focus event triggered 
   });
   
   $("#link4").mouseover(function(){
     alert("This is mouseover event");//mouseover event triggered 
   });

   $("#link5").mouseout(function(){
     alert("This is mouseout event");//mouseout event triggered 
   });

   $("#link6").click(function(e){
    e.preventDefault();			//clicking prevented 
   });
});
</script>
</body>
</html>
