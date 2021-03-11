# Minesweeper

## Description

Please develop a 3D game client (front-end) for a "Minesweeper" puzzle.

The puzzle is played connecting to the backend located at
[wss://hometask.eg1236.com/game1](wss://hometask.eg1236.com/game1) over WebSockets and sending
commands to it.

Valid commands include:
* `help` - lists other commands
* `new <l>` - chooses the game level
* `map` - returns the current map
* `open <x> <y>` - opens the cell at coordinates `(<x>, <y>)`

The goal of the puzzle is to open all cells without striking any mines. The rules match 
[standard Minesweeper rules](https://en.wikipedia.org/wiki/Minesweeper_(video_game)).

You don't have to write any automated solving algorithm although if you do, it will be appreciated.

## Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository. Include both the source code, 
and an archive with the build release.

If anything in the task description is unclear, or you encounter any problems, please do not hesitate to ask.

## Implementation notes

The application should be based on Unreal Engine 4. 

Please use C++ for:
* Communication with the server using WebSockets 
* Cells container.

Usage of Unreal Engine 4 Animation Blueprints will be considered beneficial.
