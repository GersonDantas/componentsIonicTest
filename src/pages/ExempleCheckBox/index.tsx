import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider
} from '@ionic/react';
import './styles.css'

const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

const ExempleCheckBox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CHeckboxExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>default checkbox</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonCheckbox
              className="my-ion-checkbox"
              checked={checked}
              onIonChange={e => setChecked(e.detail.checked)}
            />
          </IonItem>
          <IonItemDivider>default checkbox</IonItemDivider>
          <IonItem>
            <IonCheckbox slot="end" disabled />
          </IonItem>
          <IonItemDivider>default checkbox</IonItemDivider>

          <IonItem>
            <IonCheckbox
              slot="end"
              checked
              className="my-ion-checkbox"
              indeterminate
              color="primary"
            />
            <IonCheckbox slot="end" checked color="secondary" />
            <IonCheckbox slot="end" checked color="danger" />
            <IonCheckbox slot="end" checked mode="md" color="light" />
            <IonCheckbox slot="end" className="mark" color="dark" />
          </IonItem>

          <IonItemDivider>default checkbox</IonItemDivider>

          {checkboxList.map(({ val, isChecked }) => (
            <IonItem>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ExempleCheckBox;
