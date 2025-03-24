import React from 'react';
import { useParams } from 'react-router-dom';
import AdminLevelsGrid from './AdminLevelsGrid';

const sectionTitles = {
  grammar: 'Грамматика',
  reading: 'Чтение',
  listening: 'Аудирование',
  writing: 'Письмо',
  speaking: 'Говорение',
  chat: 'Чат'
};

const AdminSectionLevels = () => {
  const { section } = useParams();

  return (
    <div className="admin-section-levels">
      <h1>{sectionTitles[section] || 'Раздел не найден'}</h1>
      <AdminLevelsGrid section={section} />
    </div>
  );
};

export default AdminSectionLevels;