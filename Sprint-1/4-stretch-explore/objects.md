## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I got "ƒ log() { [native code] }"

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
it returns 'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Console is an object, which stores functions for logging and debugging such as (log, warn, debug, error...)
The "." is used to access a property, which belongs to the object.
So think of the "." as an operator or a button, and you press that button to open the toolbox and choose your tool...such as: console.assert: is basically using the "assert tool"
console.assert is the same as console.log, but instead of printing what value you give, it only prints a message when something is false
console.assert(condition, message)
Condition: should be "true"
Message: what it shows if it's "false"
console.assert(7 _ 7 === 40, "7 _ 7 is 49, not 40")
console.log: means logging the function in the console object, which will eventually print the result
