/**
 * HackerDesktop | hacker code typer module
 */

import { readFileSync } from "fs";

import "./../css/codetyper.scss";

class CodeTyper {
    constructor(codeView) {
        this.hackerCodeView = codeView;

        this.hackerCode = readFileSync(__dirname + "/../hackerCode.txt", "utf8");

        this.codeCharAt = 0;
    }

    codeChar() {
        return this.hackerCode.charAt(this.codeCharAt++)
            .replace(/(\n)+/g, "<br>")
            .replace(/( )+/g, "&nbsp;");
    }

    hackerKeysPressed() {
        const charsCount = Math.floor(Math.random() * (10 - 2)) + 2;

        for(let c = 0; c < charsCount; c++) {
            this.hackerCodeView.append(this.codeChar());
        }
    }
}

export default CodeTyper;
