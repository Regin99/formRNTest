import {Controller, FieldError} from 'react-hook-form';
import {ReactNode, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {ErrorText, HintsSection} from '.';
import {ChevronDown, ChevronUp, EyeClosed, EyeOpened} from '../assets/icons';
import {ContolledComponentProps, ValidationHint} from '../utils/types';

type InputProps = {
  label?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: 'password' | 'repeatPassword';
  optional?: boolean;
  icon?: ReactNode;
  error?: FieldError;
  hints?: ValidationHint[];
};

type ControlledInputProps = ContolledComponentProps &
  Omit<InputProps, 'value' | 'onChange'>;

export const Input = ({
  label,
  value,
  placeholder,
  onChange,
  type,
  optional,
  icon,
  error,
  hints,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(
    type === 'password' ? true : false,
  );
  const [showInput, setShowInput] = useState(optional ? false : true);
  return (
    <View style={styles.container}>
      {label && (
        <TouchableOpacity
          disabled={!optional}
          onPress={() => setShowInput(!showInput)}
          style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {optional && (showInput ? <ChevronUp /> : <ChevronDown />)}
        </TouchableOpacity>
      )}
      {showInput && (
        <View style={styles.inputContainer}>
          {icon && <View>{icon}</View>}
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#333333"
            value={value}
            secureTextEntry={showPassword}
            onChangeText={onChange}
          />
          {type === 'password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOpened /> : <EyeClosed />}
            </TouchableOpacity>
          )}
        </View>
      )}
      {error && (
        <ErrorText>
          {type === 'password' && hints
            ? error.types?.required
              ? error.message
              : ''
            : error.message}
        </ErrorText>
      )}
      {hints && (
        <HintsSection hints={hints} error={error} isActive={value.length > 0} />
      )}
    </View>
  );
};

export const ControlledInput = ({
  label,
  control,
  name,
  placeholder,
  ...rest
}: ControlledInputProps) => (
  <Controller
    control={control}
    render={({field: {onChange, value}, fieldState: {error}}) => (
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        {...rest}
      />
    )}
    name={name}
  />
);

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
  },
  inputContainer: {
    gap: 6,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  container: {gap: 6},
});
