function generateQR() {
    const qrInput = document.getElementById("qrInput");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Bersihkan canvas sebelum generate baru
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    QRCode.toCanvas(canvas, qrInput.value, {
        width: 250, // pastikan ukurannya fix
        margin: 1   // opsional, margin di dalam QR code
    }, (err) => {
        if (err) console.error(err);
        else console.log("QR code berhasil digenerate");
    });
}

//download qrcode



function downloadQR() {
    const input = document.getElementById("qrInput");
    const canvas = document.getElementById("canvas");
    if(input.value === ""){
        const pBaru = document.createElement("p");
        pBaru.textContent = "Isi kolom input agar dapat mendownload gambar";
        console.log("Blum ada link nya");
    } else{
        const link = document.createElement("a"); 
        link.download = "qr-code-" + input.value + ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
}

