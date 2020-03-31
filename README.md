# Todata

Using the back end we've built, let's implement the following features on the FRONT END:

* Show priorities in addition to text.
* Show only not complete items.
* Show only high priority items.
* Move completed items to the bottom.
* Move high priority items to the top.

For those last two, we'll ALSO have to finish the sorting portion of our back end. Run `npm test` when you're ready to do a little back-end work!


### An Important Guideline:

You should be using INLINE functions for your event listeners. No more having to make (and name!) helper functions.

So instead of this:

```javascript
const listener = function(event) {
// ...
}

document.querySelector('.some-class').addEventListener('click', listener);
```

We can do this:

```javascript
document.querySelector('.some-class').addEventListener('click', function(event) {
// ...
})
```

Let us know if you have any questions about that syntax!


### We've added a few things to help you along, like:

* an `id` field to each todo object
* and a `currentTodos` array you can reassign to (declared with `let` in `todos.js`) without changing your underlying data.
* We've also separated our functions into separate files. Feel free to do the same with any new functions you make, but at the least, try navigating these files and see if you find it easier or harder than scrolling through one large one.
* And that includes some files we'd suggest for your buttons' event listeners. Feel free to make those files or different files... but remember to link them in your `index.html` if you use different files!

### Tips And Hints:

* You can use the `id` field of each object, which, in `printTodo`, also gets put on the DOM as the `li`'s `id`. Now you can find the right todo to edit no matter what order your todos are in. You may not end up using it, but remember that it's there!
