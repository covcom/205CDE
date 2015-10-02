# 02 Working with remote repos

There are two ways to use git remote repos. One is to use https protocol, and the other is to use SSH keys. You can choose the way you feel more familiar to.

## 02.1 Using https protocol

### Cloning the course repository

Many of the exercises you will be doing will require you to amend existing code. This code is available in a course repository in GitHub. To access this you will need to create a new Codio project containing a clone of this repository.

Create a new project in Codio. On the projects screen click in the Create Project button.

Open Tools > Terminal. Clone the course repository (https://github.com/covcom/205CDE.git). 
```

$ git clone https://github.com/covcom/205CDE.git

```

Finally give a name e.g. 205CDE to your project.

### Changing the remote repository

The course repository is read-only, you will have to put your code in your own remote repository.
Follow these steps:
Create a new repository in GitLab. You can name your repository the way you want. Copy the HTTPS to your clipboard.
Because you have cloned the course repository, there is one remote called origin, check it:

```
$ git remote -v
origin	https://github.com/covcom/205CDE.git (fetch)
origin	https://github.com/covcom/205CDE.git (push)
```

We change this by

```
$ git remote set-url origin https://github.com/omanimesi/omaproj.git
$ git remote -v

origin	https://github.com/omanimesi/omaproj.git (fetch)
origin	https://github.com/omanimesi/omaproj.git (push)
```

Then finally you want to push all your commits to your own repository located in new url.

```
git push origin master
```

### The course repository has been changed

Sometimes the course repository will change, and you have to get the modifications to your own repositories and local working copies.

```
$ git remote
origin
$ git remote add wete git@github.com:covcom/205CDE.git
$ git remote -v
origin	https://github.com/omanimesi/omaproj.git (fetch)
origin	https://github.com/omanimesi/omaproj.git (push)
wete	https://github.com/covcom/205CDE.git (fetch)
wete	https://github.com/covcom/205CDE.git (push)
```

We have now two remote repositories. The one called origin is your own, where you sent your updates. But because sometimes the course remote repository is edited, we have another remote repository called wete.

```
$ git pull wete master
```

This is the way you fetch and merge everything that has changed in the course repository with your own master.
After this you have to check for conflicts, commit your changes to your local repository and push the changes to your own remote repository. But these ones you already know.

When using https protocol, git will always ask your username and password for the remote. If you get bored, you can use e.g. git credential helper cache. More on using helpers, see git documentation. The stored credentials never touch the disk, and are forgotten after a configurable timeout. The cache is accessible over a Unix domain socket, restricted to the current user by filesystem permissions. In the following credentials are stored for 5 minutes.

```
git config credential.helper 'cache --timeout=300'
```


## 02.2 Using ssh keys

The course materials will be in GitHub repository, your own repository will be in GitLab, therefore you will need accounts on both sites.
1)	create account on GitHub
2)	create account on GitLab
Authentication will be through the use of SSH keys. You need to copy the public key from Codio and add this to both GitHub and GitLab.

### GitHub
Start by clicking on the Accounts setting icon in the bottom-left corner of the projects screen (gear icon).

Choose the SSH Key tab and triple-click the long string (public key) to select it all. Copy this to clipboard.

Log into GitHub and open the Preferences screen (gear icon). Locate the SSH Keys link and Add SSH Key button.

Set the key title to Codio and Paste the SSH key from the clipboard before clicking the Add key button.

### GitLab
Open the Profile setting page (person icon) and choose the SSH Keys tab.

Click the green button Add SSH Key and paste in the public key stored in the clipboard. Enter Codio as a title.

### Cloning the course repository

Many of the exercises you will be doing will require you to amend existing code. This code is available in a course repository in GitHub. To access this you will need to create a new Codio project containing a clone of this repository.

Create a new project in Codio. On the projects screen click in the Create Project button.

Open Tools > Terminal. Clone the course repository (git@github.com:covcom/205CDE.git). 

```
$ git clone git@github.com:covcom/205CDE.git
```

Finally give a name 205CDE to your project.

### Changing the remote repository
The course repository is read-only, you will have to put your code in your own remote repository.
Follow these steps:
Create a new repository in GitLab. You can name your repository the way you want. Copy the SSH link to your clipboard.
Because you have cloned the course repository, there is one remote called origin, check it:

```
$git remote -v
origin	git@github.com:covcom/205CDE.git (fetch)
origin	git@github.com:covcom/205CDE.git (push)
```

We change this by
```
$ git remote set-url origin git@gitlab.com:omanimesi/omaproj.git
$ git remote -v

origin	git@gitlab.com:omanimesi/omaproj.git (fetch)
origin	git@gitlab.com:omanimesi/omaproj.git (push)
```

Then finally you want to push all your commits to your own repository located in new url.

```
$ git push origin master
```

### The course repository has been changed

Sometimes the course repository will change, and you have to get the modifications to your own repositories and local working copies.

```
$ git remote
origin
$ git remote add wete git@github.com:covcom/205CDE.git
$ git remote -v
origin	git@gitlab.com:omanimesi/omaproj.git (fetch)
origin	git@gitlab.com:omanimesi/omaproj.git (push)
wete	git@github.com:covcom/205CDE.git (fetch)
wete	git@github.com:covcom/205CDE.git (push)
```

We have now two remote repositories. The one called origin is your own, where you sent your updates. But because sometimes the course remote repository is edited, we have another remote repository called wete.

```
$ git pull wete master
```

This is the way you fetch and merge everything that has changed in the course repository with your own master.
After this you have to check for conflicts, commit your changes to your local repository and push the changes to your own remote repository. But these ones you already know.
