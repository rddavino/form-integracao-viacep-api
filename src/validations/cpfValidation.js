
function ValidateCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); 

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    for (let i = 9; i < 11; i++) {
        let sum = 0;
        let multiplier = i + 1;

        for (let j = 0; j < i; j++) {
            sum += parseInt(cpf.charAt(j)) * (multiplier - j);
        }

        let digit = (sum * 10) % 11;
        if (digit === 10 || digit === 11) {
            digit = 0;
        }

        if (digit !== parseInt(cpf.charAt(i))) {
            return false;
        }
    }

    return true;
}

export default ValidateCPF;


  