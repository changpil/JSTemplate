{
    let promise = new Promise (
        function(resolve, reject) {
            setTimeout(resolve, 1000, "Somevalue");
        }
    );
    console.log(promise);

    promise.then(
        v => console.log(v),
        error => console.log(error)
    );
}


{
    let promise = new Promise (
        function(resolve, reject) {
            setTimeout(reject, 1000, "Somevalue");
        }
    );
    console.log(promise);

    promise.then(
        v => console.log("reject v: " + v),
        error => console.log("reject error: " + error)
    );
}

import $ from 'jquery'

let form = document.getElementById('user-form');
form.addEventListener("submit", event => {
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    console.log(user.value, avatarFile.value);

    let userError = document.getElementById("user-error");
    if (user.value.length < 4) {
        userError.textContent = 'Inalid entry';
        userError.style.color = 'red';
        user.style.borderColor = "red";
        user.focus();   
        event.preventDefault();
    }
    
    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };

    let promise = $.post("http:..", posting);
    promise.then(
        data => console.log('success', data),
        error => console.log('error', error)
    );

});