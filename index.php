<?php
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server,$username,$password);

if(!$con){
    die("this connection is failed". mysqli_connect_error());
}
echo "you succeded connection.";
?>