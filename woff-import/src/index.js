function createPdfWoff() {
    // Default export is a4 paper, portrait, using millimeters for units
    var doc = new jsPDF()

    doc.setFont("time", "italic")
    doc.text('Hello world!', 10, 10)

    const notoSans = doc.loadFile("./src/noto-sans-700.woff");
    doc.addFileToVFS("noto-sans-700.woff", notoSans);
    doc.addFont("noto-sans-700.woff", "NotoSans700", "bold")
    doc.setFont("NotoSans700", "bold")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('woff.pdf')
}

function createPdfTtf() {
    // Default export is a4 paper, portrait, using millimeters for units
    var doc = new jsPDF({
        filters: ["ASCIIHexEncode"],
        putOnlyUsedFonts: true,
        floatPrecision: 2
    })

    doc.setFont("time", "italic")
    doc.text('Hello world!', 10, 10)

    const notoSans = doc.loadFile("./src/noto-sans-normal.ttf");
    doc.addFileToVFS("noto-sans-normal.ttf", notoSans);
    doc.addFont("noto-sans-normal.ttf", "NotoSansNormal", "normal")
    doc.setFont("NotoSansNormal", "normal")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('ttf.pdf')
}

function createPdfTtfBase64() {
    // Default export is a4 paper, portrait, using millimeters for units
    var doc = new jsPDF()

    doc.setFont("time", "italic")
    doc.text('Hello world!', 10, 10)

    doc.setFont("NotoSansTtfBase64", "normal")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('ttfBase64.pdf')
}

function createPdfWoffBase64() {
    // Default export is a4 paper, portrait, using millimeters for units
    var doc = new jsPDF()

    doc.setFont("time", "italic")
    doc.text('Hello world!', 10, 10)

    doc.setFont("NotoSansWoffBase64", "bold")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('woffBase64.pdf')
}