import {Country} from '../../../utils/types';

export type SignUpFormData = {
  email: string;
  password: string;
  repeatPassword: string;
  partnerCode?: string;
  region: Country;
  terms: boolean;
};
