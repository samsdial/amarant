<?php
$conexion = mysql_connect("localhost","alejandr_admin","ale@2017Regis")
or die ("Fallo en el establecimiento de la conexión");
mysql_select_db("alejandr_alejandracom") or die("Error en la selección de la base de datos");
mysql_set_charset('utf8',$conexion);
"host" => "localhost" 
?>