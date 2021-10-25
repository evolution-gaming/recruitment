# Backend - Simple Game Service Assignment

## Introduction

As part of applying to us, we would like you to complete the following code assignment using Java. We suggest that you spend around 4 to 8 hours to complete the tasks.

The goal of this task is to demonstrate your skills in designing, structuring and writing code. We understand that depending on your experience with similar tasks you may find it straightforward or difficult. Therefore, we will review and consider incomplete implementations. However, in this case we ask that:
* You focus on domain logic and structure of your solution instead of technical implementation details, such 
  as applying third party libraries to implement the communication layer
* You briefly list all the limitations (such as missing or incomplete functionality) of your solution.

### Make a game service in Java

You are tasked with creating a RESTful service from which players can play a simple game. The requirements for the service are:

* It should return the initial state of the game and include the following information:
  * ´Balance´ with initial amount 5000€
* It should handle a play request, which can have 2 different modes play for free and play for cash
  * ´Play for free´ – bets are never deducted from balance
  * ´Play for cash´ – bets are deducted from balance
  * Any winnings will be added to the balance
  * The outcome should include the new balance
* It should accept any bet between 1€ and 10€
* In any round
  * the player has a 30% chance of winning
  * the win can be small 3x the bet amount, medium 10x the bet amount and big 50x the bet amount
  * the player also has a 10% chance of winning a free round.
* Free round works in the same way as a normal round except that no bet is deducted from the balance. The free round should follow immediately after winning a free round.
* The player can both win money and a free round at the same time.
* It should be possible to see all previous game outcomes for a specific player or a specific game round

Any code that you feel can be reusable should be added into a &quot;framework&quot; component, only runtime persistence is expected (in memory DB).

### Documentation

Please include a concise `ReadMe.md` file with the following:
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* Documentation on how to use the APIs and start the service

We do not require the documentation to be verbose or lengthy - short descriptions are acceptable, and details
can be discussed on the interview.

### Nice to have:

* Unit / Acceptance test cases

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user [@evo-home-task](https://github.com/evo-home-task) access to the repository.

Good Luck!
