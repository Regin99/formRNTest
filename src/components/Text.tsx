import {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type ErrorTextProps = {
  children: ReactNode;
};

export const ErrorText = ({children}: ErrorTextProps) => (
  <Text style={styles.errorText}>{children}</Text>
);

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
});
