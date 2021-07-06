# Lets Play Tic Tac Toe

Start Game
    npm run game:tic-tac-toe

Test Game
    npm run test
### 1. CreatetheBoard
The board is made up three rows and three columns, totalling 9 "squares" The board should print to the screen in a simple format
e.g.

> tic-tac-toe
Welcome! Here is your board:

### 2. Create2playersandmakethe1stmovebybothplayers
Each player should have a unique name
The players should be able to move an unpopulated square Make sure to show which player is at play
e.g.
> tic-tac-toe
Welcome! Here is your board:
Player1 (X) where would you like to move?
>22
Player2 (O) where would you like to move?
>11
     
 - , -, -
 - , -, -
 - , -, -
 
 - , -, -
 - , -, -
 - , -, -

 - , -, -
 - , X, -
 - , -, -

 O , -, -
 - , X, -
 - , -, -

### 3. GamePlay
Players prompted for a move and should alternate turns Board should be displayed after each turn

Player1 (X) where would you like to move?
>22
Player2 (O) where would you like to move?
>11
...
### 4. CheckforEnd
Check for a winner (3 in a row, vertically, horizontally, or diagonally
e.g.
Player1 (X) where would you like to move?
>13
Player1 WINS!

#### Sample Game Flow
e.g.
                - , -, -
                - , X, -
                - , -, -

                O , -, -
                - , X, -
                - , -, -

                O , O, X
                O , X, X
                X , -, -
  
 