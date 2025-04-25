/**
 * HackerDesktop | main app file
 */

import "winbox/dist/winbox.bundle.min.js";

/* Hacker code typer view */

const hackerCodeView = document.getElementById("hackerCodeView");

import CodeTyper from "./codetyper";

const codeTyper = new CodeTyper(hackerCodeView);

document.addEventListener("keypress", () => {
    codeTyper.hackerKeysPressed();

    document.documentElement.scrollTop = document.documentElement.scrollHeight;
});

/* Window modules */

const portscannerDialog = new WinBox("PORT SCANNER", {
    width: 450,
    height: 300,
    hidden: true,
    class: "module-window"
});
const matrixcalculatorDialog = new WinBox("MATRIX CALCULATOR", {
    width: 300,
    height: 250,
    hidden: true,
    class: "module-window"
});

import PortScanner from "./modules/portscanner";
import MatrixCalculator from "./modules/matrixcalculator";

new PortScanner(portscannerDialog);
new MatrixCalculator(matrixcalculatorDialog);

/* Module launchers */

const portscannerLauncher = document.getElementById("portscannerLauncher");
const matrixcalculatorLauncher = document.getElementById(
    "matrixcalculatorLauncher"
);

portscannerLauncher.addEventListener("click", () => {
    portscannerDialog.show();
});

matrixcalculatorLauncher.addEventListener("click", () => {
    matrixcalculatorDialog.show();
});
