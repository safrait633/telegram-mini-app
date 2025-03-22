import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const telegramUser = WebApp.initDataUnsafe.user;
  
  // Проверяем, находимся ли мы на главной странице
  const isMainPage = location.pathname === '/';

  const handleBackClick = () => {
    // Если мы на главной странице, то кнопка назад закрывает приложение
    if (isMainPage) {
      WebApp.close();
    } else {
      navigate(-1); // Возвращаемся на предыдущую страницу
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <button className="back-button" onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <h1 className="header-title">
          {isMainPage ? 'Испанский язык' : (
            <>
              <button className="home-button" onClick={handleHomeClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {location.pathname.split('/').filter(Boolean)[0]}
            </>
          )}
        </h1>
      </div>
    </header>
  );
}

export default Header;