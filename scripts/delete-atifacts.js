module.exports = async({ github, context }) => {
    const artifacts_list = await github.request(
        `GET /repos/${context.repo.owner}/${context.repo.repo}/actions/artifacts`, {
            owner: context.repo.owner,
            repo: context.repo.repo,
        }
    )

    const artifacts_list_with_develop = artifacts_list.filter(
        (artifact) => artifact.name === 'main'
    )
    artifacts_list_with_develop.shift()
    console.log('artifacts_list_with_develop', artifacts_list_with_develop)
    artifacts_list_with_develop.map(async(artifact) => {
        console.log('artifact', artifact)
            // await github.request(
            //     `DELETE /repos/${context.repo.owner}/${context.repo.repo}/actions/artifacts/${artifact.id}`, {
            //         owner: context.repo.owner,
            //         repo: context.repo.repo,
            //         artifact_id: artifact.id,
            //     }
            // )
    })
}