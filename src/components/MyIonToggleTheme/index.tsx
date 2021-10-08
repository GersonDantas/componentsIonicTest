import React from 'react';
import { IonIcon, IonToggle } from '@ionic/react';
import { moon } from 'ionicons/icons';
import './styles.css';

const MyIonToggleThem: React.FC = () => {
  return (
    <>
      <IonIcon
        className="component-icon  component-icon-dark"
        slot="end"
        icon={moon}
      />
      <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkTheme} />
    </>
  );
};

const toggleDarkTheme = () => {
  document.body.classList.toggle('dark');
};

export default MyIonToggleThem;
