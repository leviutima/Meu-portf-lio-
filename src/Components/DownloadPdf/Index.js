import React from 'react';
import { saveAs } from 'file-saver';
import styles from './Downloader.module.css'

function Downloader() {
  // Função para lidar com o download do PDF
  const handleDownload = () => {
    const pdfPath = '/assets/curriculoLevi.pdf';

    // Inicia o download do PDF
    saveAs(pdfPath, 'curriculo-Levi.pdf');
  };

  return (
    <div className={styles.containerButtonDownloader}>
      {/* Botão para iniciar o download do PDF */}
      <button onClick={handleDownload} className={styles.buttonDownload}>Download PDF</button>
    </div>
  );
}

export default Downloader;