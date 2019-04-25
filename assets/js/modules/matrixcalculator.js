/**
 * HackerDesktop | matrix calculator module
 */

import "./../../css/modules/matrixcalculator.scss";

class MatrixCalculator {
    constructor(matrixcalculatorDialog) {
        this.dialog = matrixcalculatorDialog;

        this.dialog.on("dialogopen", () => {
            this.addMatrixDigit();
        });
    }

    static randomDigit() {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }

    addMatrixDigit() {
        this.dialog.append(MatrixCalculator.randomDigit());

        this.dialog.prop("scrollTop", this.dialog.prop("scrollHeight"));

        setTimeout(this.addMatrixDigit.bind(this), 10);
    }
}

export default MatrixCalculator;
