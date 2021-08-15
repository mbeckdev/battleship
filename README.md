# battleship

Play it here -- https://mbeckdev.github.io/battleship/

Guide to creating your own here: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship

## Notes
Holy moley! So much logic goes into this game in checking whether or not you can drag and drop to a valid square.

Did you know that JavaScript doesn't allow 2d arrays natively? To get around that I made 100 divs and added data-id's to them to approximate a coordinate system. Then I could call any one I liked. I thought that was neat because I've made grids of divs before named 1 to 100 so you'd have to do math to remember that up and down you need to add a row's worth of numbers. I like this method better.

The main point of making this project was to practice using Jest to test code.  I started making this by creating modules, and the functions each one will have and test them individually with Jest.  When all that was done, I went ahead and made all the visual things in the dom. What an odd way of creating a project. Odd to me right now because I've been doing the spaghetti method (just keep making things until it works) but this method is soooo more organized in the code and it's sooo much easier to find what you want. I really like it.  The hard part about testing is knowing when to make a test. Mostly it's like tests are black boxes. You put in an input and expect an output. The code inside the black box doesn't matter and you shouldn't test that part (it'll just make your life complicated down the road). At least that's what some articles I read said. 

## Coding Things Used
- Jest
- HTML
- CSS
- JavaScript
- webpack

## Possible Future Improvements For Someday
- Improve computer's guesses - not just random guesses on an unguessed spot, but if it gets a hit, check squares around it until you guess an entire ship.
- Sound effects
- Background music with a music toggle button
- Maybe multiplayer using some node.js  -- I don't know how to do this yet, but I know it's possible.
- Making ships look like ships instead of rectangles
