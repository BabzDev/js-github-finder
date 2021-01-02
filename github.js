class Github {
    constructor() {
        this.client_id = 'cb1c0ed6845b26d60794';
        this.client_secret = '10153915aaaebf975675707c1b41baa6d2652d21';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        const reposUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`

        const profileResponse = await fetch(profileUrl);   
        const repoResponse = await fetch(reposUrl);    

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}