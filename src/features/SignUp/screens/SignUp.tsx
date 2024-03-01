import {StyleSheet, Text, View} from 'react-native';
import {useCallback, useEffect} from 'react';
import {useMutation} from '@tanstack/react-query';
import {HTTPError, KyResponse} from 'ky';

import {Link, Screen} from '../../../components';
import {Logo} from '../../../assets/icons';
import {RootStackScreenProps} from '../../../routes/types';
import {Form} from '../components';
import {registration} from '../../../api/signup';
import {SignUpFormData} from '../utils/types';

export const SignUp = ({navigation}: RootStackScreenProps<'SignUp'>) => {
  const {
    mutate,
    data,
    error: queryError,
    isPending,
  } = useMutation<KyResponse, HTTPError, SignUpFormData>({
    mutationKey: ['signup'],
    mutationFn: (formData: SignUpFormData) => registration(formData),
  });

  const getErrorMessage = useCallback(
    async (error: HTTPError) => {
      if (error.response) {
        const errorJson = await error.response.json();
        navigation.navigate('ErrorModal', {
          errorMessage: errorJson.data.message,
        });
        return;
      } else {
        navigation.navigate('ErrorModal', {
          errorMessage: error.message,
        });
      }
    },
    [navigation],
  );

  useEffect(() => {
    if (queryError) {
      getErrorMessage(queryError);
    }
  }, [queryError, getErrorMessage]);

  useEffect(() => {
    if (data?.status === 200) {
      navigation.navigate('Dashboard');
    }
  }, [data, navigation]);

  return (
    <Screen>
      <Link url="https://valetax.com/">
        <Logo />
      </Link>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <Form
        onSubmit={formData => mutate(formData)}
        onError={errorMessage =>
          navigation.navigate('ErrorModal', {
            errorMessage,
          })
        }
        isLoading={isPending}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
