
<?php
include('database.php');
$operatorName = $_POST['operatorName'];
$operatorNumber = $_POST['operatorNumber'];
$cost = $_POST['cost'];

$dt = new DateTime('now', new DateTimezone('Asia/Dhaka'));
$dateTime =  $dt->format('F j, Y, g:i a');

$duration = $_POST['duration'];



    $sql = "INSERT INTO history (operator, time, duration, operator_name, cost) VALUES 
    ('$operatorNumber', '$dateTime','$duration','$operatorName','$cost')";
    mysqli_query($conn, $sql);
    header("Location: index.php");
    mysqli_close($conn);

?>
