/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonCard,
  IonToolbar,
  useIonViewWillEnter,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
  IonLabel,
  IonSpinner,
  IonItem
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../core/service/api/apiDog';

const MyInfinitScroll: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  const [filter, setFilter] = useState<string | undefined>(undefined);

  const [disableInfiniteScroll, setDisableInfiniteScroll] =
    useState<boolean>(false);

  // useIonViewWillEnter(async () => {
  //   await fetchData({
  //     items: items,
  //     setDisableInfiniteScroll: setDisableInfiniteScroll,
  //     setItems: setItems
  //   });
  // });

  useEffect(() => {
    fetchData({
      reset: true,
      filter: filter,
      items: items,
      setDisableInfiniteScroll: setDisableInfiniteScroll,
      setItems: setItems
    });
  }, [filter]);

  async function searchNext($event: CustomEvent<void>) {
    await fetchData({
      items: items,
      setDisableInfiniteScroll: setDisableInfiniteScroll,
      setItems: setItems
    });

    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {items
          .map((item: string, i: number) => {
            return (
              <IonCard key={`${i}`}>
                <img src={item} alt={`${item}`} />
              </IonCard>
            );
          })}
        <IonInfiniteScroll
          threshold="100px"
          disabled={disableInfiniteScroll}
          onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}
          position="top"
        >
          <IonInfiniteScrollContent loadingSpinner="crescent"></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default MyInfinitScroll;
