const artifacts_to_delete = await github.rest.actions.listArtifactsForRepo({
    context.repo.owner,
    context.repo.repo,
})

console.log('artifacts_to_delete', artifacts_to_delete)