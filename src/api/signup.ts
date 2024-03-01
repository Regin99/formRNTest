import ky from 'ky';
import {SignUpFormData} from '../features/SignUp/utils/types';
import {API_URL} from '@env';

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
  return ky.post(`${API_URL}/api.user.user.register`, {
    json: body,
  });
};
