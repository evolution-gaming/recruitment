# Coloured Objects

## Part 1 - `findClosestPoints`

Create a C++ function `findClosestPoints` which takes the following parameters:

* a collection of 3-dimensional points called `points`
* a 3-dimensional called `origin`
* an integer value `n`

The function returns the `n` nearest `points` to `origin`. 

### Example

#### Parameters 

`points`:

```
1,1,1
1,2,3
2,2,2
2,3,6
6,6,6
0,0,1
```

`origin`:

`2,2,2`

`n`:

`2`

#### Returned value

```
1,2,3
2,2,2
```

## Part 2 - Blueprints

Using Unreal Engine, place multiple objects on the level. Each object must have a static mesh. 

Create an array of 3-dimensional points from the positions of these objects and pass them to 
`findClosestPoints` which you developed in "Part 1". Use an arbitrary `origin` and `n`.

Change the colour of the returned `n` objects to a different colour than the initial one. 

Use Unreal Engine Blueprints to implement this task.
