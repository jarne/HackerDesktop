/**
 * HackerDesktop | main app file
 */

import "./jqueryImport";

import "jquery-ui-dist/jquery-ui.min.css";
import "jquery-ui-dist/jquery-ui.min";

/* Hacker code typer view */

const hackerCodeView = $("#hackerCodeView");

import CodeTyper from "./codetyper";

const codeTyper = new CodeTyper(hackerCodeView);

$(document).on("keypress", () => {
    codeTyper.hackerKeysPressed();

    $(document).scrollTop($(document).height());
});

/* Window modules */

const portscannerDialog = $("#portscannerDialog");
const matrixcalculatorDialog = $("#matrixcalculatorDialog");

portscannerDialog.dialog({
    width: 450,
    height: 300,
    autoOpen: false
});

matrixcalculatorDialog.dialog({
    width: 300,
    height: 250,
    autoOpen: false
});

import PortScanner from "./modules/portscanner";
import MatrixCalculator from "./modules/matrixcalculator";

new PortScanner(portscannerDialog.on(this));
new MatrixCalculator(matrixcalculatorDialog.on(this));

/* Module launchers */

const portscannerLauncher = $("#portscannerLauncher");
const matrixcalculatorLauncher = $("#matrixcalculatorLauncher");

portscannerLauncher.on("click", () => {
    portscannerDialog.dialog("open");
});

matrixcalculatorLauncher.on("click", () => {
    matrixcalculatorDialog.dialog("open");
});
