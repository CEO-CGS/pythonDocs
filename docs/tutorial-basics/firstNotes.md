---
sidebar_position: 3
---

# Data Types (Notes 1)

### String
A bunch of characters put together combined into double quotes. A space is a character.

``` py
    #This example shows a string being stored in the variable ‘x’ 
    x =  “Hello there, this is a string”  
```
``` py 
    #This example shows another string being stored in the variable ‘x’ 
    x =  “H”  
```
``` py
    #This example shows another string being stored in the variable ‘x’ 
    x =  “Hello”  
```

string concatenation -  When you add two or more strings together to form one big string. You cannot add a string and a value from another data type together except for a character. For example, you cannot add the string `“hi”` and `2`. `“hi”+2` will give you an error.
``` py
    #This example shows a concatenated string being stored in the variable ‘x’ 
    x =  “Computer” + “ “ + “Science” 
```
``` py
    #This example shows another concatenated string being stored in the variable ‘x’ 
    y = “Computer”  
    x =  y + “ Science” 
```
:::caution Warnings
A number string and another number string added together works like it does in string concatenation.  It will not add the numbers, but instead, it will put it together. For example:

``` py
    print(“433”+”22”) 
```
#### Output: 
``` py
    43322 
```
:::

### Integer

A whole number; a number without any decimal points. You can do mathematical operations (add, subtract, multiply, divide) with integers but decimals will be lost. 

``` py
    #This example shows an integer being stored in the variable ‘x’ 
    x = 40  
```
``` py
    #This example shows adding two integers 
    x = 40 + 30  
```
``` py
    #This example shows subtracting two integers 
    x = 50 - 30  
```
``` py
    #This example shows dividing two integers 
    x = 300 / 20  
```

``` py
    #This example shows multiplying two integers 
    x = 70 * 3  
```

### Float/Double
A number which can take decimal points. Double can take in more decimal points than float.  You can do mathematical operations (add, subtract, multiply, divide) with floats and doubles and keep the decimals.
   
``` py
    #This example shows a basic float/double being stored in the variable ‘x’   
    x = 3.22  
```
``` py
    #This example shows another float/double being stored in the variable ‘x’  
    x = 3023.0  
```
### Boolean
A value that is true or false. In Python, a boolean can be set to the words True, False, or None.

``` py
    #the variable x is true and y is false
    x = True
    y = False
```

### Character
A single character. This can either be a letter, a number, or even the space character ‘ ‘ or a new line ‘\n’ or a tab space ‘\t’.  The character needs to be put into single quotes.

``` py
    #This example shows the variable x being set to the character ‘s’  
    x = ‘s’  
```

``` py
    #This example shows the variable x being set to the character ‘5’  
    x = ‘5’  
```

Here is an example of making a newline character and using it:

``` py
    x = ‘\n’ 
    hello  = “hello” + x + “world” 
    print(hello) 
```
#### Output: 
``` py
    hello   
    world 
```

This is an example of a tab character being stored in x:
 ``` py
    x = ‘\t’ 
    hello  = “hello” + x + “world” 
    print(hello)
```
#### Output: 
  ``` py
    hello   world  
 ```

:::caution Warnings
A number character and another number character added together works like it does in string concatenation.  It will not add the numbers, but instead, it will put it together. For example:
 ``` py
    print(‘3’+’2’) 
```
#### Output: 
``` py
    32  
```
:::


### Some Python Resources:

[https://www.w3schools.com/python/](https://www.w3schools.com/python/)

[https://www.tutorialspoint.com/python/index.htm](https://www.tutorialspoint.com/python/index.htm)

[https://www.pythontutorial.net/](https://www.pythontutorial.net/)