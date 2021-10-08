import { IonHeader, IonToolbar } from '@ionic/react';
import React, { FormEvent, useState } from 'react';

import { Container, MyIonDateTime, MyIonItem } from './styles';

const PageDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    '2012-12-15T13:47:20.789'
  );
  return (
    <Container>
      <IonHeader>
        <IonToolbar>IonDateTime</IonToolbar>
      </IonHeader>

      <MyIonItem>
        <MyIonDateTime
          displayFormat="DDD, DD de MMMM de YYYY"
          value={selectedDate}
          onChange={(e: any) => setSelectedDate(e.detail.value!)}
        />
      </MyIonItem>
      <MyIonItem>
        <MyIonDateTime
        displayFormat="DDD, DD de MMMM de YYYY"
        pickerFormat="DD MM YYYY"
        value={selectedDate}
        onChange={(e: any) => setSelectedDate(e.detail.value!)}
        ></MyIonDateTime>
      </MyIonItem>
      <MyIonItem>
        <MyIonDateTime></MyIonDateTime>
      </MyIonItem>
    </Container>
  );
};

export default PageDatePicker;
