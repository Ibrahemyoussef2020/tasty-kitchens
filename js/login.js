const formLogin = document.getElementById('inputs'),
    name = document.getElementById('name'),
    password = document.getElementById('password'),
    textError = document.getElementById('text-error');

/*
const validatePass = (values)=>{
    let errors = '';
    
   const Uppervalue = values.split('').filter(v =>/[A-Z]/.test(v)=== true)
   const Lowervalue = values.split('').filter(v => /[a-z]/.test(v))
   const NumbValue  = values.split('').filter(v => /[0-9]/.test(v))
   const Spicieal    = values.split('').filter(v => SpicialCar.split('').find(s => s === v))
   if(NumbValue < 2) errors +=  '2 number, '
   
   if(Uppervalue.length < 2) errors += '2 upper, '
   
   if(Lowervalue.length < 2) errors += '2 lower ,'
   
   if(Spicieal.length < 2) errors += '2 character, '
   
    return errors
}
*/


const doesContainCharacterEnough = (values)=>{
    const specialCharacterList = '!@#$%%^&*()_+}{}{/*[]-=~?><.,';

    let errors = '' ;

    const containsUpperCase = values.split('').filter(v =>/[A-Z]/.test(v)=== true)
    const containsLowerCase = values.split('').filter(v => /[a-z]/.test(v))
    const containsNumbers = values.split('').filter(v => /[0-9]/.test(v))
    const containsSpecialCharacter   = values.split('').filter(v => specialCharacterList.split('').find(s => s === v))

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

function checkingOnPassword(){
    const {value} = password;
    const {status,errors} = doesContainCharacterEnough(value);

    if (value === '') {
        textError.innerText = 'password is required' 
        return false
    }
    else if (value.length < 8) {
        textError.innerText = 'password\'character must be 8 at lest'
        return false
    }
    else{
        textError.textContent = errors;
    }

    return status
}

formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if (name.value === '') {
        textError.textContent = 'Please enter a valid Username & Password'
        return false
    }

    return checkingOnPassword()
})

