 # How to contribute
 
Thanks for taking the time to contribute! Please follow the instructions below

------------------------------------------------------------------------------

**1.**  Fork [this](https://github.com/vj-abigo/invite-on-label.git) repository.

![step1](https://user-images.githubusercontent.com/72425181/122670266-be43ee80-d1de-11eb-9330-8d07ce2bd7ab.png)


**2.**  Clone your forked copy of the project.

```
git clone  https://github.com/<your_user_name>/invite-on-label.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd invite-on-label
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/vj-abigo/invite-on-label.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```
**6.**To setup the environment in your system run the following commands
```
npm install
```
**7.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**8.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**9.** Perform your desired changes to the code base.

<p align="center"><img width=35% src="https://media2.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47pzi2rpig0vc8pjusra8hiai1b91zgiywvbubu9vu&rid=giphy.gif"></p>

**10.** After when you made your necessary changes. Build the file using
```
npm run build
```
**11.** add your changes:heavy_check_mark: .

```
git add . 
```

**12.** Commit your changes .

```
git commit -m "Relevant message"
```

**13.** Push the committed changes in your feature branch to your remote repo.

```
git push origin <your_branch_name>
```
**14.** Go to your fork you will a popup saying "Compare & Pull Request"

![compare&pull](https://user-images.githubusercontent.com/43697446/134040805-c114ccf9-aa14-427e-b01f-8dcb2f58ef94.png)

**15.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are supposed to make a PR to.


**16.** Add an appropriate title and description to your pull request explaining your changes and efforts done and click on make a PR.

**17.** Wait for the reviewers to approve and merge it.

### And that's it, you're done! We're looking forward to having wonderful contributors with us
----------------------------------------------------------------------------------------

## Resources that might be helpful


Docs on creating a GitHub action: https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action

Docs on octokit: https://octokit.github.io/rest.js/v18

Docs for GitHub workflow: https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions

Docs for workflow events: https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#issues