let form = document.querySelector('.form-validation');

let validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();

        for(let i=0; i<inputs.length;i++){
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true){
                send = false;
                //exibir erro
                validator.showError(input,check);
            }
        }
        if(send){
            form.submit();
        }
    },checkInput:(input)=>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetails  = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value ==''){
                            return 'Campo não pode ser vazio.';
                        }
                    break;
                    case 'min':
                        if(input.value.length<rDetails[1]){
                            return 'Campo não pode ter menos de '+ rDetails[1] +' caracteres.';
                        }
                    break;
                    case 'email':
                        if(input.value !=''){
                            let validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                            if(!validationEmail.test(input.value.toLowerCase())){
                                return 'Insira um E-mail valido exemplo: exemplo@gmail.com';
                            }
                        }
                    break;
                    case 'phone':
                        if(input.value !=''){
                            let validatorPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                            if( !validatorPhone.test(input.value)){
                                return 'Digite um numero valido';
                            }
                        }
                    break;
                    case 'cpf':
                        if(input.value != '') {
                            var Soma;
                            var Resto;
                            Soma = 0;
                          if (input.value == "00000000000") return 'Insira um cpf valido';
                        
                          for (i=1; i<=9; i++) Soma = Soma + parseInt(input.value.substring(i-1, i)) * (11 - i);
                          Resto = (Soma * 10) % 11;
                        
                            if ((Resto == 10) || (Resto == 11))  Resto = 0;
                            if (Resto != parseInt(input.value.substring(9, 10)) ) return 'Insira um cpf valido';
                        
                          Soma = 0;
                            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(input.value.substring(i-1, i)) * (12 - i);
                            Resto = (Soma * 10) % 11;
                        
                            if ((Resto == 10) || (Resto == 11))  Resto = 0;
                            if (Resto != parseInt(input.value.substring(10, 11) ) ) return 'Insira um cpf valido';
                        }
                    break;
                }
            }
        }
        return true;
    },showError:(input,error)=>{
        input.style.borderColor = '#FF0000';
        let errorElement = document.createElement('span');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement,input.errorElementSibiling ); 
    },clearErrors:()=>{
        let inputs = form.querySelectorAll('input')
        for(let i = 0;i<inputs.length;i++){
            inputs[i].style.borderColor = '#3179fd';
        }

        let errorElement = document.querySelectorAll('.error');
        for(let i = 0;i<errorElement.length;i++){
            errorElement[i].remove();
        }
    },
}

form.addEventListener('submit',validator.handleSubmit);