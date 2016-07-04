<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>

</script>
<style type="text/css">
	width:70%;
	margin:0px auto;
	border:1px green;
</style>>
</head>
<body>
<div id="wrapper">
<div style="border:1px solid gray;padding:5px;">
Property Image
</div>
<div style="float:left; ;width:100%">

<div style="padding:5px;width:75%;float:left">
<form>
<div id="row0">
<input type="file">  
<select id="opt0">
  <option value="primary">Primary Image</option>
  <option value="secondry">Secondry Image</option>
</select> 
<a href="javascript:void(0)" id="remove">Remove</a>
</div>
</form>
<br/>
<a href="javascript:void(0);" id="add">add another</a>
</div>
</div>
</div>
<script>
var i=1;
$(document).ready(function(){
// append the new image input row 
$("a#add").click(function(){
$("form").append('<div id="row'+i+++'">'+
'<input type="file">'+  
'<select id="opt'+i+'">'+
  '<option value="primary">Primary Image</option>'+
  '<option value="secondry" selected>Secondry Image</option>'+
'</select> '+
'<a href="javascript:void(0)" id="remove">Remove</a>'+
'</div>'
);
//Remove the row
$("a#remove").click(function(){
var id=$(this).parent().attr('id');
$("form").find("div#"+id).remove();
});

// Only one image can be a primary image
$("select").change(function(){
var value=$(this).val();
var opid=$(this).attr('id');
if(value==="primary"){
$("select").each(function(){
if($(this).val()==="primary" && $(this).attr("id")!==opid)
{
$(this).val("secondry");
}
});


}
});
});




});
</script>
</body>
</html>
