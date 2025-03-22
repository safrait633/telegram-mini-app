import React from 'react';
import { useParams } from 'react-router-dom';
import './DeleExamContent.css';

function DeleExamContent() {
  const { level, part } = useParams();
  
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
      description: 'Чтение и понимание текстов',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    listening: { 
      title: 'Comprensión auditiva', 
      description: 'Аудирование и понимание речи',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    writing: { 
      title: 'Expresión e interacción escritas', 
      description: 'Письменное выражение и взаимодействие',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    speaking: { 
      title: 'Expresión e interacción orales', 
      description: 'Устное выражение и взаимодействие',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18.5C15.866 18.5 19 15.366 19 11.5C19 7.63401 15.866 4.5 12 4.5C8.13401 4.5 5 7.63401 5 11.5C5 12.4282 5.18031 13.3185 5.51272 14.1369C5.6732 14.5059 5.7428 14.8311 5.71158 15.1651C5.67715 15.5338 5.54296 15.8894 5.32087 16.2C5.09878 16.5106 5 16.7621 5 17C5 17.5523 5.44772 18 6 18C6.55228 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17C19 16.7621 18.9012 16.5106 18.6791 16.2C18.457 15.8894 18.3228 15.5338 18.2884 15.1651C18.2572 14.8311 18.3268 14.5059 18.4873 14.1369C18.8197 13.3185 19 12.4282 19 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    complete: { 
      title: 'Полный экзамен', 
      description: 'Комплексная подготовка ко всем частям экзамена',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  };

  const currentLevel = levelInfo[level] || { title: 'Уровень', color: '#607D8B' };
  const currentPart = partInfo[part] || { title: 'Часть', description: 'Описание части экзамена' };

  // Получение заданий для конкретной части экзамена и уровня
  const getExercises = () => {
    // Здесь будет логика получения заданий в зависимости от уровня и части экзамена
    // В реальном приложении эти данные будут загружаться с сервера
    
    if (part === 'reading') {
      if (level === 'a1') {
        return [
          { id: 1, title: 'Чтение коротких сообщений', description: 'Прочитайте короткие сообщения и выберите правильный ответ' },
          { id: 2, title: 'Понимание объявлений', description: 'Прочитайте объявления и ответьте на вопросы' },
          { id: 3, title: 'Чтение простых текстов', description: 'Прочитайте тексты и выполните задания' }
        ];
      } else if (level === 'a2') {
        return [
          { id: 1, title: 'Чтение писем и сообщений', description: 'Прочитайте личные письма и сообщения' },
          { id: 2, title: 'Понимание информационных текстов', description: 'Прочитайте информационные тексты и ответьте на вопросы' }
        ];
      }
    } else if (part === 'listening') {
      if (level === 'a1') {
        return [
          { id: 1, title: 'Понимание простых диалогов', description: 'Прослушайте диалоги и выберите правильный ответ' },
          { id: 2, title: 'Понимание объявлений', description: 'Прослушайте объявления и ответьте на вопросы' }
        ];
      } else if (level === 'a2') {
        return [
          { id: 1, title: 'Понимание разговоров', description: 'Прослушайте разговоры и выберите правильный ответ' },
          { id: 2, title: 'Понимание сообщений', description: 'Прослушайте сообщения и ответьте на вопросы' }
        ];
      }
    } else if (part === 'writing') {
      if (level === 'a1') {
        return [
          { id: 1, title: 'Заполнение формы', description: 'Заполните простую форму с личной информацией' },
          { id: 2, title: 'Написание короткого сообщения', description: 'Напишите короткое сообщение (25-35 слов)' }
        ];
      } else if (level === 'a2') {
        return [
          { id: 1, title: 'Написание личного письма', description: 'Напишите личное письмо (60-70 слов)' },
          { id: 2, title: 'Описание события', description: 'Напишите описание события или ситуации (60-70 слов)' }
        ];
      }
    } else if (part === 'speaking') {
      if (level === 'a1') {
        return [
          { id: 1, title: 'Представление себя', description: 'Расскажите о себе и ответьте на простые вопросы' },
          { id: 2, title: 'Диалог', description: 'Участвуйте в простом диалоге на повседневные темы' }
        ];
      } else if (level === 'a2') {
        return [
          { id: 1, title: 'Монолог', description: 'Подготовьте короткий монолог на заданную тему' },
          { id: 2, title: 'Диалог с экзаменатором', description: 'Участвуйте в диалоге с экзаменатором' }
        ];
      }
    } else if (part === 'complete') {
      if (level === 'a1') {
        return [
          { id: 1, title: 'Полный тест DELE A1', description: 'Комплексный тест, включающий все части экзамена DELE A1' },
          { id: 2, title: 'Пробный экзамен DELE A1', description: 'Симуляция реального экзамена DELE A1 с ограничением по времени' }
        ];
      } else if (level === 'a2') {
        return [
          { id: 1, title: 'Полный тест DELE A2', description: 'Комплексный тест, включающий все части экзамена DELE A2' },
          { id: 2, title: 'Пробный экзамен DELE A2', description: 'Симуляция реального экзамена DELE A2 с ограничением по времени' }
        ];
      }
    }
    
    // Для других уровней и частей возвращаем заглушку
    return [
      { id: 1, title: 'Задание 1', description: 'Описание задания 1' },
      { id: 2, title: 'Задание 2', description: 'Описание задания 2' }
    ];
  };
  
  const exercises = getExercises();
  
  return (
    <div className="dele-exam-content-page">
      <div 
        className="part-header"
        style={{ backgroundColor: currentLevel.color }}
      >
        <h2>{currentPart.title}</h2>
        <p>{currentPart.description}</p>
      </div>
      
      <div className="exercises-container">
        {exercises.map((exercise, index) => (
          <div 
            key={exercise.id} 
            className="exercise-card"
            style={{ 
              borderColor: currentLevel.color,
              '--index': index
            }}
          >
            <h3 className="exercise-title" style={{ color: currentLevel.color }}>{exercise.title}</h3>
            <p className="exercise-description">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleExamContent;