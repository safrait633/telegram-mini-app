import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicList.css';

function TopicList() {
  const { section, level } = useParams();
  
  // Информация о разделах
  const sectionInfo = {
    grammar: {
      title: 'Грамматика',
      color: '#4CAF50'
    },
    reading: {
      title: 'Чтение',
      color: '#2196F3'
    },
    listening: {
      title: 'Аудирование',
      color: '#FF9800'
    },
    dele: {
      title: 'DELE',
      color: '#E91E63'
    }
  };

  // Информация об уровнях
  const levelInfo = {
    a1: { title: 'A1 - Начальный', color: '#8BC34A' },
    a2: { title: 'A2 - Элементарный', color: '#4CAF50' },
    b1: { title: 'B1 - Средний', color: '#03A9F4' },
    b2: { title: 'B2 - Выше среднего', color: '#3F51B5' },
    c1: { title: 'C1 - Продвинутый', color: '#9C27B0' },
    c2: { title: 'C2 - Профессиональный', color: '#673AB7' }
  };

  const currentSection = sectionInfo[section] || { title: 'Раздел', color: '#607D8B' };
  const currentLevel = levelInfo[level] || { title: 'Уровень', color: '#607D8B' };

  // Примерные темы для разных разделов и уровней
  // В реальном приложении эти данные будут загружаться с сервера
  const getTopics = () => {
    if (section === 'grammar' && level === 'a1') {
      return [
        { id: 1, title: 'Артикли в испанском языке', progress: 0 },
        { id: 2, title: 'Настоящее время (Presente de Indicativo)', progress: 0 },
        { id: 3, title: 'Род и число существительных', progress: 0 },
        { id: 4, title: 'Личные местоимения', progress: 0 },
        { id: 5, title: 'Притяжательные прилагательные', progress: 0 }
      ];
    } else if (section === 'reading' && level === 'a1') {
      return [
        { id: 1, title: 'Знакомство с испанским алфавитом', progress: 0 },
        { id: 2, title: 'Простые диалоги', progress: 0 },
        { id: 3, title: 'Чтение коротких текстов', progress: 0 },
        { id: 4, title: 'Базовая лексика', progress: 0 }
      ];
    } else if (section === 'listening' && level === 'a1') {
      return [
        { id: 1, title: 'Числа и цифры', progress: 0 },
        { id: 2, title: 'Приветствия и прощания', progress: 0 },
        { id: 3, title: 'В ресторане', progress: 0 },
        { id: 4, title: 'Покупки', progress: 0 }
      ];
    } else if (section === 'dele' && level === 'a1') {
      return [
        { id: 1, title: 'Структура экзамена DELE A1', progress: 0 },
        { id: 2, title: 'Практика чтения', progress: 0 },
        { id: 3, title: 'Практика аудирования', progress: 0 },
        { id: 4, title: 'Практика письма', progress: 0 },
        { id: 5, title: 'Практика устной речи', progress: 0 }
      ];
    }
    
    // Для других комбинаций раздел/уровень возвращаем заглушку
    return [
      { id: 1, title: 'Тема 1', progress: 0 },
      { id: 2, title: 'Тема 2', progress: 0 },
      { id: 3, title: 'Тема 3', progress: 0 }
    ];
  };

  const topics = getTopics();

  return (
    <div className="topic-list-page">
      <div 
        className="level-header"
        style={{ backgroundColor: currentLevel.color }}
      >
        <h2>{currentSection.title}: {currentLevel.title}</h2>
      </div>
      
      <div className="topics-container">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            className="topic-card"
            style={{ borderColor: currentSection.color }}
          >
            <h3 className="topic-title">{topic.title}</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${topic.progress}%`,
                  backgroundColor: currentSection.color 
                }}
              ></div>
            </div>
            <span className="progress-text">{topic.progress}% завершено</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicList;