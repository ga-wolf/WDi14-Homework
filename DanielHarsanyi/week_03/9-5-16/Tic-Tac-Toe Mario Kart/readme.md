Welcome to Tic Tac Toe Mari Kart style! (Or Tic Tac Mari-Toe Kart I guess?)

This was built as my first 'real' project as part of the General Assembly Web Development Immersive Course in Sydney, Australia, May 2016.

When you load the game you'll be greeted with a screen to choose your player icons.
Hover over each player choice and enjoy the nostalgia!
Once both players have chosen an icon (you can't both have the same!) the game board will appear.
Player 1 always goes first (the player who's icon is the top one in the score counter in the bottom left corner.)
Then proceed as a normal game of tic tac toe alternating players turns.
If a player wins an alert will pop up! If no one wins you will be able to pay again.
Hit the restart button to play again.
You can refresh the page to choose new characters without losing your score count. To reset the scores back to 0 simply
press the set scores button in the bottom left corner.

Tech Specs:

For this project I used HTML, CSS, Javascript and several plugins/libraries - jQuery, Sweet Alert and Animate.css & Easing for the animations.
I used FLVTV to download the audio from YouTube Links and Audacity to edit the music I need from them (eg stitching together the two pieces of music
  and pulling out the characters hover over selection audio)

Approach:

I first thought about the project as if I was playing on paper and then broke the project down in to the small functions I'd need. At first I built it just using X and O tokens. The Mario theme came once I had the game logic perfect. Eg:
  1) Drawing the game board
  2) Deciding who's turn it was
  3) Adding that players token to the game board
  4) Keeping track of where that player went
  5) Switching to player 2
  6) Deciding whether there was a winner
  7) Repeat until there was a winner!

I then added the ability to save the score in the winner counter (and used local storage to store it across refreshes) and adding a reset scores button.

After that came the idea to add Mario Kart characters and he background. Then I added the hover effect & music. The final touch was the logo!

I hope you enjoy!
