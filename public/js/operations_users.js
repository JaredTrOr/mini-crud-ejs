async function deleteUser(userId) {
    if(confirm('Are you sure you to delete this user ?')) {
        const response = await fetch(`admin/delete_user/${userId}`, {method: 'DELETE'});
        const jsonData = await response.json();

        const {success, msg} = jsonData;
        if(success) window.location.href = msg
        else console.log(msg);

    }
}