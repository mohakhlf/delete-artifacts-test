module.exports = async({ github, context }) => {
    const artifacts_list = await github.rest.actions.listArtifactsForRepo({
        owner: context.repo.owner,
        repo: context.repo.repo,
    });

    console.log('artifacts_list', artifacts_list);
}