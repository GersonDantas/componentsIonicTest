/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  IonAvatar,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonRippleEffect
} from '@ionic/react';
import { Virtuoso } from 'react-virtuoso';
import { MyCard } from './styles';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={10}
          itemContent={index => {
            return (
              <div style={{ height: '56px' }}>
                <IonItem>
                  <IonAvatar slot="start">
                    <img src="https://picsum.photos/seed/picsum/40/40" />
                  </IonAvatar>
                  <IonLabel>{index}</IonLabel>
                </IonItem>
              </div>
            );
          }}
        />
        <IonItem>
          <MyCard>
            <div className="ion-activatable ripple-parent">
              A plain div with a bounded ripple effect
              {/* para adicionar o efeito cascata */}
              <IonRippleEffect></IonRippleEffect>
            </div>
          </MyCard>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
