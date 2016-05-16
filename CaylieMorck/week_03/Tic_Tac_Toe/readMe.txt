
First step for me with this game was writing out the logic in English. A good tip I was given was to imagine describing how to play the game to a five year old, and then try translating that into necessary functions, loops, if statements etc and then translate again into code.

Easier said than done!
Firstly, I wrote out my basic HTML file and CSS. Creating four boxes, a header and two score boards at the bottom of the page.
Once I was happy with the simplistic design, I went into my Javascript and began writing out my psuedo code for easy reference later.
The biggest struggle I had with this past of the project was deciding whether a for loop vs an if statement was needed. I kept confusing the two.

First I defined my functions. I added the sessionStorage variable last after I called it at the end of my code.

Before creating the event, I created my getWinner function. I then created four functions for each way that a player could have won: byRow, byColumn, byDiagonal, by ReverseDiagonal to use within the getWinner function.
I defined these four functions using a "for loop". I gave each box a "data value" for both row and column. (Thank you Sherif!)
I used standard [i] to represent the row and [j] to represent the column. By setting the gameboard index to undefined, after each button click the undefined would then be filled with either x or o. Then, using the for loops, we would check through each column, row, diagonal and cross-diagonal for a possible winner. And if none were filled, it would call the "possible tie" result.
Once a winner was identified, I used Sweet Alerts to show the winner and then called my resetGame function to start new.
I also used sessionStorage and created a function called updateScore to hold onto the winners for further tracking.


My biggest issue was definitely the css/styling aspect. I limited myself initially by centering the items using a "page-wrap", so when it came time to actually design, my possibilities were limited.
I also struggled with identifying which JS/JQuery items were needed at which parts, depending on the pseudo code that I had written initially.

My favourite part was working with the local storage, and using the methods that I learned in jQuery to make my functions work with a lot less code.
