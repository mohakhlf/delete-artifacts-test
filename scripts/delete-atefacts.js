const artifacts_to_delete = await github.rest.actions.listArtifactsForRepo({
    github.repository_owner,
    github.repository,
})

console.log('artifacts_to_delete', artifacts_to_delete)