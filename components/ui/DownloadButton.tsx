'use client';

import { Download } from 'lucide-react';

interface DownloadButtonProps {
  filename?: string;
  className?: string;
}

export function DownloadButton({
  filename = 'Dash_Dunmire_Resume.pdf',
  className = ''
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      data-print-hide
      aria-label="Download Resume PDF"
    >
      <Download size={16} />
      Download PDF
    </button>
  );
}
