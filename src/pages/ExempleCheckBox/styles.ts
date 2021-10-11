import { IonCheckbox } from '@ionic/react';
import styled from 'styled-components';

export const MyCheckBox = styled(IonCheckbox)`
  border-style: groove;
  --border-style: dotted;
  --border-radius: 50%;
  --size: 50px;
  --transition: 2s;
  --checkmark-color: var(--ion-color-primary);
  --background-checked: var(--ion-color-tertiary);
`;
