# Game Server task

## Introduction

### Overview

Please develop a back-end for two simple games described below.

The goal of this task is to demonstrate your skills in designing, structuring and writing code, especially:
* Defining useful abstractions and achieving code reuse (this is why it includes two similar games)
* Handling shared mutable state.

We understand that depending on your experience with similar tasks you may find it straightforward or
difficult.

Therefore, we will review and consider incomplete implementations. However, in this case we ask that you
briefly list all the limitations (such as missing or incomplete functionality) of your solution.

### Technologies

It is up to you to choose the technical stack, however we suggest that you use technologies which are relevant
to the position you are interviewing for, and with which you are proficient. If in doubt, please use the
technology stack listed in the job description.

If you chose any technologies or approaches with which you lack experience, feel free to mention this in the
description so that we can keep that in mind when reviewing your solution.

### Documentation

Please including a concise `ReadMe.md` file with the following:
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* How to launch and test the solution (unless it uses the standard approach by the standard build tool).

### Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository.

If anything in the task description is unclear, please do not hesitate to ask.

## Description

### Starting the game

#### Player connects to server

Players can connect to server. There is no requirement to implement any authentication.

#### Server sends account balance to player

There is an account balance (as "tokens") associated with the player, and the server returns the current
balance to the player upon connection. Account balances can be negative. It is acceptable to implement
transient (non-persistent) account balances (e.g., issue 1000 tokens to each player upon connecting).

#### Player chooses game type

Player informs the server about the game they want to play:
* `single-card-game`
* `double-card-game`

#### Server starts game

The server matches two players who have selected the same game type and starts a new game of this type.

### 'Single-card game'

#### Server deals cards

The server deals a single card from the deck to each player and sends the card to the player.

#### Player makes a decision

Each player independently of each other sends the server a decision which is one of:
* `play`
* `fold`

#### Showdown and results

* In case both players picked `fold` each player loses 1 token.
* In case one player picked `play` and the other player picked `fold` then the player who picked `play` wins
  3 tokens, and the player who picked `fold` loses 3 tokens.
* In case both players picked `play` then the cards are compared (see below) - the winning player wins 10
  tokens, and the losing player loses 10 tokens.

The cards are compared as follows:
* If both cards are equal in rank then the game returns to "Server deals cards" stage.
* Otherwise, the player whose card has the highest rank is considered the winning player, and the other player
  is considered the losing player.

##### Example 1

* `Player A` has `Jack of Clubs` and selects `fold`.
* `Player B` has `Ten of Hearts` and selects `play`.
* `Player A` loses 3 tokens, and `Player B` wins 3 tokens.

##### Example 2

* `Player A` has `Queen of Diamonds` and selects `play`.
* `Player B` has `Nine of Spades` and selects `play`.
* `Player A` wins 10 tokens, and `Player B` loses 10 tokens.

### 'Double-card game'

#### Server deals cards

The server deals two cards from the deck to each player and sends the cards to the player. These two cards
are henceforth referred to as "the hand".

#### Player makes a decision

Each player independently of each other sends the server a decision which is one of:
* `play`
* `fold`

#### Showdown and results

* In case both players picked `fold` each player loses 2 tokens.
* In case one player picked `play` and the other player picked `fold` then the player who picked `play` wins
  5 tokens, and the player who picked `fold` loses 5 tokens.
* In case both players picked `play` then the cards are compared (see below) - the winning player wins 20
  tokens, and the losing player loses 20 tokens.

First, the cards with the highest rank from each hand are compared. If they differ, the player whose card has
the highest rank is considered the winner.

If they are equal, then the cards with the lowest rank from each hand are compared.

If those are also equal, then the game returns to "Server deals cards" stage (new hands are dealt).

##### Example 3

* `Player A` has `Jack of Clubs` and `Nine of Hearts` and selects `play`.
* `Player B` has `Jack of Diamonds` and `Ten of Diamonds` and selects `play`.
* `Player A` loses 20 tokens, and `Player B` wins 20 tokens.

### Finishing the game

Upon finishing of the game, the server applies the game results to player balances, and informs the players
about the game result as well as their respective updated balances.

After this, both players are returned to "Player chooses game type" stage.

## Implementation Notes

The deck used should be a [52-card standard deck](https://en.wikipedia.org/wiki/Standard_52-card_deck).

The rank values should have the following ordering:
* Ace (strongest)
* King
* Queen
* Jack
* Ten
* Nine
* Eight
* Seven
* Six
* Five
* Four
* Three
* Two (weakest)

You can use your own discretion on how to express the domain of your solution (such as the cards, balance
amounts, etc.) and the API between the server and the client.

Your design should be such that makes adding other games less difficult.

## Optional Tasks

If you are motivated to further showcase your skills you can:
* Introduce a constraint that account balances cannot be negative and proper handling for this constraint
* Add a client UI (command line or graphical)
* Add another game (at your discretion - it can be an existing game such as
  [Texas Hold'em](https://en.wikipedia.org/wiki/Texas_hold_%27em) or one that you invent)
* Introduce variations of games that support more than two players per game round and/or multiple decision
  rounds and/or sequential decisions
* Add player authentication and/or make account balances persistent
* Handle player disconnects (consider allowing reconnecting to a running game and games timing out)
* Describe what you believe the optimal strategy for these games is for the players
* Implement a "bot" which plays the games.

These tasks are fully optional.
