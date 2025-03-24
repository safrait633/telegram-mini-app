import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const levelInfo = {
  a1: { title: 'A1 - Начальный', description: 'Базовые знания языка' },
  a2: { title: 'A2 - Элементарный', description: 'Простые фразы и выражения' },
  b1: { title: 'B1 - Средний', description: 'Общение на знакомые темы' },
  b2: { title: 'B2 - Выше среднего', description: 'Свободное общение' },
  c1: { title: 'C1 - Продвинутый', description: 'Сложные тексты и дискуссии' },
  c2: { title: 'C2 - Профессиональный', description: 'Владение на уровне носителя' }
};

const AdminPanel = () => {
  const [pinCode, setPinCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (pinCode === '193728') {
        setIsAuthorized(true);
        setError('');
      } else {
        setError('Неверный пин-код');
      }
    } catch (err) {
      setError('Произошла ошибка при входе');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="admin-login-container">
        <form onSubmit={handlePinSubmit} className="admin-login-form">
          <h2>Вход в панель администратора</h2>
          <input
            type="password"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            placeholder="Введите пин-код"
            className="admin-pin-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="admin-submit-btn" disabled={isLoading}>
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    );
  }

  const handleSectionClick = (section) => {
    if (section === 'dele') {
      navigate(`/admin/${section}`);
    } else {
      navigate(`/admin/${section}/levels`);
    }
  };

  return (
    <div className="admin-panel-container">
      <h1>Панель администратора</h1>
      <div className="admin-sections">
        {Object.entries({
          grammar: 'Грамматика',
          reading: 'Чтение',
          listening: 'Аудирование',
          writing: 'Письмо',
          speaking: 'Говорение',
          dele: 'DELE',
          chat: 'Чат'
        }).map(([section, title]) => (
          <div key={section} className={`admin-section ${section}`} onClick={() => handleSectionClick(section)}>
            <h2>{title}</h2>
            {section !== 'dele' && section !== 'chat' && (
              <div className="level-grid">
                {Object.entries(levelInfo).map(([level, info]) => (
                  <div key={level} className={`level-item ${level}`}>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                  </div>
                ))}
              </div>
            )}
            {section === 'dele' && <p>Подготовка к экзамену DELE</p>}
            {section === 'chat' && <p>Практика общения на испанском языке</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;