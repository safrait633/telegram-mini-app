import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminDeleSection.css';

const AdminDeleSection = () => {
  const navigate = useNavigate();
  const { level } = useParams();

  // Информация об уровнях
  const levelInfo = {
    a1: { title: 'A1 - Начальный', color: '#8BC34A' },
    a2: { title: 'A2 - Элементарный', color: '#4CAF50' },
    b1: { title: 'B1 - Средний', color: '#03A9F4' },
    b2: { title: 'B2 - Выше среднего', color: '#3F51B5' },
    c1: { title: 'C1 - Продвинутый', color: '#9C27B0' },
    c2: { title: 'C2 - Профессиональный', color: '#673AB7' }
  };

  // Информация о частях экзамена
  const partInfo = {
    reading: { 
      title: 'Comprensión de lectura', 
      description: 'Чтение и понимание текстов'
    },
    listening: { 
      title: 'Comprensión auditiva', 
      description: 'Аудирование и понимание речи'
    },
    writing: { 
      title: 'Expresión e interacción escritas', 
      description: 'Письменное выражение и взаимодействие'
    },
    speaking: { 
      title: 'Expresión e interacción orales', 
      description: 'Устное выражение и взаимодействие'
    },
    complete: { 
      title: 'Полный экзамен', 
      description: 'Комплексная подготовка ко всем частям экзамена'
    }
  };

  const handleEdit = (part) => {
    navigate(`/admin/dele/${level}/${part}/edit`);
  };

  const handleAdd = (part) => {
    navigate(`/admin/dele/${level}/${part}/new`);
  };

  if (!level) {
    return (
      <div className="admin-dele-container">
        <h1>Выберите уровень DELE</h1>
        <div className="admin-levels-grid">
          {Object.entries(levelInfo).map(([key, info]) => (
            <div 
              key={key}
              className="admin-level-card"
              style={{ backgroundColor: info.color }}
              onClick={() => navigate(`/admin/dele/${key}`)}
            >
              <h2>{info.title}</h2>
              <div className="admin-controls">
                <button 
                  className="edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/admin/dele/${key}/edit`);
                  }}
                >
                  Редактировать
                </button>
                <button 
                  className="add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/admin/dele/${key}/new`);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dele-container">
      <h1>{levelInfo[level]?.title || 'Уровень не найден'}</h1>
      <div className="admin-parts-grid">
        {Object.entries(partInfo).map(([key, info]) => (
          <div key={key} className="admin-part-card">
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <div className="admin-controls">
              <button 
                className="edit-btn"
                onClick={() => handleEdit(key)}
              >
                Редактировать
              </button>
              <button 
                className="add-btn"
                onClick={() => handleAdd(key)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDeleSection;