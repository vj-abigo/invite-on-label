const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  try {
    const { ACCESS_TOKEN } = process.env;
    if (!ACCESS_TOKEN) {
      return core.setFailed('ENV required and not supplied: ACCESS_TOKEN');
    }

    const octokit = github.getOctokit(ACCESS_TOKEN);

    const { payload } = github.context;
    const inviteeId = payload.issue.user.id;
    const currentLabel = payload.label.name;

    const org = core.getInput('organization', { required: true });
    const label = core.getInput('label', { required: true });
    const comment = core.getInput('comment')

    if (currentLabel === label) {
      try {
        await octokit.orgs.checkMembership({
          org,
          username: payload.issue.user.login,
        });
      } catch (error) {
        await octokit.orgs.createInvitation({
          org,
          invitee_id: inviteeId,
        });

        await octokit.issues.createComment({
          owner: payload.repository.owner.login,
          repo: payload.repository.name,
          issue_number: payload.issue.number,
          body: comment
        })

      }
    }
  } catch (error) {
    return core.setFailed(error.message);
  }
  return core.setOutput('Invitation sent successfully 🎉🎉');
};
main();
