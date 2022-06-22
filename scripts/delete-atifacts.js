module.exports = async({ github, context }) => {
    console.log('context', context)
        // console.log('inputs', context)
        // const artifacts_responds = await github.rest.actions.listArtifactsForRepo({
        //     owner: context.repo.owner,
        //     repo: context.repo.repo,
        // });

    // const artifacts_list_with_develop = artifacts_responds.data.artifacts.filter(
    //     (artifact) => artifact.name === 'main'
    // )
    // artifacts_list_with_develop.shift()
    // artifacts_list_with_develop.forEach(async(artifact) => {
    //     await github.rest.actions.deleteArtifact({
    //         owner: context.repo.owner,
    //         repo: context.repo.repo,
    //         artifact_id: artifact.id,
    //     });
    // })
}