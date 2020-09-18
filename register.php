<!DOCTYPE html>
<html lang="en">
<body>
<?php
    include ('head.php');
?>

    <div class="panel-body">
        <div style="max-width:500px; margin: 0 auto;">
            <form action="registration.php" method="POST">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" class="form-control" />
                </div> <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" name="phone" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password1" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" id="password" name="password2" class="form-control" />
                </div>
                <input type="submit" class="btn btn-success"/>
            </form>
        </div>
</body>
</html>
