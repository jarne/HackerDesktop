/**
 * HackerDesktop | port scanner module
 */

class PortScanner {
    constructor(portscannerDialog) {
        this.dialog = portscannerDialog;

        this.dialog.on("dialogopen", () => {
            this.addScannedPort();
        });
    }

    static randomPort() {
        return Math.floor(Math.random() * (10000 - 1000)) + 1000;
    }

    static randomOpenClosed() {
        if (Math.random() > 0.85) {
            return "<span class='green-text'>open</span>";
        }

        return "<span class='red-text'>closed</span>";
    }

    addScannedPort() {
        this.dialog.append(
            "<p>scanning security port " +
                PortScanner.randomPort() +
                ", port is " +
                PortScanner.randomOpenClosed() +
                "</p>"
        );

        this.dialog.prop("scrollTop", this.dialog.prop("scrollHeight"));

        setTimeout(this.addScannedPort.bind(this), 500);
    }
}

export default PortScanner;
