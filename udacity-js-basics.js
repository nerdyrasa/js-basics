/*
Problem Set 1-3

Let's imagine that instead of building just for your own resume, you're building 
a webapp that takes in data from other users on the internet and turns it into a resume 
that they can use.

How might you make sure that the resume will still display correctly? Or even worse, 
imagine someone sets their name to equal 
<script src="http://hackyourwebsite.com/eviljavascript.js"></script>. Can you make 
sure your resume doesn't run their malicious script?

Your Challenge

For this quiz, your goal is to make sure that if a user puts HTML in their resume's 
JSON, it doesn't break the resume!

How? You need to make sure that the < and > from their HTML get turned into harmless 
strings.

When you're ready to replace all of the < and >.

*/

var evil = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

console.log(evil);

var newHTML = evil.replace(/</g, "&lt;");
newHTML = newHTML.replace(/>/g, "&gt;");

console.log(newHTML);

// Or you might just replace < and > with a space.

evil = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

console.log(evil);

newHTML = evil.replace(/(<|>)/g, " ");

console.log(newHTML);

/*

Regular Expressions; String Manipulation

There are a few ways to remove < and > from code. The simplest is simply 
replacing them with their character entity references (&lt; and &gt;).

To do so, we can use string.replace(old, new). 
Note, however, that if you pass in a string as old, 
string.replace(old, new) will only replace the first instance of the old string.

You must pass in a regular expression as old to replace every instance of old 
in the string.

In the example above, we passed /</g and />/g as old into string.replace(old, new), 
which are regular expressions that grab all instances of < and >.

A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe 
what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and 
text replace operations.

Syntax
/pattern/modifiers;
*/