module.exports = async({ github, context }) => {
    const artifacts_list = await github.request(`GET /repos/${context.repo.owner}/${context.repo.repo}/actions/artifacts`, {
        owner: context.repo.owner,
        repo: context.repo.repo,
    })

    const artifacts_to_delete = artifacts_list.data.artifacts.shift()

    console.log('artifacts_list', artifacts_list.data.artifacts);
    console.log('artifacts_to_delete', artifacts_to_delete);

    // await github.request(`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`, {
    //     owner: context.repo.owner,
    //     repo: context.repo.repo,
    //     artifact_id: 'ARTIFACT_ID'
    // })
}