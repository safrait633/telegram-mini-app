import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Навигационные элементы для футера
  const navItems = [
    { id: 'grammar', label: 'Грамматика', path: '/grammar' },
    { id: 'reading', label: 'Чтение', path: '/reading' },
    { id: 'listening', label: 'Аудирование', path: '/listening' },
    { id: 'dele', label: 'DELE', path: '/dele' }
  ];

  return (
    <footer className="app-footer">
      <nav className="footer-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
                         location.pathname.startsWith(`${item.path}/`);
          
          return (
            <button 
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;