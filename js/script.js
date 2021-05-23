

const FormValidation = (function() {
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const submit = document.querySelector('.btn');
    const form = document.querySelector('form');
    
    
    submit.addEventListener('click', (ev) => {
        ev.preventDefault();
        if(username.value && email.value && password.value) {
            const nameValidity = validateUsername(username.value)
            const emailValidity = validateEmail(email.value)
            const passwordValidity = validatePassword(password.value)
            if(nameValidity&&emailValidity&&passwordValidity) {
                alertUser('You have successfully logged in!','success')
                removeAlerts();
                form.reset();
            }
        } 
    })

    const validateUsername = (data) => {
        const usernameRGEX = /^[A-Za-z]+$/;
        const usernameResult = usernameRGEX.test(data);
        if(!usernameResult) {
            alertUser('Invalid input/s','error')
            username.style.outline = '2px solid red'
            return false;
        }
        return true;
    }
    
    const validateEmail = (data) => {
        const emailRGEX = /^[a-z0-9](\.?[a-z0-9]){4,}@g(oogle)?mail\.com$/;
        const emailResult = emailRGEX.test(data);
        if(!emailResult) {
            alertUser('Invalid input/s','error')
            email.style.outline = '2px solid red'
            return false;
        }
        return true;
    }
    
    const validatePassword = (data) => {
        const passwordRGEX = /[A-Z]{5}[\W]{6}[\-]{2}/;
        const passwordResult = passwordRGEX.test(data);
        if(!passwordResult) {
            alertUser('Invalid input/s','error')
            password.style.outline = '2px solid red'
            return false;
        }
        return true;
    }
    
    
    const alertUser = (message,cssClass) => {
         const alert = document.querySelector('.alert');
         alert.className = 'alert';
         alert.classList.add(cssClass);
         alert.textContent = message;
    }

    const removeAlerts = () => {
        username.style.outline = 'none';
        email.style.outline = 'none'
        password.style.outline = 'none'
        alert.textConetent = '';
        
    }
})()

