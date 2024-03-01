import * as yup from 'yup';

export const signUpSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .min(8)
    .max(15)
    .matches(/[A-Z]/, {name: 'lowercase'})
    .matches(/[a-z]/, {name: 'uppercase'})
    .matches(/[0-9!@#$%^&*().]/, {name: 'combination'}),
  repeatPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .min(1)
    .max(16),
  partnerCode: yup
    .string()
    .trim()
    .max(16, 'Maximum 16 characters')
    .matches(/^[a-zA-Z0-9]+$/, {
      message: 'Symbol disallowed',
      excludeEmptyString: true,
    }),
  terms: yup.boolean().required('Required').oneOf([true], 'Required'),
  region: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
    alfa2: yup.string().required('Required'),
    alfa3: yup.string().required('Required'),
    phoneCode: yup.string().required('Required'),
  }),
});
