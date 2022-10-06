# Pipes Puzzle

## Rules

Please develop a game client for a "Pipes" puzzle.

The puzzle is played by connecting to the backend located at
[wss://hometask.eg1236.com/game-pipes/](wss://hometask.eg1236.com/game-pipes/) over WebSockets and sending
commands to it.

Valid commands include:
* `help` - lists other commands
* `new <l>` - chooses the game level
* `map` - returns the current map
* `rotate <x> <y>` - rotates the tile at coordinates `(<x>, <y>)`
* `verify` - verifies if the current solution is a valid one (if yes, it will return a level password).

The goal of the puzzle is to rotate the tiles on the map to make all pipes connected in a single group, with
no loops and no dangling pipes.

For example, given the map of:
```
┛┃╻┗╺╺┏╻
┣╹╺╋┫┓┃╹
┏┏┓┏━╻━━
╹┳┳╻╹━┣┛
━╻┻┣╻┳┣╺
┏┓┃┓┫┻╹╺
┗┳┳┓┛╋┓━
╻┗┓╺╸┗━┏
```
... you should rotate it to ...
```
┏━╸┏╸╻┏╸
┣╸╺╋┳┛┃╻
┗┓┏┛┃╻┃┃
╻┣┫╻╹┃┣┛
┃╹┣┫╻┣┻╸
┗┓┃┗┻┫╻╻
┏┫┣┓┏╋┛┃
╹┗┛╹╹┗━┛
```

There are 6 levels available, with increasing size and thus increasing complexity.

## Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository.

Please including a concise `ReadMe.md` file with the following:
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* How to launch the solution.

We do not require the documentation to be verbose or lengthy - short descriptions are acceptable, and details
can be discussed on the interview.

If anything in the task description is unclear, or you encounter any problems, please do not hesitate to ask.

Please deploy your solution - there are easy ways to do this such as [Surge](https://surge.sh/) and 
[Netlify](https://www.netlify.com/) - and include the publicly accessible URL in your ReadMe.md.

## Implementation and grading notes

Implement the UI to solve levels manually or using partial "assistance" features (feel free to express any ideas).

We will be glad to review and discuss the "auto-solver" with you if you choose to implement one. In such case please provide level passwords that you obtained.

We will appreciate if you use:
* TypeScript
* React and/or Canvas (2D or WebGL)
* Redux or MobX for state management if you believe a state management library is useful for your solution.
  
However, we will review solutions using other technologies as well - you are free to pick technologies you
are comfortable working with.

If you chose any technologies or approaches with which you lack experience, please mention this in the
description so that we can keep that in mind when reviewing your solution.

The goal of this task is to demonstrate your skills in designing, structuring and writing code, especially:
* Defining useful abstractions and achieving modularity and code reuse,
* Handling state.

If possible, your design should be such that makes adding other similar games less difficult.
