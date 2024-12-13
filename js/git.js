// source control management
// pull request/merge request - same thing

//git - manages the change history of source code//testtest
//github - platform that makes collaboration with team members easier

//clone - Cloning the entire history of the remote repository to your local machine (copy of the repository)
//commit - Records the current state of a project in a repository (change(or save) repository). you create a stamp. or  a save point
//push - Uploads local repository changes to a remote repository (uploaded repository)
//pull - Downloads from a remote repository into the local repository. (downloaded repository)
//merge - Consolidate changes from two or more branches into one
//branching - Create new branch for develop features and fixed independently from the main codebase (new save file)
//resolve conflict  - i also want to change this line. occurs when the same part of the same file is modified differently in two branches. test change here

//git remote add origin https://github.com/dongwookaugust/studtywithdaniel.git  ====>add new repository
//git branch test1 ===> make new branch
//git checkout test1 ===> switch to the test1
//git checkout -b test1 ===> make new branch and move to test1
//git remote -v ===> check current remote repositories and urls
//git add . ===> stage all changes in the current directory and subdirectories
//git commit -m "message" ===> save with message
//git push origin test1 ===> push the test1 branch to the remote repository at https://github.com/dongwookaugust/studtywithdaniel.git

// git clone origin https://github.com/dongwookaugust/practice.git ===> clone remote repository to local
// git fetch origin ===> fetch updates from the remote repository without merging
// git branch test2 ===> make new brach
// git checkout test2 ===> switch to the test2 branch
// git pull origin test2 ===> fetch and merge updates from the remote repository's test2 branch
// git merge origin/test1 ====> merge fetched changes from remote test2 branch into local test2
