/**
 * HackerDesktop | port scanner module
 */

import "./../../css/modules/portscanner.scss";

class PortScanner {
    constructor(portscannerDialog) {
        this.dialog = portscannerDialog;

        this.dialog.onshow = () => {
            this.addScannedPort();
        };
    }

    static randomPort() {
        return Math.floor(Math.random() * (10000 - 1000)) + 1000;
    }

    static randomOpenClosed() {
        if (Math.random() > 0.85) {
            return "<span class='text-green'>open</span>";
        }

        return "<span class='text-red'>closed</span>";
    }

    addScannedPort() {
        this.dialog.body.innerHTML +=
            "<p>scanning security port " +
            PortScanner.randomPort() +
            ", port is " +
            PortScanner.randomOpenClosed() +
            "</p>";

        this.dialog.body.scrollTop = this.dialog.body.scrollHeight;

        setTimeout(this.addScannedPort.bind(this), 500);
    }
}

export default PortScanner;
