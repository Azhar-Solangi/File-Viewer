import React, { useState } from "react";



const PdfViewer = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    const handleFileChanges = (event) => {
        const file = event.target.files[0];

        if (file && file.type === 'application/pdf') {
            setPdfUrl(URL.createObjectURL(file));
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    return (
        <div className="text-center border-top border-5 border-dark py-3">
            <h1>Upload and Display (PDF) File Only</h1>
            <input type="file" accept=".pdf" onChange={handleFileChanges} />
            {pdfUrl && (
                <div>
                    <h3>Rendered PDF File:</h3>
                    <iframe
                        title="PDF Viewer"
                        src={pdfUrl}
                        width="100%"
                    />
                </div>
            )}
        </div>
    )
};

export default PdfViewer; 