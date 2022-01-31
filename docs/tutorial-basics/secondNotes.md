---
sidebar_position: 4
---

# Inputs and If (Notes 2)

### Inputs
Input is a way to get input from the user. When running an input statement, you would have to enter the terminal/console, type the input and then click Enter.
Input is taken in as a string.

``` py
    #This example shows a string being stored in the variable ‘x’ 
    x = input("enter your name") 
```

### If Statements
If statement is a way to use a boolean value and determine what to do based on whether it is true or false.

``` py
    #This example shows an example of an if statement
    raining = True
    if(raining):
        print("wear a coat")
```

If statements typically use **operators** to figure out the boolean value rather than a boolean variable.

``` py
    # a variable weather set to the string raining
    weather = "raining"
    #if statement below
    if(weather=="raining"):
        print("wear a coat")
```

The above **operator** used is the == operator, which says if two things are equal to each other.  A table of operators are listed below:


| Operator    | Description |
| :---------: | :---------- |
| ==   | Equals to      |
| !=   | Not equal         |
| >   | Greater than       |
| <  |  Less than       |
| >=   | Greater than or equal to       |
| <=   | Less than or equal to        |

### Examples

``` py
    #Is 2 equal to 3
    print(2==3)
```
Output is ``` False ```
<br/>

``` py
    #Is 4 not equal to 5
    print(4!=5)
```
Output is ``` True ```
<br/>



``` py
    #Is 12 greater than 3
    print(12>=3)
```
Output is ``` True ```