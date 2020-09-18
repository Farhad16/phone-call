<?php
    include ('database.php');
    $email    = $_POST['email'];
    $password    = $_POST['password'];
    
    $sql = "SELECT * FROM `user` WHERE email='$email' and password = '$password'"; 
   
    $result = mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc( $result);
         if($row['email']==$email && $row['password']==$password){
             header("Location: index.php");
         }else{
            header("Location: http://localhost/phone-call/login.php");
         }
        
    
     mysqli_close($conn);
?>