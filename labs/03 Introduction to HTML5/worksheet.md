# Introduction to HTML5

2 hour lab

- Basic HTML 5 document structure
- elements tags, ids, classes, etc.

just testing access rights (Erja)

Each week you will be required to complete two worksheets in which you will learn some important skills. After completing the worksheets you will be required to apply these newly acquired skills by attempting a challenge. It is important that you attempt all these worksheets and challenges.

In this first worksheet you will be getting to grips with the GitLab version control platform as well as editing your first JavaScript program. The instructions in this worksheet assume you are using the latest version of the Chrome browser (perhaps on a Chromebook).

You will also be exposed to a number of important tools used in the development of JavaScript programs. These tools will not be explained in further worksheets although you will be expected to use all of them in both future worksheets and when writing programs for your assignment.

## 1 Accessing the Files

Many of the exercises you will be doing will require you to amend existing code. This code is available in a repository on GitHub. To access it you will need to create a new Codio project containing a clone of this repository.

### 1.1 Cloning University Repository 

Before creating the Codio project you need to copy the URL of the University repository to your clipboard. Make sure the SSH option is selected. The correct link is shown below.

`git@github.com:covcom/205CDE.git`


Next create a *new project* in Codio. On the Projects screen click on the blue **Create Project** button.

Choose the *Import* option and paste in the repository URL (above).

Finally give your project the name 305CDE, choose the appropriate visibility and create the project. Once you open the project in Codio you will see all the files you need to complete the lab exercises.

### 1.2 Changing the Remote Repository

Since the University repository is read-only you will need to upload it to your own remote repository if you want to commit any changes. Thankfully this is a straightforward task.

#### 1.2.1 Create a New Repository

Start by logging into GitLab and creating a new repository. In this example we called it 305cde but you can choose any name you wish. Once the repository has been created, copy the SSH link to your clipboard. 

#### 1.2.2 Change the Remote

Return to Codio and view the current remote repository by entering:
```
git remote -v
origin  git@github.com:covcom/305CDE.git (fetch)
origin  git@github.com:covcom/305CDE.git (push)
```

Notice that there is one remote called *origin* that points to the University repository. We will change this to point to our new repository. You should paste in your new repository url where indicated.

`git remote set-url origin [new url]`

Check that origin now points to your own repository. 
```
git remote -v
origin  [new url] (fetch)
origin  [new url] (push)
```

#### 1.2.3 Push Commits

The final step is to push all the commits to your repository. 

`git push origin master`

If you check your repository website you should see all the commits ever made on the repository. You should now be able to commit and push your changes. 

