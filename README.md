# Javascript strings comparison demo

>Double equals is the appropriate way to compare strings in Javascript, it is returning false then there may be whitespace to the left and or right of one string.

>Put a .trim() on the end of the strings and my comparison should started working - Jacob

This simple example demostrates the above statement.

Even though 2 strings may look like they have no difference, whitespaces, newline, and various symbol that cannot be noticed may still be there. Sometime its OK to ignore them, but sometimes they may cause big problems if we are not carefully enough.

# Demostration

In this demostration:

1. We fetch a set of strings from test.json, assigning them as keys of a hashmap.
2. The user loads test.csv in the input HTML element.
3. We test if the strings from test.csv are equal to the strings from tset.json by searching them in the hashmap keys.

# Usage

1. Download or Fork this repository.
2. Run index.html in browser. [1]
3. Load test.csv in browser.


[1]
Some browser does not allow you to load local json file due to security reason.
Currently, you can do this with firefox. But have to do a little configuratoin in Chrome.


# Reference

[StackOverflow: Javascript String Compare == sometimes fails](https://stackoverflow.com/questions/863524/javascript-string-compare-sometimes-fails)
