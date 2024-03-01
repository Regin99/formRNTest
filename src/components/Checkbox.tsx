import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ReactNode} from 'react';
import {Controller} from 'react-hook-form';

import {ErrorText} from '.';
import {Check} from '../assets/icons';
import {ContolledComponentProps} from '../utils/types';

type CheckboxProps = {
  isChecked: boolean;
  onPress: () => void;
  children?: ReactNode;
  error?: string;
};

export const Checkbox = ({
  isChecked,
  onPress,
  children,
  error,
}: CheckboxProps) => (
  <>
    <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
      <View style={styles.container}>{isChecked && <Check />}</View>
      {children}
    </TouchableOpacity>
    {error && <ErrorText>{error}</ErrorText>}
  </>
);

type ControlledCheckboxProps = ContolledComponentProps &
  Omit<CheckboxProps, 'onPress' | 'isChecked'>;

export const ControlledCheckbox = ({
  control,
  name,
  children,
  ...rest
}: ControlledCheckboxProps) => (
  <Controller
    control={control}
    name={name}
    render={({field: {onChange, value}, fieldState: {error}}) => (
      <>
        <Checkbox
          isChecked={value}
          onPress={() => onChange(!value)}
          error={error?.message}
          {...rest}>
          {children}
        </Checkbox>
      </>
    )}
  />
);

const styles = StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  container: {
    backgroundColor: '#fff',
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
});
