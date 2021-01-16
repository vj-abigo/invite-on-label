
<p>
  <h1 align="center">Invite-on-label</h1>
</p>
<p align="center">
  <img align="center" src="https://user-images.githubusercontent.com/43115551/104796715-cededb80-57de-11eb-9a2a-32d8b6732c98.jpg" alt="Demo invitation"/>
</p>

## Usage:

```yml
on:
  issues:
    types: [labeled]

jobs:
  automate_invite:
    runs-on: ubuntu-latest
    steps:
      - name: Invite on label
        uses: vj-abigo/invite-on-label@v1.1
        with:
          organization: EddieJaoudeCommunity
          label: invite me to the organisation
          repo-token: ${{ secrets.GITHUB_TOKEN }}
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```

**_organization_** - _(required)_ name of the organization to which you would like to invite your contributors

**_label_** - _(required)_ Name of the label

**_comment_** - _(optional)_ A comment which will be posted on the issue

> Default comment: `Invitation sent for the GitHub Organisation. Welcome to the community`

**NOTE:** create a [repository secret](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) called _`ACCESS_TOKEN`_ _(or give it another name, but don't forget to change it in the workflow)_ and as a value provide a GitHub [personal access token](https://github.com/settings/tokens) with the scope of _`admin:org`_
