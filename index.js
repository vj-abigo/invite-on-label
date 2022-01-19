const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {

  const repoToken = core.getInput('repo-token', { required: true });
  const client = github.getOctokit(repoToken);
  const { payload } = github.context;
  const existingMemberMessage = core.getInput('existingMemberMessage')

  try {
    const { INVITE_TOKEN } = process.env;

    if (!INVITE_TOKEN) {
      return core.setFailed('ENV required and not supplied: INVITE_TOKEN');
    }
    const octokit = github.getOctokit(INVITE_TOKEN);

    const inviteeId = payload.issue.user.id;
    const currentLabel = payload.label.name;

    const org = core.getInput('organization', { required: true });
    const label = core.getInput('label', { required: true });
    const comment = core.getInput('comment');

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
        core.info('Invitation sent successfully 🎉🎉');

        await client.issues.createComment({
          owner: payload.repository.owner.login,
          repo: payload.repository.name,
          issue_number: payload.issue.number,
          body: comment,
        });

        await client.issues.update({
          owner: payload.repository.owner.login,
          repo: payload.repository.name,
          issue_number: payload.issue.number,
          state: 'closed',
        });
      }
    }
  } catch (error) {

    if (error.message.toString().includes('already a part')) {

      await client.issues.createComment({
        owner: payload.repository.owner.login,
        repo: payload.repository.name,
        issue_number: payload.issue.number,
        body: existingMemberMessage,
      });

      await client.issues.update({
        owner: payload.repository.owner.login,
        repo: payload.repository.name,
        issue_number: payload.issue.number,
        state: 'closed',
      });

    }

    return core.setFailed(error.message);
  }
  return core.setOutput('Invitation sent successfully 🎉🎉');
};
main();
