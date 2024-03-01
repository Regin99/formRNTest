import {ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};
export const Button = ({
  children,
  onPress,
  isDisabled,
  isLoading,
}: ButtonProps) => (
  <TouchableOpacity
    style={[styles.buttonContainer, isDisabled && {opacity: 0.5}]}
    onPress={onPress}
    disabled={isDisabled || isLoading}>
    {isLoading ? <ActivityIndicator /> : children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
});
