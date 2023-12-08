import React, { useState } from "react";
import myfileppt from '../assets/files/ASSINGNMENT.pptx'
import myfilepdf from '../assets/files/Listening Skills.pdf'

const PptxPdfViewer = () => {

    return (
        <div>
            < div className="border-top border-5 border-dark" id={"second"} style={{ padding: '30px 0' }}>
                <h1 className="text-center bg-success">PPTX Viewer</h1>
                <iframe
                    title={'PDF-Viewer'}
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=https://www.dickinson.edu/download/downloads/id/8151/powerpoint_template_black_and_red_design_wide_format_slide.pptx`}
                    // src={`https://view.officeapps.live.com/op/embed.aspx?src=${myfileppt}`}                
                    style={{ height: '100vh', width: '90vw' }}></iframe>
            </div>
            < div className="border-top border-5 border-dark" id={"second"} style={{ padding: '30px 0' }}>
                <h1 className="text-center bg-success">PDF Viewer</h1>
                <iframe
                    title={'PPTX-Viewer'}
                    src={myfilepdf}
                    style={{ height: '100vh', width: '90vw' }}></iframe>
            </div>
        </div>

    )
};
export default PptxPdfViewer;