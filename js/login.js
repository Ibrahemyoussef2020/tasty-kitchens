import {
    selectElement
} from './utilities.js'

// selectors

const formLogin = selectElement('#inputs'),
    name = selectElement('#name'),
    password = selectElement('#password'),
    textError = selectElement('#text-error'),
    submitLink = selectElement('#submit-link');


/* validate password'characters length */

const doesContainCharacterEnough = (values)=>{
    const specialCharacterList = '!@#$%%^&*()_+}{}{/*[]-=~?><.,';

    let errors = '' ;

    const containsUpperCase = values.split('').filter(v =>/[A-Z]/.test(v)=== true)
    const containsLowerCase = values.split('').filter(v => /[a-z]/.test(v))
    const containsNumbers = values.split('').filter(v => /[0-9]/.test(v))
    const containsSpecialCharacter   = values.split('').filter(v => specialCharacterList.split('').find(s => s === v))

    if (password.value === '') {
        
        errors = 'password is required' 
        
        return {
            status:false,
            errors
        }
    }

    if (password.value.length < 8) {
        
        errors = 'password\'character must be 8 at lest'
        
        return {
            status:false,
            errors
        }
    }
    
    
    if(containsUpperCase.length < 2) {
        errors = 'password must contains 2 upper cases at lest'
        
        return{
            status:false,
            errors
        }
    }
   
    if(containsLowerCase.length < 2){
        errors = 'password must contains 2 lower cases at lest'
        
        return{
            status:false,
            errors
        }
    }

    if(containsNumbers.length < 2){
        errors = 'password must contains 2 numbers at lest'
        
        return{
            status:false,
            errors
        }
    }
    
    if(containsSpecialCharacter.length < 2){
        errors = 'password must contains 2 special characters like: @ , # at lest'
        
        return{
            status:false,
            errors
        }
    }

    
    return {
        status:true,
        errors,
    }
}

/* validate password strategy */

function checkingOnPassword(){
    const {value} = password;
    const {status,errors} = doesContainCharacterEnough(value);
    
    textError.textContent = errors;

    if (!status) {
        return false
    }

    name.value = '';
    password.value = '';

    window.location='https://ibrahemyoussef2020.github.io/tasty-kitchens/';
    
    return status
}

/* submit   */

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if (name.value === '') {
        textError.textContent = 'Please enter a valid Username & Password'
        return false
    }

    return checkingOnPassword()
})
