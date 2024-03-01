import {Control, FieldValue} from 'react-hook-form';

export type Country = {
  id: number;
  name: string;
  alfa2: string;
  alfa3: string;
  phoneCode: string;
};

export type ContolledComponentProps = {
  name: string;
  control: Control<FieldValue<any>>;
};

export type ValidationHint = {
  text: string;
  rule: 'required' | 'min' | 'max' | 'combination' | 'uppercase' | 'lowercase';
};
