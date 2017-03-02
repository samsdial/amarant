<?php
$connection = mysql_connect("localhost","alejandr_admin","ale@2017Regis"); // Establishing Connection with Server
$db = mysql_select_db("alejandr_alejandracom", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$day = $_POST['day'];
$month = $_POST['month'];
$year = $_POST['year'];
$name = $_POST['name'];
$email = $_POST['email'];
if($name !=''||$email !=''){
//Insert Query of SQL
$query = mysql_query("insert into registros_landin(registros_landin_day, registros_landin_month, registros_landin_year, registros_landin_name, registros_landin_email) values ('$day', '$month', '$year', '$name', '$email')");
echo "<br/><br/><span>Enviado</span>";
}
else{
echo "<p>Fallo</p>";
}
}
mysql_close($connection); // Closing Connection with Server
?>
