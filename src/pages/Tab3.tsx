import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react'
import { Link } from 'react-router-dom'
import './Tab3.css'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem routerLink="/tab1">
            <IonLabel>Tab1</IonLabel>
          </IonItem>
          <IonItem>
            <Link to="/tab2">Tab2</Link>
          </IonItem>
          {isPlatform('capacitor') && <IonItem>
            <Link to="/tab2">Tab2</Link>
          </IonItem>}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab3
