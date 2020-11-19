// import { getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFRenderParams, version, ViewportParameters } from 'pdfjs-dist';
// import {Inject} from "@angular/core";
// import {DOCUMENT} from "@angular/common";
//
// export class MyPdfService {
//   public document;
//
//   constructor() {
//     let pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
//     GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
//   }
//
//   // My use case demonstrating strongly typed usage.
//   public async pdfToImageDataURLAsync(pdfFile: File): Promise<string> {
//     const arrayBuffer = await new Response(pdfFile).arrayBuffer();
//     const canvas = this.document.createElement('canvas'),
//       ctx = canvas.getContext('2d') as CanvasRenderingContext2D,
//       data = arrayBuffer;
//
//     const pdf: PDFDocumentProxy = await getDocument(data).promise;
//     const page = await pdf.getPage(1);
//
//     const viewPortParams: ViewportParameters = {scale: 2};
//     const viewport = page.getViewport(viewPortParams);
//
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;
//
//     const renderContext: PDFRenderParams = {
//       canvasContext: ctx,
//       viewport: viewport
//     };
//
//     const renderedPage = await page.render(renderContext).promise;
//     const res = canvas.toDataURL();
//     if (pdf != null) pdf.destroy();
//     return res;
//   }
// }
