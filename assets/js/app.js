/**
 * HackerDesktop | main app file
 */

import "winbox/dist/winbox.bundle.min.js";

import CodeTyper from "./codetyper";
import PortScanner from "./modules/portscanner";
import MatrixCalculator from "./modules/matrixcalculator";

/* Hacker code typer view */

const hackerCodeView = document.getElementById("hackerCodeView");

const codeTyper = new CodeTyper(hackerCodeView);

document.addEventListener("keypress", () => {
    codeTyper.hackerKeysPressed();

    document.documentElement.scrollTop = document.documentElement.scrollHeight;
});

/* Window modules */

let portscannerDialog;
let matrixcalculatorDialog;

/* Module launchers */

const portscannerLauncher = document.getElementById("portscannerLauncher");
const matrixcalculatorLauncher = document.getElementById(
    "matrixcalculatorLauncher"
);

portscannerLauncher.addEventListener("click", () => {
    portscannerDialog = new WinBox("PORT SCANNER", {
        width: 450,
        height: 300,
        class: "module-window"
    });
    new PortScanner(portscannerDialog);
});

matrixcalculatorLauncher.addEventListener("click", () => {
    matrixcalculatorDialog = new WinBox("MATRIX CALCULATOR", {
        width: 300,
        height: 250,
        class: "module-window"
    });
    new MatrixCalculator(matrixcalculatorDialog);
});
