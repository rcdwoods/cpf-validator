var CPF_LENGTH = 11

function isCpfValid(cpf) {
    if (cpfHasValidFormat(cpf)) {
        let formattedCpf = getFormattedCpf(cpf)
        let expectedCpfWithVerificationDigits = getCpfWithExpectedVerificationDigits(formattedCpf)
        return expectedCpfWithVerificationDigits == formattedCpf
    }
    return false
}

function cpfHasValidFormat(cpf) {
    if (cpf == null || cpf == undefined) return false
    if (getFormattedCpf(cpf).length != CPF_LENGTH) return false
    if (getFormattedCpf(cpf).split("").every(c => c == cpf[0])) return false
    return true
}

function getFormattedCpf(cpf) {
    return cpf.replace(/[.# -]/g,'');  
}

function getCpfWithExpectedVerificationDigits(formattedCpf) {
    let cpfWithoutVerificationDigits = formattedCpf.substring(0, 9)
    let cpfWithFirstVerificationDigit = getCpfWithNextVerificationDigit(cpfWithoutVerificationDigits)
    let cpfWithTwoVerificationDigits = getCpfWithNextVerificationDigit(cpfWithFirstVerificationDigit)
    return cpfWithTwoVerificationDigits
}

function getCpfWithNextVerificationDigit(formattedCpf) {
    let sumOfDigits = 0
    for (let index = 0; index < formattedCpf.length; index++) {  
        digit = parseInt(formattedCpf[index]);
        sumOfDigits += ( formattedCpf.length + 1 - index ) * digit;
    };
    let restOfDivision = sumOfDigits % CPF_LENGTH
    let verificationDigit = restOfDivision < 2 ? 0 : 11 - restOfDivision
    return formattedCpf + verificationDigit
}

module.exports = isCpfValid