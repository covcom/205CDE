# Git Remotes

This lab extends the work you did in the previous one called *Git Basics*. Make sure you have completed the worksheet and fully understand the concepts covered. You will also need access to the repository you created as part of the exercise.

In this lab you will learn how to create a remote repository using *GitLab*. You may apply these principles to working with any other remote repository such as GitHub or Bitbucket.

## 1.1 Updating the GitLab Profile
We will be using *GitLab* as our remote repository and will use it to store and share our code. Start by creating an account (if you don’t have these already) and logging in. You will also need to have a *Codio* account. Make sure you have an account and are logged in to both sites before starting this worksheet.

Before we start using GitLab it is important to update your personal profile to add your name and photo. This is required for when you start sharing your code with others.

In the top-right of the home screen there is a **Profile settings** button.

As a bare minimum you should supply your full name as it appears on your Student Card and upload a recognisable photo. This is so that we can clearly identify you when marking your work. Your email address should be your *personal* one rather than the one provided by the University as you will want to continue using GitLab after graduating.

Click 'Save changes' then click on the GitLab icon in the top-left corner to return to the home screen.

## 2 Configuring a Remote Repository

### 2.1 Copying the SSH Key from Codio

Authentication will be through the use of SSH keys. We need to copy the public key from Codio and add this to GitLab. You may have already done this, if so, skip to the next stage.

Start by clicking on the *Account settings* icon (gear) in the bottom-left corner of the Codio projects screen.

Choose the *SSH Key* tab and triple-click the long string (public key) to select it all. Copy this to the clipboard.

### 2.2 Adding the SSH Key to GitLab

Now open the *Profile settings* page in GitLab (person icon in the top-right corner) and choose the *SSH Keys* tab from the left-menu.

Click on the green button Add SSH Key and paste in the public key stored in the clipboard. Enter Codio as a title.

This has added the public key from Codio to your GitLab account.

## 3 Creating an Online repository

Now you have logged into GitLab you need to create a new remote repository. Open the *home screen* and click on the *New Project* button.

Enter 'tutorial' in the project path and set the visibility level to 'Private'. Click on the Create Project button when done.

## 4 Configuring the Remote

The next step is to configure your local repository (created in the previous lab) to communicate with the remote repository you have just created on GitLab.

### 4.1 Getting the Remote URL

Once the project has been created you will be taken to the project screen on GitLab. Here you will find your repository URL. This starts with 'git@' and contains your GitLab username and project name 'tutorial.git'. If your URL looks different check that the SSH option is selected (not HTTPS). Copy this URL to your clipboard.

### 4.2 Adding the Remote

Now you need to log into Codio and open your Git Tutorial project from the previous lab. You will need to open a terminal window. If you are unsure of any of these steps refer to the previous worksheet.

The `git remote` command is used to configure the remote repository settings. There are currently no remotes configured so if we try to list these we should get an empty list (the v flag means use verbose mode (list all the details):

`git remote -v`

We now need to add our remote repository to our local one. Origin is the alias we will be using to refer to our remote. Make sure you use your own remote (currently in the clipboard).

`git remote add origin git@gitlab.com:username/tutorial.git`

We can now list our remote using the previously described git remote command.
```
git remote -v
origin  git@gitlab.com:marktyers/tutorial.git (fetch)
origin  git@gitlab.com:marktyers/tutorial.git (push)
```

## 5 Push and Pull

Now we have configured our remote we need to push our commits onto the GitLab server. There are two key tasks.

1. git pull downloads any commits that are on the server but not in your local repository
2. git push takes any local commits that are not on the remote and pushes them to the remote repository.

At the moment of course there are commits in the local repository which need pushing to the GitLab remote repository. Before we do this, lets take a look at the current branches in our local repository:
```
git branch
  badcode
* master
  newbranch
```
### 5.1 Pushing to the Remote

You can see that there are *three branches* and that we are on the *master* branch. Once you understand that you should be able to make sense of the command we use to push our changes to the remote.

`git push origin master`

This will push all the commits on your master branch to the remote with an alias of origin (we just added this).

### 5.2 Viewing the Commit Graph

Lets see what has been pushed. Return to the *GitLab project* page and refresh it in the browser.

You should see a number of links down the left-hand side of the screen. The **Network** link will show you the current network graph (if your screen is narrow you will only see the icon, not the link text).

But there is something not right! Where is the badcode branch? Remember we only pushed the master branch. 

Unless specified, a branch remains local. In our example it would probably not make sense to push a branch containing only mistakes but lets do it anyway.

`git push origin badcode`

to push all branches at once use the all flag.

`git push origin --all`

### 5.3 Pushing Tags

If you view the network graph you may have noticed that the tags were not pushed from the local repository. By default tags are considered a local resource. Sometime we wish to push one or more tags to the remote. To push a single tag we use the following command. Try this out.

`git push origin v1.0`

You can see that this tag has now been pushed to the remote.

If we wish to push all the local tags we can do this by passing the tags long flag as follows.

`git push --tags`

Try this and make sure both tags are now pushed.

### 5.4 Pulling Changes

Sometimes there are commits on the remote that you don't have in your local repository. This can be caused two ways:

1. you have been editing (and committing) code using two different editors/computers
2. you are not the only person working on the code (see below for how to share your repository)

Before making any changes to your code you should get into the habit of pulling any remote commits into your local repository. This uses the git pull command which has a similar syntax to the git push command.

`git pull origin master`

## 6 Sharing with Other Users

You already know a lot about using Git both locally and syncing with remotes however we have still to cover one of the most powerful features, collaborative programming. By sharing your repository with other developers you allow them to clone a copy of your remote, make changes and commit locally then push these commits back to your remote!

### 6.1 Adding Team Members
From the project page, click on the *Settings* link to access the repository settings screen.

In the left-hand menu you will find a *Members* link. Click on this to view the appropriate screen.

Click on the 'Add Users' button (green) to reveal the dialog that allows you to search the entire GitLab users database. 

You should enter the name or username of another person in the lab. You will know you have the correct user when their photo appears next to their full name.

You also need to choose the correct access settings. Generally you have two choices:

1. Reporter access allows read-access to the code (pull)
2. Developer access allows read-write access (pull and push)

Choose *Developer* access to allow your classmate to push changes to your remote repository.

## 6 Submitting Work for Marking

You will be expected to submit a link to your remote repository home page when you complete an assignment. It is important that the academics who will be marking your work have access to your code and so it becomes your responsibility to locate their GitLab usernames and provide them with Reporter access to your repository.

Typically the list of staff usernames will be found on your *assignment brief*. If you cannot locate this please speak to your lab supervisor as soon as possible.

## 7 Online Tools

Git provides a number of useful tools to help manage your programming project. Here we identify a few of the most useful.

### 7.1 Issues

The issues tool provides a sophisticated way to identify jobs, prioritise them and assign them to different members your development team. You can also generate labels (under the labels tab) and assign them to the tasks, add milestones and, finally you can mark jobs as complete. Think about this as a powerful todo list. You will be expected to demonstrate you can use this.

### 7.2 Wiki

It is important that you keep detailed notes and documentation. The wiki tool allows you to write nicely formatted notes. You can also link pages together. As you write your code you need to maintain suitable documentation.

### 7.3 Merge Requests

If you are working as part of a team you will each be working on code in your own branch(es). Before merging a branch back into the master you should issue a merge request. You detail the branch you want to merge, where you want to merge it and the features you have added. Others can view the changes you intend making to the master branch and suggest changes. When working in a team you will be expected to use this tool before merging any branches.
