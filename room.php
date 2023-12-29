<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>DiceRoller</title>
    <link rel="stylesheet" href="styles/room.css" type='text/css'>
    <title>Liste Déroulante avec CSS et JavaScript</title>
    <script type="text/javascript" src="room.js"></script>
  </head>
<body>

  <div class = "dice_thrower">
        <input class = "text_dice_thrower">
        <button type="submit" class = "apply_text_dice_thrower"> Lancer dé ! </button>
  </div>
  

  <div class="row"> </div>

  <div class="information">
    <div class="username"> Username : <?php echo $_GET['username'];?> </div>
    <div class="codeRoom">  Room Code : <?php echo $_GET['codeRoom']; ?></div>
    <div id="PeopleInRoom">  Nbr Of Player : </div>
  </div>

  <div class="playerHandler">
    <button onclick="addPlayer()"  id = "addcanvas"> Add Player </button>
    <button onclick="removePlayer()"  id = "addcanvas"> Remove Player </button>
  </div>

  

</body>

<script id="shaderVs" type="x-shader/x-vertex">
    attribute vec4 a_Position;
    void main() {
        gl_Position = a_Position;
    }
</script>

<script id="shaderFs" type="x-shader/x-fragment">
    precision mediump float;
    uniform vec4 u_FragColor;
    void main() {
        gl_FragColor = u_FragColor;
    }
</script>

<script> addPlayer() </script>


</html>