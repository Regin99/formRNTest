import {StyleSheet, Text, View} from 'react-native';
import {ReactNode} from 'react';
import {FieldError} from 'react-hook-form';

import {ValidationHint} from '../utils/types';

type HintTextProps = {
  isActive?: boolean;
  isError: boolean;
  children: ReactNode;
};

export const HintText = ({isActive, isError, children}: HintTextProps) => (
  <Text style={{color: isActive ? (isError ? 'red' : 'green') : '#333333'}}>
    {children}
  </Text>
);

type HintsProps = {
  hints: ValidationHint[];
  isActive?: boolean;
  error?: FieldError;
};

export const HintsSection = ({hints, isActive, error}: HintsProps) => {
  const types = error?.types || {};
  return (
    <View style={styles.sectionContainer}>
      {hints.map((hint, index) => (
        <HintText key={index} isActive={isActive} isError={!!types[hint.rule]}>
          {hint.text}
        </HintText>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    gap: 8,
  },
});
