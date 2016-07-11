<html>
<head>
<title>Assignment1</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<style>
ul{
list-style-type:none; 
}
</style>
<head>
<body>
<ul class="tree" id="tree">  
    <li id="parent1"><input type="checkbox" name="account_settings" value="yes">Account Settings 
        <ul class="child-group">
            <li><input type="checkbox"  name="one" value="one">AS One</li>
            <li><input type="checkbox"  name="two" value="two">AS Two</li>
            <li><input type="checkbox"  name="user_roles" value="user_roles">Users &amp; Roles</li>
        </ul>
    </li>
    <li id="parent1"><input type="checkbox" name="rl_module" value="yes">Accounting
        <ul class="child-group">
            <li><input type="checkbox"  name="vat" value="yes">VAT</li>
            <li><input type="checkbox"  name="bank_account" value="yes">Banking</li>
            <li><input type="checkbox"  name="view" value="yes">View</li>
            <li><input type="checkbox"  name="crud" value="yes">CRUD</li>  
        </ul>
    </li>
       <li id="parent1"><input type="checkbox" name="Stock" value="yes">Stock
        <ul class="child-group">
            <li><input type="checkbox"  name="Sales" value="yes">Sales</li>
            <li><input type="checkbox"  name="Purchese" value="yes">Purchese</li>
            <li><input type="checkbox"  name="Transit" value="yes">Transit</li>
            <li><input type="checkbox"  name="floor" value="yes">On floor</li>  
        </ul>
    </li>
</ul>
<script>
$(document).ready(function(){
  $("li#parent1 ").children("input").click(function(){	//When parent checkbox clicked
	if($(this).is(':checked')){		//Check if it is checked
	  $(this).siblings("ul").find("li > input:checkbox").prop("checked",true);//Check all group checkboxes if parent is checked
	}else{
  	  $(this).siblings("ul").find("li > input:checkbox").prop("checked",false);//uncheck all group checkboxes if parent is not checked
	}
  });

  $("ul.child-group > li").children("input").click(function(){	//When clicking on sub items in the checkbox list
    if($(this).is(':checked')){               //check if currect checkbox is being checked or unchecked. if checked parent will also be checked and if unchecked than it will checked that either this is the checked sub item  
      $(this).parent('li').parent('ul').siblings('input').prop("checked",true);
    }else{
    var count=0;
    
      $(this).parents('ul').children('li').each(function(){  //Checking each sub item in checkbox group for eiter it is checked or not.
      if($(this).children("input").prop("checked")){  
       count++;
      }
      if(count<=$(this).parent('ul').children('li').length && count   > 0){
        $(this).parent('ul').siblings('input').prop("checked",true);
      }else{
        $(this).parent('ul').siblings('input').prop("checked",false);
      }
      });
   }
  });
});
</script>
</body>
</html>
