import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ReactNode} from 'react';

type ScreenProps = {
  children: ReactNode;
};

type ModalScreenProps = {
  onPress: () => void;
} & ScreenProps;

export const Screen = ({children}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>{children}</View>
    </SafeAreaView>
  );
};

export const ModalScreen = ({onPress, children}: ModalScreenProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[StyleSheet.absoluteFill, styles.modalScreenContainer]}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  modalScreenContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
});
