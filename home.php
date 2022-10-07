<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Speed Typing Game</title>
  </head>
  <body>
    <div class="container">
      <form class="inputs_form" action="home.php" method="post">
        <input type="text" placeholder="Enter your name" name="pname" id="pname" autocomplete="off">
        <input type="text" placeholder="username" name="username" id="username" autocomplete="off"><br>
        <button class="btn" name="btn">Start Game</button>
        </form>
      
      
      

      <div class="game hidden">
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="inside-circle">
              <div class="single">
                <span id="timeleft">Time Left: </span>
                <span class="time-left">30</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://coloriage.info/images/ccovers/1604513863adorable-petit-chaton.jpg"
        />

        <div class="top">
          <div class="single">
            <span id="wpm">WPM: </span>
            <span class="wpm">30</span>
          </div>
          <div class="single">
            <span id="score" name="score" >Score: </span>
            <span class="score">0</span>
          </div>
        </div>
        <div class="input-section">
          <div class="word">Hello</div>
          <input type="text" class="input" />
        </div>
        <div class="text"></div>
      </div>
      <div class="game-ended hidden">
        <h2>Game Ended...</h2>
        <button class="game-ended-btn">Try Again</button>
      </div>
    </div>


<script src="app.js"></script>

  </body>
</html>


<?php
if(isset($_POST['btn'])){
  include "db_connect.php";

if(isset($_POST['username'])){
  $username = htmlspecialchars($_POST['username']);
  $pname = $_POST['pname'];
  $score = $_POST ;

  $insert = "INSERT INTO `players`(`id`, `pname`, `username`,score)
   VALUES ('value-1','$pname','$username','$score')";
  echo'<script>start_game()</script>';
}
     

  mysqli_query($conn, $insert);


  }


