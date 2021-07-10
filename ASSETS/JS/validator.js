function Validator(option){

    function Validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        var errorElement  = inputElement.parentElement.querySelector(option.errorSelector);

        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.classList.add('is-invalid');
        }else{
            errorElement.innerText="";
            inputElement.classList.remove('is-invalid');
        }
    }

    var formElement=document.querySelector(option.form);
    if(formElement){
        option.rules.forEach( function ( rule ) {
            var inputElement = formElement.querySelector(rule.Selector);
            if(inputElement){
                inputElement.onblur = function() {
                    Validate(inputElement,rule);
                }
                inputElement.oninput= function(){
                    var errorElement  = inputElement.parentElement.querySelector(option.errorSelector);
                        errorElement.innerText="";
                        inputElement.classList.remove('is-invalid');
                }
            }
        });
    }
}

Validator.isRequired = function (Selector) {
    return{
        Selector : Selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui long nhap truong nay'
        }
    }
}
Validator.isEmail = function(Selector){
    return{
        Selector : Selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : "trường này phaỉ là email"
        }
    }
}
Validator.minLength = function(Selector,min){
    return{
        Selector : Selector,
        test: function(value){
            return value.length >= min ? undefined : 'nhap toi thieu '+min+' ki tu'
        }
    }
}

Validator.isConfirmed = function(Selector,getConfirmValue){
    return{
        Selector : Selector,
        test : function(value){
            return value === getConfirmValue() ? undefined : 'giá trị nhập vào không chính sát'
        }
    }
}