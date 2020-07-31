function createPdfTtf() {
    var doc = new jsPDF({
        filters: ["ASCIIHexEncode"],
        putOnlyUsedFonts: true,
        floatPrecision: 2
    })

    doc.setFont("times", "italic")
    doc.text('Hello world!', 10, 10)

    const notoSans = doc.loadFile("./src/noto-sans-normal.ttf");
    doc.addFileToVFS("noto-sans-normal.ttf", notoSans);
    doc.addFont("noto-sans-normal.ttf", "NotoSansNormal", "normal")
    doc.setFont("NotoSansNormal", "normal")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('ttf.pdf')
}

function createPdfFromPtSansTtf() {
    var doc = new jsPDF({
        filters: ["ASCIIHexEncode"],
        putOnlyUsedFonts: true,
        floatPrecision: 2
    })

    doc.setFont("times", "italic")
    doc.text('Hello world!', 10, 10)

    const notoSans = doc.loadFile("./src/PTSans.ttf");
    doc.addFileToVFS("PTSans.ttf", notoSans);
    doc.addFont("PTSans.ttf", "PTSans", "normal")
    doc.setFont("PTSans")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('ttf.pdf')
}

function createPdfTtfBase64() {
    // Default export is a4 paper, portrait, using millimeters for units
    var doc = new jsPDF({
        filters: ["ASCIIHexEncode"],
        putOnlyUsedFonts: true,
        floatPrecision: 2
    })

    doc.setFont("times", "italic")
    doc.text('Hello world!', 10, 10)

    doc.setFont("NotoSansTtfBase64-normal", "normal")
    doc.text('Hello world!', 10, 30)
    console.log(doc);
    doc.save('ttfBase64.pdf')
}