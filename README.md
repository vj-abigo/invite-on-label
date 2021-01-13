# Invite-on-issue

### Example:

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
