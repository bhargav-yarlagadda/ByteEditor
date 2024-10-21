import React, { useContext } from 'react';
import { PlaygroundContext } from '../../context/PlaygroundContext';  // Fix: named import
import { Folder } from './Folder';

const LandingPage = () => {
  const { folders } = useContext(PlaygroundContext); 
  return (
      <div className='overflow-scroll' style={{ scrollbarWidth: "none" }}>
        {folders?.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))
        }
      </div>
    );

};
export default LandingPage;
