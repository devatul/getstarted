<html>

<head>
    <title>JSON example</title>
        <script type="text/javascript" src="jquery-1.11.3-jquery.min.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <style>
        table,
        th,
        td,
        tr {
            border: 1px solid #ccc;
        }
        
        th {
            padding-left: 20px;
            padding-right: 20px;
        }
        
        ul {
            margin-top: 15px;
        }
        
        li {
            list-style: none;
            display: inline;
            padding: 5px;
            border: 1px solid;
            background-color: #B3E4F5;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .active {
            background-color: #0782AB;
        }
    </style>
    
     <style>
        input[type=text]{
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        #div2 {
            width: 50%;
            margin-top: 20px;
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
        }
        
        span {
            color: red;
        }
    </style>

   
      <script language="javascript">
   
        $(document).ready(function() {
        //First Name validation function
        function valid_fname() {
            var name = $("#fname").val().trim(); //get the value of name input field
            if (name == "") { // checks if field is not empty
                $("#fname").css("border-color", "red"); // Error message shown if field is empty
                return false;
            } else {
                $("#fname").css("border-color", "#ccc");
                return true;
            }
        }
           //Last Name validation function
        function valid_lname() {
            var name = $("#lname").val().trim(); //get the value of name input field
            if (name == "") { // checks if field is not empty
                $("#lname").css("border-color", "red"); // Error message shown if field is empty
                return false;
            } else {
                $("#lname").css("border-color", "#ccc");
                return true;
            }
        }
        //Date validation function
        function valid_date() {
            var tdate = $("#dob").val().trim(); //get the value of name input field
            if (tdate == "") { // checks if field is not empty
                $("#dob").css("border-color", "red"); // Error message shown if field is empty
                return false;
            } else {
                $("#dob").css("border-color", "#ccc");
                return true;
            }
        }
          // paginate function start
            function paginate(page) {
                var num_rec_per_page = 5;
                var startfrom = (page - 1) * num_rec_per_page;
                $("#div1 > table").append("<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>DOB</th></tr>");
                /*........AJAX...........*/
              $.ajax({
                url:'data.json',
                dataType: 'json', 
                success: function(person) { 
                  $.each(person, function(i, val) {
                    if (i >= startfrom && i < startfrom + num_rec_per_page)
                        $("#div1 > table").append("<tr><td>" + val.id + "</td><td>" + val.firstname + "</td><td>" + val.lastname + "</td><td>" + val.DOB + "</td></tr>");
                });
                  var clas = "";
                var total_rec = person.length;
                var total_pages = Math.ceil(total_rec / num_rec_per_page);
                $("#div1 > table").append("<tr><td colspan='4'><ul></ul></td></tr>");
                for (var j = 1; j <= total_pages; j++) {
                    if (j == page) {
                        clas = 'active';
                    } else {
                        clas = '';
                    }
                    $("ul").append("<li class='" + clas + "' value='" + j + "'>" + j + "</li>");
                }
                $("ul>li").click(function() {
                    page = $(this).attr("value");
                    $("#div1>table").empty();
                    paginate(page);
                });
                }
            }); 
                    /*........AJAX...........*/
                
              
                
            }
          // Paginate function end

            var page = 1;
            $("#div0").append("<h1>JSON Data Display and paginating using Jquery </h1>");
            paginate(page);//first pagination call
            
            // Datepicker fuction call
            $("#dob").datepicker({
                dateFormat: 'dd-mm-yy'
            });
      // form validation initiated here
            $("#submit").click(function() {
            
                var fname = $("#fname").val();
                var lname = $("#lname").val();
                var dob = $("#dob").val();
               // var id= person.length+1;
                var err = 0;
                if (!valid_fname()) {
                    err = 1;
                }
                if (!valid_lname()) {
                    err = 1;
                }
                if (!valid_date()) {
                    err = 1;
                }
                   if (err == 0) {
                   
                  //var item = { id: "25", firstname: fname, lastname: lname,DOB: dob};
                     var data = [];
                    var event = new Object();
        event.id = "25";            
        event.firstname = fname;
        event.lastname = lname;
        event.DOB = dob;
        data.push(event);
                  // person.push(item);
                   //$('form#sub').find("input[type=text]").val("");
                    // AJAX form submit
                    $.ajax({
        type: "GET",
        dataType : 'json',
        async: false,
        url: 'save_json.php',
        data: { data: JSON.stringify(item) },
        success: function (su) {alert(su); },
        failure: function() {alert("Error!");}
    });
   
                     
                    //-----------End of AJAX------------
                }
               

            });
        });
       
    </script>
</head>

<body>
    <div id="div0"></div>
    <div id="div1">
        <table></table>
    </div>
    <div id="div2">
        <center><span id="msg1" style="color:green"></span></center>
        <form id="sub">

            <label for="name">First Name</label>
            <input type="text" id="fname" name="fname"></br>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname"></br>

            <label for="date">Date of Birth</label>
            <input type="text" name="dob" id="dob"></br>

            <input id="submit" type="button" value="Submit">
            <span>All fields mandatory</span>
        </form>
    </div>
  
      
</body>

</html>
