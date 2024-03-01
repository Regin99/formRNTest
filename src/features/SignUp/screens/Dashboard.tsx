import {StyleSheet, Text} from 'react-native';
import {Screen} from '../../../components';
import {RootStackScreenProps} from '../../../routes/types';

export const Dashboard = ({}: RootStackScreenProps<'Dashboard'>) => {
  return (
    <Screen>
      <Text style={styles.title}>Dashboard</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
