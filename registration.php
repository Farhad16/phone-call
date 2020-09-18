<?php
    include('database.php');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];

    if (($name == "" || $email == "" || $phone == "" || $password=="")&& ($password1 !== $password2)) {
        header("Location: http://localhost/phone-call/register.php");
    } 
    else {
        $sql = "INSERT INTO user (name, email, phone, password) VALUES ('$name', '$email','$phone','$password1')";
        mysqli_query($conn, $sql);
        header("Location: http://localhost/phone-call/login.php");
        mysqli_close($conn);
}
?>