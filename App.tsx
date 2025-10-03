import React from 'react';
import Card from './components/Card';
import LaunchButton from './components/LaunchButton';
import AnarchyIcon from './components/icons/AnarchyIcon';
import { WEB_UI_URL } from './constants';

const App: React.FC = () => {
  const handleLaunch = () => {
    window.open(WEB_UI_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 font-sans"
    >
      <Card>
        <div className="flex flex-col items-center text-center py-8">
          <AnarchyIcon className="w-16 h-16 mb-4 text-orange-400" />

          <h1 className="text-4xl font-bold text-slate-100 mb-8">
            HoodGPT
          </h1>

          <LaunchButton onClick={handleLaunch}>
            Enter
          </LaunchButton>
        </div>
      </Card>
    </main>
  );
};

export default App;