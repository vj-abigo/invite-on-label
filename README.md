# Invite-on-label

## Usage:

```yml
on:
  issues:
    types: [labeled]

jobs:
  automate_invite:
    runs-on: ubuntu-latest
    name: Check for issue label
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Run the local file
        uses: ./
        with:
          organization: EddieJaoudeCommunity
          label: invite me to the organisation
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```

**_organization_** - _(required)_ name of the organization to which you would like to invite your contributors

**_label_** - _(required)_ Name of the label

**_comment_** - _(optional)_ A comment which will be posted on the issue

> Default comment: `Invitation sent for the GitHub Organisation. Welcome to the community`

**NOTE:** create a [repository secret](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) called _`ACCESS_TOKEN`_ _(or give it another name, but don't forget to change it in the workflow)_ and as a value provide a GitHub [personal access token](https://github.com/settings/tokens) with the scope of _`admin:org`_
