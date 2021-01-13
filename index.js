const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const { ACCESS_TOKEN } = process.env
        if (!ACCESS_TOKEN)
            return core.setFailed('ENV required and not supplied: ACCESS_TOKEN')

        const octokit = new github.GitHub(ACCESS_TOKEN)

        const payload = github.context.payload
        const invitee_id = payload.issue.user.id
        const currentLabel = payload.label.name

        const org = core.getInput('organization', { required: true })
        const label = core.getInput('label', { required: true })

        if (currentLabel === label) {            
            try{
                await octokit.orgs.checkMembership({
                    org: org,
                    username: payload.issue.user.login
                  })

            } catch (error) {
                await octokit.orgs.createInvitation({
                    org,
                    invitee_id
                })
            }

            console.log("Successfully sent invitation")
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}
main()
