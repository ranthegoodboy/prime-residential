export default function autoDownloadPdfBuffer(pdfBuffer, filename) {
  const unitArray = Uint8Array.from(pdfBuffer);
  const content = new Blob([pdfBuffer], { type: "application/pdf" });

  const encodedUri = window.URL.createObjectURL(content);
  const link = document.createElement("a");

  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  link.click();
}
