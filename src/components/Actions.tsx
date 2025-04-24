
import React from 'react';
import SuggestedActionsList from './SuggestedActionsList';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '@/types';

const Actions = () => {
  const navigate = useNavigate();
  
  const handleSelectAction = (category: CategoryType) => {
    navigate(`/action/${category}`);
  };

  return <SuggestedActionsList onSelectAction={handleSelectAction} />;
};

export default Actions;