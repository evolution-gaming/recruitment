# Sokoban Puzzle

## Rules

Please develop a game client for a "Sokoban" puzzle.

The puzzle is played connecting to the backend located at
[wss://hometask.eg1236.com/sokoban/](wss://hometask.eg1236.com/sokoban/) over WebSockets and sending
commands to it.

Valid commands include:
* `help` - lists other commands
* `new <l>` - chooses the game level
* `map` - returns the current map
* `up` - move up
* `down` - move down
* `left` - move left
* `right` - move right
* `verify` - verifies if the current solution is a valid one (if yes, it will return a level password).

The goal of the puzzle is to move the boxes to the box destinations.

The symbols represent:
* ⬜ - wall
* 🟫 - empty space
* 📥 - box destination
* 📧 - box
* 🧝 - player character who can move the box

There are multiple levels available, with differing complexity.

## Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository.

Please including a concise `ReadMe.md` file with the following:
* Level passwords that you obtained (it is not required to find all of them - we do not expect that all or even most
  candidates will solve the largest levels)
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* How to launch the solution.

We do not require the documentation to be verbose or lengthy - short descriptions are acceptable, and details
can be discussed on the interview.

If anything in the task description is unclear, or you encounter any problems, please do not hesitate to ask.

## Implementation and grading notes

You are not required to develop a full "auto-solver" and can choose to just implement a UI and solve levels
manually, or using partial "assistance" features. Nevertheless, we will be glad to review and discuss the
"auto-solver" with you if you choose to implement one.
