# Giphy-project
A dynamic website using the Giphy API to display various gifs.

The idea of this project was, as you can read above, to use the giphy API to fetch gifs for the user and display them along with some information about them.

There's an input field that the user can type words into, and the API should return gifs that have been tagged with those words. The returned gifs can be restricted based on rating so as not to return NSFW images, and their animation can be started or stopped using mouse clicks.

My current repo still has some strange bugs that I have to address, for example right now you can only change animation states on /every other gif/. I think the error has something to do with scoping, but I really have to buckle-down and comb through the code to figure out what's going on.

API integration for giphy was pain-free, but most things are when you're walked through them step-by-step.