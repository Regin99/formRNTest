import {yupResolver} from '@hookform/resolvers/yup';
import {useQuery} from '@tanstack/react-query';
import {Controller, useForm} from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect} from 'react';

import {
  Button,
  ControlledCheckbox,
  ControlledInput,
  Link,
} from '../../../components';
import {PASSWORD_HINTS, SignUpFormData, signUpSchema} from '../utils';
import {getSnapshot} from '../../../api';
import {RegionDropDown} from '../../../components/RegionDropDown';

export type FormProps = {
  onSubmit: (data: SignUpFormData) => void;
  onError: (errorMessage: string) => void;
  isLoading: boolean;
};
export const Form = ({onSubmit, onError, isLoading}: FormProps) => {
  const {control, setValue, handleSubmit} = useForm<SignUpFormData>({
    defaultValues: {
      region: {},
      email: '',
      password: '',
      repeatPassword: '',
      partnerCode: '',
      terms: false,
    },
    resolver: yupResolver<SignUpFormData>(signUpSchema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const {
    data: snapshotData,
    error: queryError,
    isError,
  } = useQuery({
    queryKey: ['snapshot'],
    queryFn: getSnapshot,
  });

  useEffect(() => {
    if (snapshotData?.country) {
      setValue('region', snapshotData.country);
    }
  }, [snapshotData, setValue]);

  useEffect(() => {
    if (isError) {
      onError(queryError?.message);
    }
  }, [isError, queryError, onError]);

  return (
    <View style={styles.formContainer}>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainer}>
          <Controller
            control={control}
            name="region"
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <RegionDropDown value={value} onChange={onChange} error={error} />
            )}
          />
          <ControlledInput
            label="Email"
            control={control}
            name="email"
            placeholder="Enter Your Email"
          />
          <ControlledInput
            label="Password"
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            hints={PASSWORD_HINTS}
          />
          <ControlledInput
            control={control}
            name="repeatPassword"
            placeholder="Repeat password"
            label="Repeat Password"
            type="password"
          />
          <ControlledInput
            control={control}
            name="partnerCode"
            placeholder="Enter your partner code"
            label="Partner Code (optional)"
            optional
          />
          <ControlledCheckbox control={control} name="terms">
            <Text style={styles.termsText}>
              I confirm that I'm not a U.S. person for tax purposes and agree
              with the{' '}
              <Link
                url="https://valetax.com/wp-content/uploads/terms-business_V4_270224_mauritius.pdf)"
                text="Client Agreement"
              />
            </Text>
          </ControlledCheckbox>
          <Button onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Button>
          <Text style={styles.loginText}>
            Already Have an account?{' '}
            <Text style={styles.loginButton}>Login</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  contentContainer: {gap: 16},
  loginText: {
    color: '#333333',
  },
  loginButton: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  termsText: {fontWeight: 'bold', flex: 1},
  buttonText: {color: 'white'},
});
