import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './pages/MainMenu';
import LevelSelection from './pages/LevelSelection';
import TopicList from './pages/TopicList';
import DeleExamSections from './pages/DeleExamSections';
import DeleExamContent from './pages/DeleExamContent';
import AdminPanel from './pages/AdminPanel';
import AdminDeleSection from './pages/AdminDeleSection';
import AdminSectionLevels from './pages/AdminSectionLevels';
import WebApp from '@twa-dev/sdk';

function App() {
  // Настройка темы Telegram
  React.useEffect(() => {
    // Установка цвета кнопки назад в соответствии с темой Telegram
    document.body.style.setProperty('--button-color', WebApp.themeParams.button_color);
    document.body.style.setProperty('--button-text-color', WebApp.themeParams.button_text_color);
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/:section" element={<LevelSelection />} />
            <Route path="/:section/:level" element={<TopicList />} />
            <Route path="/dele/:level" element={<DeleExamSections />} />
            <Route path="/dele/:level/:part" element={<DeleExamContent />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/dele" element={<AdminDeleSection />} />
            <Route path="/admin/dele/:level" element={<AdminDeleSection />} />
            <Route path="/admin/:section" element={<AdminDeleSection />} />
            <Route path="/admin/:section/levels" element={<AdminSectionLevels />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;