import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LevelSelection.css';
function LevelSelection() {
  const { section } = useParams();
  const navigate = useNavigate();
  
  // Информация о разделах
  const sectionInfo = {
    grammar: {
      title: 'Грамматика',
      color: '#2E7D32',
      description: 'Изучение грамматических правил испанского языка'
    },
    reading: {
      title: 'Чтение',
      color: '#1565C0',
      description: 'Тексты для чтения и понимания на испанском языке'
    },
    listening: {
      title: 'Аудирование',
      color: '#EF6C00',
      description: 'Аудиоматериалы для развития навыков понимания речи'
    },
    dele: {
      title: 'DELE',
      color: '#C2185B',
      description: 'Подготовка к экзамену DELE по испанскому языку'
    }
  };

  // Уровни сложности
  const levels = [
    { id: 'a1', title: 'A1 - Начальный', color: '#FF5252', description: 'Базовые знания языка', label: 'A1' },
    { id: 'a2', title: 'A2 - Элементарный', color: '#FF1744', description: 'Простые фразы и выражения', label: 'A2' },
    { id: 'b1', title: 'B1 - Средний', color: '#FFB300', description: 'Общение на знакомые темы', label: 'B1' },
    { id: 'b2', title: 'B2 - Выше среднего', color: '#FB8C00', description: 'Свободное общение', label: 'B2' },
    { id: 'c1', title: 'C1 - Продвинутый', color: '#43A047', description: 'Сложные тексты и дискуссии', label: 'C1' },
    { id: 'c2', title: 'C2 - Профессиональный', color: '#2E7D32', description: 'Владение на уровне носителя', label: 'C2' }
  ];

  const currentSection = sectionInfo[section] || { title: 'Раздел', color: '#607D8B', description: 'Выберите уровень сложности' };

  const handleLevelClick = (levelId) => {
    // For DELE section, navigate to the exam sections page
    if (section === 'dele') {
      navigate(`/dele/${levelId}`);
    } else {
      // For other sections, navigate to the topic list
      navigate(`/${section}/${levelId}`);
    }
  };

  return (
    <div className="level-selection-page">
      <div 
        className="section-header"
        style={{ backgroundColor: currentSection.color }}
      >
        <h2>{currentSection.title}</h2>
        <p>{currentSection.description}</p>
      </div>
      
      <div className="levels-container">
        {levels.map((level) => (
          <div 
            key={level.id} 
            className="level-card"
            style={{ borderColor: level.color }}
            onClick={() => handleLevelClick(level.id)}
          >
            <div className="level-badge" style={{ backgroundColor: level.color }}>
              {level.label}
            </div>
            <div className="level-info">
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelSelection;