const searchUser = document.getElementById('searchUser');
const github = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;

    if(userText !==''){
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found'){
                    //Show Alert
                    ui.showAlert('User not found', 'aler alert-danger');
                    ui.clearProfile();
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })       
    } else {
        ui.clearProfile();
    }
});