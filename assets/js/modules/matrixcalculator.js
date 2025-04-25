/**
 * HackerDesktop | matrix calculator module
 */

class MatrixCalculator {
    constructor(matrixcalculatorDialog) {
        this.dialog = matrixcalculatorDialog;

        this.dialog.onshow = () => {
            this.addMatrixDigit();
        };
    }

    static randomDigit() {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }

    addMatrixDigit() {
        this.dialog.body.innerHTML += MatrixCalculator.randomDigit();

        this.dialog.body.scrollTop = this.dialog.body.scrollHeight;

        setTimeout(this.addMatrixDigit.bind(this), 10);
    }
}

export default MatrixCalculator;
