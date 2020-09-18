<?php
    include('database.php');

    $id = $_GET['id'];
    
    $sql = "DELETE FROM `history` WHERE  id = '$id'"; 
    mysqli_query($conn,$sql);
    
    header("Location: http://localhost/phone-call/history.php");
 
?>