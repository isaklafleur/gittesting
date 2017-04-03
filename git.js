// Set up a new git project
git init

// transform a already created project
git init exampleproject

// Setting username and email in git
git config --global user.name "Isak La Fleur"
git config --global user.email "isak.engdahl@gmail.com"
 
// add a file to git
git add filename.txt

// add all new changes
git add .

// commit files to the git
git commit -m "describe the commit with a short comment here."

// display all branches
git branch

// display logs of a branch
git log

// display status of git
git status

// change to master
git checkout master

// create new new branch
git checkout -b newbranchname

//change to another branch
git checkout testingnewbranch

// show what branch you are in
git branch

// merge branch to master
git merge testingnewbranch

// display the history of commits using the alias
git lg1
git lg2

// configure the .gitconfig file
// go to user home "cd ~" folder and type
nano .gitconfig

// add the following code end of the file.
[alias]
lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
lg = !"git lg1"

// exit file with CTRL + X
// save changes with Y + ENTER