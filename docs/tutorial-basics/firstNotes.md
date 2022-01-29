---
sidebar_position: 6
---

# Intro to Python Notes #1


## Data Types

### String
A bunch of characters put together combined into double quotes. A space is a character.

   #This example shows a string being stored in the variable ‘x’_
    x =  “Hello there, this is a string” _

   #This example shows another string being stored in the variable ‘x’_
    x =  “H” _

  #This example shows another string being stored in the variable ‘x’_
    x =  “Hello” _

string concatenation -  When you add two or more strings together to form one big string. You cannot add a string and a value from another data type together except for a character. For example, you cannot add the string “hi” and 2. “hi”+2 will give you an error.

  #This example shows a concatenated string being stored in the variable ‘x’_
    x =  “Computer” + “ “ + “Science”_

  #This example shows another  concatenated string being stored in the variable ‘x’_
    y  =  “Computer” _
    x =  y + “ Science”_

Warnings
A number string and another number string added together works like it does in string concatenation.  It will not add the numbers, but instead, it will put it together. For example:

   print(“433”+”22”)_

 Output: 

 43322_

### Integer

A whole number; a number without any decimal points. You can do mathematical operations (add, subtract, multiply, divide) with integers but decimals will be lost. 


   #This example shows an integer being stored in the variable ‘x’_
    x =  40 _


	   #This example shows adding two integers_
    x =  40 + 30 _

   #This example shows subtracting two integers_
    x =  50 - 30 _

   #This example shows dividing two integers_
    x =  300 / 20 _

   #This example shows multiplying two integers_
    x =  70 * 3 _

### Float/Double
A number which can take decimal points. Double can take in more decimal points than float.  You can do mathematical operations (add, subtract, multiply, divide) with floats and doubles and keep the decimals.
   #This example shows a basic float/double being stored in the variable ‘x’_ _
    x = 3.22 _

   #This example shows another float/double being stored in the variable ‘x’__
    x = 3023.0 _

### Boolean
A value that is true or false. In Python, a boolean can be set to the words True, False, or None.

### Character
A single character. This can either be a letter, a number, or even the space character ‘ ‘ or a new line ‘\n’ or a tab space ‘\t’.  The character needs to be put into single quotes.

   #This example shows the variable x being set to the character ‘s’ _
    x = ‘s’ _

   #This example shows the variable x being set to the character ‘5’ _
    x = ‘5’ _

Here is an example of making a newline character and using it:

    x = ‘\n’ _
   hello  = “hello” + x + “world”_
    print(hello)_

 Output: 
 hello   _
 world _


This is an example of a tab character being stored in x:

    x = ‘\t’ _
   hello  = “hello” + x + “world”_
    print(hello)_

 Output: 
 hello	world _

Warnings
A number character and another number character added together works like it does in string concatenation.  It will not add the numbers, but instead, it will put it together. For example:

   print(‘3’+’2’)_

 Output: 
 32 _

Some Python Resources:
[https://www.w3schools.com/python/](https://www.w3schools.com/python/)
[https://www.tutorialspoint.com/python/index.htm](https://www.tutorialspoint.com/python/index.htm)
[https://www.pythontutorial.net/](https://www.pythontutorial.net/)