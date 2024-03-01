import ReactNativeBlobUtil from 'react-native-blob-util';
import ky from 'ky';
import {API_URL} from '@env';

import {Country} from '../utils/types';

type SnapshotResponse = {
  country: Country;
  countries: Country[];
};

export const getSnapshot = () =>
  ky.post(`${API_URL}/api.guest.country.getSnapshot`).json<SnapshotResponse>();

export const getFlagLogo = (countryId: number) =>
  ReactNativeBlobUtil.fetch(
    'POST',
    `${API_URL}/api.guest.country.getLogo?id=${countryId}`,
  );
