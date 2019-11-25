<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$Nextofkin = $_POST['nextofkin']
$dot = $_POST['dob'];
$level = $_POST['level';
$Monthlypay = $_POST['Monthlypay'];
$Department = $_POST['Department'];
$Manager = $_POST['Manager'];
$con = mysqli_connect("localhost","root","","Wragby_db"); //connection to the database here..
$sql = "INSERT INTO register_tb (name,phone,email,password,nextofkin,dob,level,Monthlypay,Manager) 
VALUES ('$firstname', '$name','$phone','$email','$Nextofkin','$dot','$level','$Monthlypay','$Manager',)";
$mysql= mysqli_query($con, $sql),

?>

