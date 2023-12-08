import React, { useState, useEffect } from 'react';


const PptxViewer = () => {
  const [pptxDataUrl, setPptxDataUrl] = useState('');
  console.log(pptxDataUrl);

  const handleFileChanger = (event) => {
    const file = event.target.files[0];

    if (file && file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result;
        setPptxDataUrl(base64Data);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PowerPoint file (PPTX)');
    }
  };

  return (
    <div>
      <div className="text-center border-top border-5 border-dark py-3">
       <div> <h1>Upload and Display PowerPoint (PPTX) File Only</h1>
        <input type="file" accept=".pptx" onChange={handleFileChanger} /></div>
        {pptxDataUrl && (
          <div>
            <h3>Rendered PPTX File:</h3>
            <iframe
              src={pptxDataUrl}
              title="PPTX Viewer"
              width="800"
              height="600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PptxViewer;
