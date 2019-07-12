$(document).ready(function () {
    $('#signup-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 4,
            },
            password: {
                required: true,
                minlength: 5,
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },

        messages: {
            username: {
                required: 'please enter valid username',
                minlength: 'min length 4',
            },
            password: {
                required: 'password required',
                minlength: 'min length 5',
            },
            confirm_password: {
                required: 'password required',
                minlength: 'min length 5',
                equalTo: "#password"
            }
        }
    })
})
