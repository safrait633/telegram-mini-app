import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';
import { Icons } from '../assets/icons';

function MainMenu() {
  const navigate = useNavigate();

  // Информация о разделах
  const sections = [
    {
      id: 'grammar',
      title: 'Грамматика',
      color: '#2E7D32',
      description: 'Изучение грамматических правил испанского языка',
      icon: <Icons.Grammar />
    },
    {
      id: 'reading',
      title: 'Чтение',
      color: '#1565C0',
      description: 'Тексты для чтения и понимания на испанском языке',
      icon: <Icons.Reading />
    },
    {
      id: 'listening',
      title: 'Аудирование',
      color: '#EF6C00',
      description: 'Аудиоматериалы для развития навыков понимания речи',
      icon: <Icons.Listening />
    },
    {
      id: 'writing',
      title: 'Письмо',
      color: '#6A1B9A',
      description: 'Упражнения для развития навыков письменной речи',
      icon: <Icons.Writing />
    },
    {
      id: 'speaking',
      title: 'Говорение',
      color: '#00838F',
      description: 'Практика разговорной речи и произношения',
      icon: <Icons.Speaking />
    },
    {
      id: 'dele',
      title: 'DELE',
      color: '#C2185B',
      description: 'Подготовка к экзамену DELE по испанскому языку',
      icon: <Icons.DELE />
    },
    {
      id: 'chat',
      title: 'Чат',
      color: '#455A64',
      description: 'Общение и практика испанского языка в чате',
      icon: <Icons.Chat />
    }
  ];

  const handleSectionClick = (sectionId) => {
    navigate(`/${sectionId}`);
  };

  return (
    <div className="main-menu-page">
      <div className="welcome-block">
        <h2>¡Bienvenido!</h2>
        <p>Выберите раздел для изучения испанского языка</p>
      </div>
      
      <div className="sections-container">
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className="section-card"
            style={{ 
              borderLeftColor: section.color,
              '--index': index
            }}
            onClick={() => handleSectionClick(section.id)}
          >
            <div 
              className="section-icon"
              style={{ color: section.color }}
            >
              {section.icon}
            </div>
            <div className="section-info">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;