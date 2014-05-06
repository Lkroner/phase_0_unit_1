## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Add will add changed files to the "staging" area, which tells git that these files are ready to be committed.

#### branch
A branch is copy of the master branch of code. You can also use this command to check which branch you are on if you just type git branch. There are a lot of differnt commant you can use branch with, but they all generally revolve around manipulating the branch.

#### checkout
Checkout command can do several things:
Checkout <target file> will change files back to how they were at the last commit.
Checkout <branch> will switch you to the named branch.

#### clone
Makes a Git repository copy from a remote source. Also adds the original location as a remote so you can fetch from it again and push to it if you have permissions. 

#### commit
Takes all of the changes written in the index, creates a new commit object pointing to it and sets the branch to point to that new commit.

#### fetch
Is the command that says "bring my local copy of the remote repository up to date."

#### log
Shows a listing of commits on a branch including the corresponding details.

#### merge
Merges one or more branches into your current branch and automatically creates a new commit if there are no conflicts.

#### pull
Fetches the files from the remote repository and merges it with your local one. This command is equal to the git fetch and the git merge sequence.

#### push
Push will push all the commits you've executed locally and file them in your remote repository. 

#### reset
Use reset to unstage files that are ready to be committed.

#### rm
The rm command will remove the actual files from disk and will also stage the removal of the files.

#### status
Status will show you what files are have changes pending , but are unstaged or are in staging area ready to be committed.


## Release 4: Git Workflow

- Push files to a remote repository

1. cd into the directory you want to commit changes from
2. git status
3. git add any files that haven't been staged for commit.
4. git commit -m"Don't forget to leave a message about the changes you made here"
5. git push origin master

- Fetch changes
1. git fetch
2. git merge

- Commit locally
1. git status
2. git add --all to add any files that are not staged that I would like to commit
3. git status to check that all the files I would like to commit have been added
4. git commit -m"Message Here" changes committed!

## Release 5: Reflection

* What parts of your strategy worked? What problems did you face?
I am still struggling a bit with the difference between commands fetch and pull. 

* What questions did you have while coding? What resources did you find to help you answer them?
I looked for resoures explaining the difference betweeen fetch and pull which clarified the topic a bit more for me, although I'm still a bit confused. I also had too look up a few others I hadn't had a chance to use yet like log, reset, and rm. I liked this websites definitions: http://www.siteground.com/tutorials/git/commands.htm. They were the most clear and also link to the full list of git commands.

* What concepts are you having trouble with, or did you just figure something out? If so, what?
I am still struggling a bit with the difference between commands fetch and pull. 
I also would really like to rename my repository and have looked up a few resources on how to do it but don't feel confident to do it myself. I am very worried I'll delete my repo in the process!

* Did you learn any new skills or tricks?
I learned a few new commands and that when you rm files you still need to commit those changes.

* How confident are you with each of the Learning Competencies?
I feel confident in being able to use git commands in terminal and push/pull chnages between my local and remote repos. I understand fetch and have used it but still don't feel like I confidently "get it". Hopefully that will come soon.

* Which parts of the challenge did you enjoy?
I enjoyed most of it. Git in interesting to use.  

* Which parts of the challenge did you find tedious?
Didn't find anything terribly tedious.


