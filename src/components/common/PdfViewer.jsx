import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

// Use the bundled worker via CDN — avoids manual worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.2);

  const onDocumentLoad = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPage(1);
  }, []);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(1)));
  const zoomOut = () => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(1)));

  // Block right-click inside the viewer
  const blockContext = (e) => e.preventDefault();

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm"
      onContextMenu={blockContext}
    >
      {/* Top toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-blue text-white flex-shrink-0">
        <span className="text-sm font-semibold tracking-wide">Company Profile — NextGen Cement</span>

        <div className="flex items-center gap-1">
          {/* Page nav */}
          <button
            onClick={prev}
            disabled={page <= 1}
            className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 transition"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs px-3 min-w-[80px] text-center">
            {numPages ? `${page} / ${numPages}` : '—'}
          </span>
          <button
            onClick={next}
            disabled={!numPages || page >= numPages}
            className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 transition"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Divider */}
          <span className="w-px h-5 bg-white/20 mx-2" />

          {/* Zoom */}
          <button onClick={zoomOut} className="p-2 rounded-lg hover:bg-white/10 transition" aria-label="Zoom out">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs w-12 text-center">{Math.round(scale * 100)}%</span>
          <button onClick={zoomIn} className="p-2 rounded-lg hover:bg-white/10 transition" aria-label="Zoom in">
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Divider */}
          <span className="w-px h-5 bg-white/20 mx-2" />

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Close viewer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PDF canvas area — scrollable */}
      <div
        className="flex-1 overflow-auto flex justify-center bg-gray-800 py-6 px-4"
        onContextMenu={blockContext}
      >
        {/* Transparent overlay — blocks right-click save on canvas */}
        <div className="relative">
          <Document
            file="/docs/company-profile.pdf"
            onLoadSuccess={onDocumentLoad}
            loading={
              <div className="flex items-center justify-center h-64 text-white text-sm">
                Loading document…
              </div>
            }
            error={
              <div className="flex items-center justify-center h-64 text-red-400 text-sm">
                Could not load the document. Please try again later.
              </div>
            }
          >
            <Page
              pageNumber={page}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-2xl"
            />
          </Document>

          {/* Invisible overlay — prevents direct canvas right-click save */}
          <div
            className="absolute inset-0 z-10"
            onContextMenu={blockContext}
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          />
        </div>
      </div>

      {/* Bottom note */}
      <div className="flex items-center justify-center py-2 bg-dark-blue/90 text-xs text-gray-400 flex-shrink-0">
        This document is confidential. Unauthorised distribution is prohibited.
      </div>
    </div>
  );
};

export default PdfViewer;
