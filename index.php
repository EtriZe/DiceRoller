
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/index.css" type='text/css'>
    <title>DiceRoller</title>

</head>
<body>
    <div class="login-container">
        <h1>Connexion</h1>
        <form action="room.php">
            <label for="username">Pseudo</label>
            <input type="text" id="username" name="username" value="Gorméus" required>

            <label for="codeRoom">Code</label>

            <input type="text" value="33333" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" 
             id="codeRoom" name="codeRoom" required maxlength="5" >
            
            <button type="submit">Se connecter</button>

        </form>
    </div>
</body>
</html>