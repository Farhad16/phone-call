<?php
include ('head.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr class="success">
                    <th scope="col">Phone Number</th>
                    <th scope="col">Operator Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Date and Time</th>
                    <th scope="col">ID</th>
                    <th scope="col"></th>
                </tr>
        </thead>

        <?php

    include ('database.php');

    $sql = "SELECT * FROM history"; 
    $result = mysqli_query($conn,$sql);


    while($row = mysqli_fetch_assoc($result)){  

    ?> 

    <tbody>
        <tr>
            <td><?php echo $row['operator']?></td>
            <td><?php echo $row['operator_name']?></td>
            <td><?php echo $row['duration']?></td>
            <td><?php echo $row['cost'] . " Tk"?></td>
            <td><?php echo $row['time']?></td>
            <td><?php echo $row['id']?></td>
            <?php 
                echo "<td><a href=\"deleteHistory.php?id=$row[id]\"><button class='btn btn-danger'>Delete</button></a></td>"
            ?>
        </tr>
    </tbody>
    <?php
    }

    mysqli_close($conn);
    ?>

    </div>

</body>
</html>
