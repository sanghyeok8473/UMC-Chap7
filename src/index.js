import React from 'react';
import { createRoot } from 'react-dom/client'; // 수정된 부분
import { BrowserRouter } from 'react-router-dom'; // 추가된 부분
import App from './App';

createRoot(document.getElementById('root')).render( // 수정된 부분
  <BrowserRouter> {/* 추가된 부분 */}
    <React.StrictMode> {/* 수정된 부분 */}
      <App />
    </React.StrictMode> {/* 수정된 부분 */}
  </BrowserRouter>, {/* 추가된 부분 */}
);
