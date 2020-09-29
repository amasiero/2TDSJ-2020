import uuid from 'react-native-uuid';

import capitalize from './capitalize';

const mapContact = (contact) => {
  const {name, picture, phone, cell, email} = contact;

  return {
    id: uuid.v4(),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // Math.random gera numeros aleatorios entre 0 e 1
  };
};

export const fetchContacts = async () => {
  const response = await fetch(
    'https://randomuser.me/api/?results=100&seed=fullstackio&nat=br',
  );
  const contactData = await response.json();

  return contactData.results.map(mapContact);
};

export const fetchUserContact = async () => {
  const response = await fetch(
    'https://randomuser.me/api/?seed=fullstackio&nat=br',
  );
  const userData = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/?nat=br');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};
