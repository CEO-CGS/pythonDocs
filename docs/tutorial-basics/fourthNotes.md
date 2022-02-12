---
sidebar_position: 6
---

# Functions (Notes 4)

### Function
A function is a way for a programmer to run multiple commands using one line.  The way you run a function is that you **call** the function by the name of the function.

A function consists of three parts in Python:

**Function header** - The function's name that will have to be called in order to run the function. <br/>
**Function parameters** - The function's parametets are values that are passed into the function for it to use. <br/>
**Function body** - The actual lines of code the function will run.  The function body can use any parameters that are passed when calling the function.

Here is an example of a function:

```py

    #first define the function
    def sayHello():
        print("hello")

    #run the function
    sayHello()

```

Another example of a function that takes in parameters is:


```py

    #first define the function
    def sayHello(i):
        print("hi " + str(i))

    #run the function
    sayHello(5)

```

Here is another function that requires multiple parameters:


```py

    #first define the function
    def sayHello(message,i):
        print(message + " " + str(i))

    #run the function
    sayHello("hello",10)

```
