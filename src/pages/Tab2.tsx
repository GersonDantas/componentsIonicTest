import React, { useState } from 'react';
import { camera, close, trash } from 'ionicons/icons';
import {
  IonContent,
  IonFab,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet
} from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import MyIonToggleTheme from '../components/MyIonToggleTheme';

const Tab2: React.FC = () => {
  const [photoDelete, setPhotoDelete] = useState<UserPhoto>();
  const { takePhoto, photos, deletePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Jesus</IonTitle>
          <MyIonToggleTheme />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Galery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map(photo => (
              <IonCol>
                <IonImg
                  src={photo.webviewPath}
                  onClick={() => setPhotoDelete(photo)}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={!!photoDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoDelete) {
                  deletePhoto(photoDelete);
                  setPhotoDelete(undefined);
                }
              }
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel'
            }
          ]}
          onDidDismiss={() => setPhotoDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
