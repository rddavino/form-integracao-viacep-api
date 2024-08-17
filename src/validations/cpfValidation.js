const ValidateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const digits = cpf.split("").map(Number);

  constcalculateDigit = (digits, weight) => {
    const sum = digits
      .slice(0, weight)
      .reduce((acc, digit, index) => acc + digit * (weight + 1 - index), 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstDigit = digits[9];
  const secondCheckDigit = calculateDigit(digits, 10);

  return firstCheckDigit === firstDigit && secondCheckDigit === secondDigit;
};

export default ValidateCPF;
