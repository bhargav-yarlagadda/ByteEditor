import React, { useContext } from 'react';
import { PlaygroundContext } from '../../context/PlaygroundContext';  
import { Folder } from './Folder';

const LandingPage = () => {
  const { folders } = useContext(PlaygroundContext); 

  return (
    <div className="min-h-screen bg-gray-950  md:p-1">
      <div className="px-3 md:px-12 mx-auto overflow-auto">
        {folders?.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
