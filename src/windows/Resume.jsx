import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Download } from "lucide-react";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {

    const { windows } = useWindowStore();
    const { isMaximized } = windows.resume;


  return (
    <>
        <div id='window-header'>
            <WindowControls target="resume" />
            <h2>Resume.pdf</h2>
            <a href="files/Aayush_Thorat_Resume.pdf" download title="Download Resume">
                <Download className="icon cursor-pointer" />
            </a>
        </div>

        <div className="overflow-y-auto h-full">
            <Document file="files/Aayush_Thorat_Resume.pdf" className="flex items-center justify-center">
                <Page 
                    pageNumber={1} 
                    renderTextLayer 
                    renderAnnotationLayer 
                    scale={isMaximized ? 1.5 : 1}
                />
            </Document>
            <div className={isMaximized ? "p-8" : "p-2"} />
        </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume');

export default ResumeWindow