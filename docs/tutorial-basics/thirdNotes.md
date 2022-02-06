---
sidebar_position: 5
---

# Whiles and Fors (Notes 3)

### While Loop
A while loop is a way to run some amount of code **while** some condition exists. 

Everything within the while loop should be tabbed over by 1 tab, unless it is within an if statement, another loop, or within some other statements.

It uses conditions with the same operators as the [If Statement](./secondNotes.md) notes.

``` py
    #This example shows a while loop in use
    while(lunchBreak==True):
        print("eating lunch")
```
:::caution Be Careful with the Condition
If a while loop condition is always true, it will end up causing an **infinite loop** which breaks your program, so make sure you are careful with what while loop condition you choose.
:::

### For Loop
A for loop is similar to a while loop, but you get to define how many **iterations** (the amount of times the loop runs) the for loop has. 

It is typically good to use in **arrays/lists** or certain pieces of code where you would want to do certain things for specific amounts of time. Everything inside of a for loop should be tabbed like a while loop. 

There are different ways of writting a for loop. One of the ways is shown below:

``` py
    #This example shows a for loop
    for i in range(0,5):
        print("Hello")
```
:::tip 
The above code will run 5 times.  The 'i' is just an integer saying which **iteration**
(which loop count the for loop is on).  The loop starts at 0 and ends at 4, and that is what range(start,end) does. In our case, the 
start is 0, and the end is 5.
:::

:::caution Be Careful with the Range
In a range, the last number is always cut-off, so the loop does not go for 6 times, but only for 5 times, and the 0 counts as the first iteration.
:::

Another example below shows how we can utilize the 'i', which can be any variable name, inside of a for loop.

``` py
    #This is another for loop
    for i in range(0,6):
        print("Hi " + str(i))
```

The last thing the output would print is "Hi 5", and in this way, the 'i' can also be used within the for loop.  

There are other ways a for loop can be done, such as using a **list**, but it will not be discussed in this notes page.