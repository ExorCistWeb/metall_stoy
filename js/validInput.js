(function() {
    const forms = document.forms;
    const phones = document.querySelectorAll('input.phone');
    const submit = document.querySelectorAll('.submit');
    const regTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const inputsName = document.querySelectorAll('input.name');
    const senderMax = document.querySelector('sender-max .submit');

    const dlina = document.querySelector('.dlina');
    const shirina = document.querySelector('.shirina');
    const visota = document.querySelector('.visota');

    dlina.addEventListener('input', () => {
        dlina.value = dlina.value.replace(/[^\d]/g, '');
    });
    shirina.addEventListener('input', () => {
        shirina.value = shirina.value.replace(/[^\d]/g, '');
    });
    visota.addEventListener('input', () => {
        visota.value = visota.value.replace(/[^\d]/g, '');
    });


    inputsName.forEach(name => {
        name.addEventListener('input', () => {
            name.value = name.value.replace(/[a-z-0-9]/gi, '').substr(0, 10);
        });
    });
   
    submit.forEach(btn => {
        btn.disabled = true;
    });

    phones.forEach((tel, i) => {
        tel.addEventListener('input', () => {
            if (tel.parentNode.querySelector('.name')) {
                const nameInput = tel.parentNode.querySelector('.name');
                
                nameInput.addEventListener('input', () => {
                    if (tel.value.trim() !== '' && nameInput.value.trim() !== '') {

                        if (regTel.test(tel.value) && tel.value.length >= 11 && nameInput.value.length >= 2) {
                            submit[i].disabled = false;
                        }  else {
                            submit[i].disabled = true;
                        }
                    } else {
                        submit[i].disabled = true;
                    }
                });
                
                tel.value = tel.value.replace(/\D/g,'').substr(0,11);
                
                if (tel.value.trim() !== '' && nameInput.value.trim() !== '') {

                    if (regTel.test(tel.value) && tel.value.length >= 11) {
                        submit[i].disabled = false;
                    }  else {
                        submit[i].disabled = true;
                    }
                    
                } else {
                    submit[i].disabled = true;
                }
            }

            else {
                tel.value = tel.value.replace(/\D/g,'').substr(0,11);
                
                if (tel.value.trim() !== '') {

                    if (regTel.test(tel.value) && tel.value.length >= 11) {
                        submit[i].disabled = false;
                    }  else {
                        submit[i].disabled = true;
                    }
                    
                } else {
                    submit[i].disabled = true;
                }
            }
            
        })
    });

})();