import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleExamSections.css';

function DeleExamSections() {
  const { level } = useParams();
  const navigate = useNavigate();
  
  // Информация об уровнях
  const levelInfo = {
    a1: { title: 'A1 - Начальный', color: '#FF5252', label: 'A1' },
    a2: { title: 'A2 - Элементарный', color: '#FF1744', label: 'A2' },
    b1: { title: 'B1 - Средний', color: '#FFB300', label: 'B1' },
    b2: { title: 'B2 - Выше среднего', color: '#FB8C00', label: 'B2' },
    c1: { title: 'C1 - Продвинутый', color: '#43A047', label: 'C1' },
    c2: { title: 'C2 - Профессиональный', color: '#2E7D32', label: 'C2' }
  };

  const currentLevel = levelInfo[level] || { title: 'Уровень', color: '#607D8B' };

  // Части экзамена DELE
  const examParts = [
    {
      id: 'reading',
      title: 'Comprensión de lectura',
      description: 'Чтение и понимание текстов',
      icon: 'reading'
    },
    {
      id: 'listening',
      title: 'Comprensión auditiva',
      description: 'Аудирование и понимание речи',
      icon: 'listening'
    },
    {
      id: 'writing',
      title: 'Expresión e interacción escritas',
      description: 'Письменное выражение и взаимодействие',
      icon: 'writing'
    },
    {
      id: 'speaking',
      title: 'Expresión e interacción orales',
      description: 'Устное выражение и взаимодействие',
      icon: 'speaking'
    },
    {
      id: 'complete',
      title: 'Полный экзамен',
      description: 'Комплексная подготовка ко всем частям экзамена',
      icon: 'complete'
    }
  ];

  const handlePartClick = (partId) => {
    navigate(`/dele/${level}/${partId}`);
  };

  return (
    <div className="dele-exam-page">
      <div 
        className="level-header"
        style={{ backgroundColor: currentLevel.color }}
      >
        <h2>DELE: {currentLevel.title}</h2>
        <p>Экзамен DELE (Diploma de Español como Lengua Extranjera)</p>
      </div>
      
      <div className="exam-parts-container">
        {examParts.map((part) => (
          <div 
            key={part.id} 
            className="exam-part-card"
            style={{ borderColor: currentLevel.color }}
            onClick={() => handlePartClick(part.id)}
          >
            <div className="part-icon" style={{ backgroundColor: currentLevel.color, color: 'white', borderRadius: '50%', fontWeight: 'bold' }}>
              {currentLevel.label}
            </div>
            <div className="part-info">
              <h3 style={{ color: currentLevel.color }}>{part.title}</h3>
              <p>{part.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleExamSections;