const inputs = document.querySelectorAll('input');

const patterns = {
    text : /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})\.?([a-z]{2,8})?$/i,
    password: /^[\w@_]{8,20}$/i
}

const validate = (input, regex) => {
    if(regex.test(input.value)){
        input.className = 'valid';
    }
    else{
        input.className = 'invalid';
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})
