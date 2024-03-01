import {Text} from 'react-native';
import {RootStackScreenProps} from '../../../routes/types';
import {ModalScreen} from '../../../components';

export const ErrorModal = ({
  navigation,
  route: {
    params: {errorMessage},
  },
}: RootStackScreenProps<'ErrorModal'>) => {
  return (
    <ModalScreen onPress={navigation.goBack}>
      <Text>{errorMessage}</Text>
    </ModalScreen>
  );
};
