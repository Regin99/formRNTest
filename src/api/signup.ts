import ky from 'ky';
import {SignUpFormData} from '../features/SignUp/utils/types';

const BASE_ENDPOINT = 'https://stage.valetax.com';

export const registration = (formData: SignUpFormData) => {
  const body = {
    email: formData.email,
    password: formData.password,
    firstName: '',
    lastName: '',
    phone: '',
    partnerCode: formData.partnerCode,
    nodeId: '',
    countryId: formData.region.id,
    schemaId: '',
  };
  return ky.post(`${BASE_ENDPOINT}/api.user.user.register`, {
    json: body,
  });
};
