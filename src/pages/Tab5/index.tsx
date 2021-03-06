import {
  IonBadge,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'

// import { Container } from './styles';

const Tab5: React.FC = () => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Badge test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonBadge>99</IonBadge>
      <IonItem>
        <IonBadge slot="start">11</IonBadge>
        <IonLabel>My Item</IonLabel>
        <IonBadge slot="end">22</IonBadge>
      </IonItem>

      <IonBadge   color="primary">11</IonBadge>
      <IonBadge color="secondary">22</IonBadge>
      <IonBadge color="tertiary">33</IonBadge>
      <IonBadge color="success">44</IonBadge>
      <IonBadge color="warning">55</IonBadge>
      <IonBadge color="danger">66</IonBadge>
      <IonBadge color="light">77</IonBadge>
      <IonBadge color="medium">88</IonBadge>
      <IonBadge color="dark">99</IonBadge>

    </IonContent>
  )
}

export default Tab5
