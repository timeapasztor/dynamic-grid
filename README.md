# Dynamic Grid Task

## Setup

- Fork this task and work on the forked one
- After the task completion, forward to us forked sandbox

## Task explanation

Create a dynamical grid dimensions 3x3 and populate it in order with elements based on the given json('data-example01.json' file inside src folder).

Using tables as a solution won't be considered as valid.

Elements can occupy different placements:

- 1 horizontal position, 1 vertical position with dimensions width: 20px and height: 20px
- 2 horizontal positions, 1 vertical position with dimensions width: 40px and height: 20px
- 1 horizontal position, 2 vertical position with dimenstions width: 20px and height: 40px

Gap between elements should be 12px.

Elements should occupy first available placement in the grid that satisfies their dimension requirements.

When you reach an element that cannot be placed in the grid, stop populating the grid.

Solution should support any type of data configuration, meaning that this should support 'data-example01.json', 'data-example02.json', 'data-example03.json'

For example:
Ideally it would look like
![alt text](./Dynamical_grid-example01.png "Grid view 01")

other cases

![alt text](./Dynamical_grid-example02.png "Grid view 02")

![alt text](./Dynamical_grid-example03.png "Grid view 03")

While working on the task, document what is your approach in solving it.

After sending us back the task, if you have any additional input that could contribute to the task completion, send it to us before the task presentation.
