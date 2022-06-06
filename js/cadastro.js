const senha = document.querySelector('.password')
const c_senha = document.querySelector('.confirmpassword')
const btn_enter = document.querySelector('.enterbutton')
const btn_password = document.querySelector('.btnpass')
const error = document.querySelector('.error')
const user = document.querySelector('.user')

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
        error.innerHTML = ('SENHAS NÃO CONFEREM !')
        senha.style.border = '2px solid red'
        c_senha.style.border = '2px solid red'
    }
    else
    {
        error.innerHTML = ('')
        senha.style.border ='1px solid black'
        c_senha.style.border ='1px solid black'
    }
    if (user.value == (''))
    {
        error.innerHTML = ('Usuario não preenchido !!')
        user.style.border = ('2px solid red')
    }
    else
    {
        error.innerHTML = ('')
        user.style.border = ('1px solid black')
    }
}
