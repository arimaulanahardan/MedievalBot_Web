import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Terms from './components/terms/index.tsx';
import { ThemeProvider } from "@material-tailwind/react";
import { Suspense } from "react";
import Loading from './common/components/Loading.tsx';
import NotFound from './components/NotFound.tsx';
import './index.css';
import './i18n';
import Rewards from './dashboard/pages/Rewards';
import ReffRewards from './dashboard/pages/ReffRewards';
// Polyfill needed for hardware wallet modules
import { Buffer } from 'buffer'
window.Buffer = Buffer

const Root = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/term&condition' element={<Terms />} />
                <Route path='/dashboard' element={<Rewards/>} />
                <Route path='/Referral-Rewards' element={<ReffRewards/>} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
