module.exports = async({ github, context }) => {
    const artifacts_list = await github.request(`GET /repos/${context.repo.owner}/${context.repo.repo}/actions/artifacts`, {
        owner: context.repo.owner,
        repo: context.repo.repo,
    })


    console.log('artifacts_list', artifacts_list);
}