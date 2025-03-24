import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLevelsGrid.css';

const levelInfo = {
  a1: { title: 'A1 - Начальный', description: 'Базовые знания языка' },
  a2: { title: 'A2 - Элементарный', description: 'Простые фразы и выражения' },
  b1: { title: 'B1 - Средний', description: 'Общение на знакомые темы' },
  b2: { title: 'B2 - Выше среднего', description: 'Свободное общение' },
  c1: { title: 'C1 - Продвинутый', description: 'Сложные тексты и дискуссии' },
  c2: { title: 'C2 - Профессиональный', description: 'Владение на уровне носителя' }
};

const AdminLevelsGrid = ({ section }) => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    navigate(`/admin/${section}/${level}`);
  };

  const handleEditClick = (e, level) => {
    e.stopPropagation();
    navigate(`/admin/${section}/${level}/edit`);
  };

  const handleAddClick = (e, level) => {
    e.stopPropagation();
    navigate(`/admin/${section}/${level}/new`);
  };

  return (
    <div className="admin-levels-grid">
      {Object.entries(levelInfo).map(([key, info]) => (
        <div 
          key={key} 
          className="admin-level-card"
          onClick={() => handleLevelClick(key)}
        >
          <h3>{info.title}</h3>
          <p>{info.description}</p>
          <div className="admin-controls">
            <button 
              className="edit-btn gear-btn" 
              title="Редактировать"
              onClick={(e) => handleEditClick(e, key)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </button>
            <button 
              className="add-btn" 
              title="Добавить"
              onClick={(e) => handleAddClick(e, key)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminLevelsGrid;