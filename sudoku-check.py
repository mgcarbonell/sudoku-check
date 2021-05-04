################################################################################
# Sudoku is a number placement puzzle. The objective is to fill a 9x9 grid with
# digits so that each column, each row, and each of the nine 3x3 sub-grids that
# compose the grid contains all of the digits from 1 to 9.
#
# This algorithm should check if the given grid of numbers represents a correct
# solution to Sudoku.
#
# Example:
#
# For...
#
# grid = [
#     [1, 3, 2, 5, 4, 6, 9, 8, 7],
#     [4, 6, 5, 8, 7, 9, 3, 2, 1],
#     [7, 9, 8, 2, 1, 3, 6, 5, 4],
#     [9, 2, 1, 4, 3, 5, 8, 7, 6],
#     [3, 5, 4, 7, 6, 8, 2, 1, 9],
#     [6, 8, 7, 1, 9, 2, 5, 4, 3],
#     [5, 7, 6, 9, 8, 1, 4, 3, 2],
#     [2, 4, 3, 6, 5, 7, 1, 9, 8],
#     [8, 1, 9, 3, 2, 4, 7, 6, 5]
# ]
#
# The output should be: sudoku(grid) = true
#
# For...
#
# grid = [
#     [1, 3, 2, 5, 4, 6, 9, 2, 7],
#     [4, 6, 5, 8, 7, 9, 3, 8, 1],
#     [7, 9, 8, 2, 1, 3, 6, 5, 4],
#     [9, 2, 1, 4, 3, 5, 8, 7, 6],
#     [3, 5, 4, 7, 6, 8, 2, 1, 9],
#     [6, 8, 7, 1, 9, 2, 5, 4, 3],
#     [5, 7, 6, 9, 8, 1, 4, 3, 2],
#     [2, 4, 3, 6, 5, 7, 1, 9, 8],
#     [8, 1, 9, 3, 2, 4, 7, 6, 5]
# ]
#
# The output should be: soduku(grid) = false
#
# The output should be false: each of the nine 3x3 sub-grids should contain all
# of the digits from 1 to 9.
#
# Summary:
# 1. Create 3 different functions to check if it is valid sudoku(row/col/3x3)
# 2. Loop through each function and check if it is valid
# 3. Return true if all functions pass.
################################################################################

# A general approach is to check each row, then the columns, then the 3x3.
# I really liked the helper function idea that was presented to me during
# the interview.

def sudoku(grid):
    # check the row
    for row in range(len(grid)):
        if ValidRow(grid, row) == False:
            return False

    # check the columns
    for col in range(len(grid)):
        if ValidCol(grid, col) == False:
            return False

    # check the 3x3s
    # start at idx 0, up to 3, repeat for the length of the grid
    # 0, 1, 2; 3, 4, 5; 6, 7, 8 -> 9
    for row in range(0, len(grid), 3):
        for col in range(0, len(grid), 3):
            if ValidBox(grid, row, col) == False:
                return False

    return True


def ValidRow(grid, row):
    check_list = []
    for i in range(len(grid)):
        if grid[row][i] in check_list:
            return False
        else:
            check_list.append(grid[row][i])
    return True


def ValidCol(grid, col):
    check_list = []
    for i in range(len(grid)):
        if grid[i][col] in check_list:
            return False
        else:
            check_list.append(grid[i][col])
    return True


def ValidBox(grid, startRow, startCol):
    check_list = []
    for row in range(3):
        for col in range(3):
            box_val = grid[startRow + row][startCol + col]
            if box_val in check_list:
                return False
            else:
                check_list.append(box_val)
    return True


# grid = [
#     [1, 3, 2, 5, 4, 6, 9, 2, 7],
#     [4, 6, 5, 8, 7, 9, 3, 8, 1],
#     [7, 9, 8, 2, 1, 3, 6, 5, 4],
#     [9, 2, 1, 4, 3, 5, 8, 7, 6],
#     [3, 5, 4, 7, 6, 8, 2, 1, 9],
#     [6, 8, 7, 1, 9, 2, 5, 4, 3],
#     [5, 7, 6, 9, 8, 1, 4, 3, 2],
#     [2, 4, 3, 6, 5, 7, 1, 9, 8],
#     [8, 1, 9, 3, 2, 4, 7, 6, 5]
# ]

grid = [
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
]

print(sudoku(grid))
