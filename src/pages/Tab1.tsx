import {
  IonContent,
  IonButton,
  IonPage,
  useIonAlert,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonChip,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonList,
  IonItem
} from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alert</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonButton
            expand="block"
            onClick={() =>
              present({
                backdropDismiss: false,
                cssClass: 'my-custom-class alert-wrapper ',
                header: 'Alert',
                message: 'alert from hook',
                buttons: [
                  'Cancel',
                  {
                    text: 'Ok',
                    handler: d => console.log('ok pressed'),
                    cssClass: 'secondary'
                  }
                ],
                onDidDismiss: e => console.log('did dismiss')
              })
            }
          >
            Show Alert
          </IonButton>
          <IonButton
            expand="block"
            onClick={() => present('hello with params', [{ text: 'Ok' }])}
          >
            Show Alert using params
          </IonButton>
          <IonItem >
            <IonChip>
              <IonAvatar>
                <img
                  alt="avatar default"
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                />
              </IonAvatar>
              <IonLabel>Avatar Chip</IonLabel>
              <IonIcon icon={closeCircle}></IonIcon>
            </IonChip>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
