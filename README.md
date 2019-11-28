1. Install `Node JS` from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Extract the contents of this zip to somewhere easily accessible
3. Open a terminal

    On Windows: hit `WIN + R` then type `cmd` and hit `enter`
    
    On Mac: I'm not actually sure since I don't use a Mac, and I Googled it and found nothing useful, so hopefully either you know how or you have more luck with Googling it

4. Within the terminal, navigate to the folder you extracted the zip to during step 2

    If you aren't familiar with how to do this, look it up somewhere. If you still don't have luck, Ryan or I can possibly walk you through it

5. Type `npm install` and hit `enter`
6. Once this is complete, type `npm run develop`

This next part should take a little while to run, and when it is complete it will tell you to navigate to `http://localhost:8000` in your web browser to see the site in action, but the way it is set up this won't work. You'll need to navigate specifically to a page you are working on, for example, if you are working on Victoria, navigate to the address [http://localhost:8000/find-a-realtor-victoria](http://localhost:8000/find-a-realtor-victoria) or [http://localhost:8000/top-real-estate-agents-victoria](http://localhost:8000/top-real-estate-agents-victoria), or replace `victoria` with the word you place under the `slug` attribute for the city in contentful.

One of the quirky things you'll encounter is that after you make and publish changes in contentful, they won't be reflected in your browser until you do a couple of things

1. In the terminal window where the application is running, hit `CTRL + C` and it should ask if you want to terminate the process, at which time hit the `y` key

2. Once you are given the command prompt again (ie. the app has stopped running) type `npm run develop` and hit `enter` again to rerun the app

3. If after successfully doing the above, the changes you made aren't being reflected, this could be because of an issue with the cache, to fix this, in the folder you extracted the project to, there should now be a `.cache` folder. Stop the application as described 2 steps above before doing so, and then rerun it (one step above) again after the folder has been deleted

    There is a chance that the folder is hidden, in which case you may have to `show hidden files` which will depend on the operating system you're using