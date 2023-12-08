import React from 'react';
import UserInterface from './components/UI/topUi';
import PptxViewer from './components/gamizign-task/PptViewer';
import PdfViewer from './components/gamizign-task/PdfViewer';
import PptxPdfViewer from './components/Pptx+Pdf-Viewer';
import Carousels from './components/UI/carousel';

function App() {
  return (

    <div>
      <UserInterface />
      <PptxViewer />
      <PdfViewer />
      <PptxPdfViewer />
      <Carousels />
      <div className="bg-dark text-white py-2">
        <span className="fs-5"> Develope by <span className=" text-primary">Azhar Solangi</span> </span>
      </div>
    </div>
  );

}

export default App;
