# Invite-on-label workflow

![Screenshot of the invite the bot sends](https://user-images.githubusercontent.com/62864373/109786137-dc3b1280-7c32-11eb-9f10-e0e8ed936d2e.png)

This action allows you to auto-invite people to your org. after they open an issue, with a specific label.

### How to use
- Go to your repository
- Create a folder named `.github` and create a `workflows` folder inside it if it doesn't exist.
- Create a new file named `invitation.yml` with the following contents inside the `workflows` folder:
```yml
on:
  issues:
    types: [labeled]

jobs:
  automate_invite:
    runs-on: ubuntu-latest
    steps:
      - name: Invite on label
        uses: vj-abigo/invite-on-label@v1.2
        with:
          organization: GitHub-Org
          label: invite me to the organization
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          comment: 'Welcome to the Org.'
        env:
          INVITE_TOKEN: ${{ secrets.INVITE_TOKEN }}
``` 

- Replace the `organization` name to put in name of your org, replace the `label` with name of the label with which you want this action to be triggered.
- Replace `comment` with the message you want the github-actions bot to send after an invite is sent.
- **NOTE:** create a [personal access token](https://github.com/settings/tokens/new) called _`INVITE_TOKEN`_ _(or give it another name, but don't forget to change it in the workflow)_  with the scope of _`admin:org`_ and set the expiration date as _`No expiration`_ _(If you don't want to regenerate token again)_ 

![Give admin:org access to the token](https://user-images.githubusercontent.com/43115551/109795252-b450ac80-7c3c-11eb-8de7-5dc5d600f82e.png)

- Copy the generated token and navigate to your org's secrets(`Organization Settings > Secrets`) and create a `New Organization Secret` with the Name as `INVITE_TOKEN` and the value as the token that you copied in the previous step.
`https://github.com/organizations/*your-org-name*/settings/secrets/actions`
- You don't worry about the `GITHUB_TOKEN`, It will be given by GitHub

### Note:

**_organization_** - _(required)_ Name of the organization to which you would like to invite your contributors

**_label_** - _(required)_ Name of the label

**_comment_** - _(optional)_ A comment which will be posted by github-actions bot after invite is sent.

> Default comment: `Invitation sent for the GitHub Organisation. Welcome to the community`


### Examples
- [EddieHub invitation Workflow](https://github.com/EddieHubCommunity/support/blob/main/.github/workflows/invitation.yml)

### Contributing
Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for getting started with the contribution. Make sure that you follow [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) while contributing and engaging in the discussions. **When contributing, please first discuss the change you wish to make via an issue on this repository before making the actual change.**



#### ToDo-
- [ ] Better Docs
- [ ] Fix bugs, if any
#### Bugs-
If you feel any difficulty in usage or notice a bug, don't forget to [open a new issue](https://github.com/vj-abigo/invite-on-label/issues/new).

### Contributors

<a href="https://github.com/vj-abigo/invite-on-label/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vj-abigo/invite-on-label" />
</a>

Made with [contributors-img](https://contrib.rocks).
