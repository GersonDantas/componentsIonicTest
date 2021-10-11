import React from 'react';

interface FetchDataItemsProps {
  reset?: boolean;
  filter?: string;
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  setDisableInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>;
  items: string[];
}

export async function fetchData({
  reset,
  filter,
  setItems,
  setDisableInfiniteScroll,
  items
}: FetchDataItemsProps) {
  const dogs: string[] = reset ? [] : items;
  const url: string = filter
    ? `https://dog.ceo/api/breed/${filter}/images/random/10`
    : 'https://dog.ceo/api/breeds/image/random/10';
  const res: Response = await fetch(url);
  res
    .json()
    .then(async res => {
      if (res && res.message && res.message.length > 0) {
        setItems([...items, ...res.message.reverse]);

        setDisableInfiniteScroll(res.message.length < 5);
      } else {
        setDisableInfiniteScroll(true);
      }
    })
    .catch(err => console.error(err));
}
