const artifacts_to_delete = await github.rest.actions.listArtifactsForRepo({
    owner: owner,
    repo: repo,
})

console.log('artifacts_to_delete', artifacts_to_delete)