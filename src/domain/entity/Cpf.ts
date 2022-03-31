export default class Cpf {

    private FACTOR_DIGIT_1 = 10;
    private FACTOR_DIGIT_2 = 11;
    value: string;

    constructor(value: string) {
        if(!this.validate(value)) throw new Error("CPF Inválido")
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    private validate(cpfcnpj: string) {
        if (!cpfcnpj) return false
        cpfcnpj = this.removerCaracteres(cpfcnpj)
        if (!cpfcnpj) return false
        if (!this.isValidaLength(cpfcnpj)) return false;
        if (this.hasAllDigitsEqual(cpfcnpj)) return false;
        const digit1 = this.calculateCheckDigit(cpfcnpj, this.FACTOR_DIGIT_1);
        const digit2 = this.calculateCheckDigit(cpfcnpj, this.FACTOR_DIGIT_2);
        let checkDigit = this.extractCheckDigit(cpfcnpj);
        const calculatedDigit = `${digit1}${digit2}`;
        return checkDigit == calculatedDigit;
    }

    private removerCaracteres(cpfcnpj: string) {
        return cpfcnpj.replace(/[\.\-]/g, "");
    }

    private isValidaLength(cpfcnpj: string) {
        return cpfcnpj.length === 11;
    }

    private hasAllDigitsEqual(cpfcnpj: string) {
        const [firstDigit] = cpfcnpj;
        return [...cpfcnpj].every(digit => digit === firstDigit);
    }

    private calculateCheckDigit(cpfcnpj: string, factor: number) {
        let total = 0;
        for (const digit of cpfcnpj) {
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest;
    }
    private extractCheckDigit(cpfcnpj: string) {

        return cpfcnpj.slice(-2)
    }
}