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

:::caution
Everything inside of if statements must be tabbed over once, or if there are if statements within that if statement, you add another tab.
:::

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

### Else
Along with having a regular if statement, you can attatch a single else statement, to run something based on the if condition.

The code within the else statement would only run if the if statement condition is false. An example is shown below:

``` py
    # a variable weather set to the string raining
    weather = "raining"
    #if statement below
    if(weather=="raining"):
        print("Bring an umbrella")
    else:
        print("Don't bring an umbrella")
```

### Elif
If an if statement's condition is not met, than it could also run another condition to check if that worked, using an elif statement. An if statement is written the same way as an if statement, but with 'elif' instead of if.

:::caution
You can have as many elif statements as you want under an if statement, but you can only have one else statement, which needs to be after the if and the elif statements.
:::

An example of an elif statement is shown below:

``` py
    
    #gets a grade as input and casts it into an integer
    grade = int(input("What score did you get (from 0 to 100)?"))

    #outputs the letter grade
    if(grade>=90):
        print("You got an A!")
    elif(grade>=80):
        print("You got a B.")       
    elif(grade>=70):
        print("You got a C...")
    elif(grade>=60):
        print("You got a D!??")
    else:
        print("An F?")

```

:::tip
Try replacing the `elif`s with `if`s, and see what you get.
:::