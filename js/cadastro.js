const senha = document.querySelector('.password')
const c_senha = document.querySelector('.confirmpassword')
const btn_enter = document.querySelector('.enterbutton')
const btn_password = document.querySelector('.btnpass')
const error = document.querySelector('.error')
const user = document.querySelector('.user')
const email = document.querySelector('.email') 
const email_error = 0

btn_password.onclick = () =>
{
    if (senha.type == 'password')
    {
        senha.type = 'text'
        c_senha.type = 'text'
        btn_password.src = '/imgs/ocultar.png'
    }
    else
    {
        senha.type = 'password'
        c_senha.type = 'password'
        btn_password.src = '/imgs/mostrar.png'
    }
}



btn_enter.onclick = () =>
{
    if (senha.value != c_senha.value)
    {
        giveError(senha,'Senhas não coincidem');
    }
    if (senha.value == c_senha.value)
    {
        senha.style.border ='1px solid black'
        c_senha.style.border ='1px solid black'
    }
    if (user.value == (''))
    {
        giveError(user,'Usuario não pode estar em branco')
    }
    if (user.value != '' && senha.value == c_senha.value)
    {
        user.style.border = ('1px solid black')
        error.innerHTML = ('')
    }
    if (email.value == ('')){
        giveError(email,'Email não pode estar em branco')
    }
    else if (!confirmEmail(email.value)){
        giveError(email,'Email não é valido')
    }
    else{
        email.style.border = ('1px solid black')
    }
}

function giveError(input, message){
    error.innerHTML = (message);
    input.style.border = '2px solid red'
    if (input == senha){
        senha.style.border = '2px solid red'
        c_senha.style.border = '2px solid red'
    }
}

function confirmEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
