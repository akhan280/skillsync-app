import { useBoundStore } from '@/stores/bound.store';
import React from 'react';
import { useEffect } from 'react';

const useSkillData = () => {
  const localResume = useBoundStore();
  const localSkills = localResume.skills;

  const [formatted, setFormatted] = React.useState("");
  
  useEffect(() => {
    console.log('In sendProfileData');
    const content = {
      localSkills
    };

    const bodyContent = JSON.stringify({
        content: `content`,
    });
      
    fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    })
    .then((res) => res.text())
    .then((data) => {
      console.log('Got /api/skills', data);
      setFormatted(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);
  
  return formatted;

};
  
export default useSkillData;
    