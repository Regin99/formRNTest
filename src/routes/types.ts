import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  SignUp: undefined;
  ErrorModal: {errorMessage: string};
  //for test only
  Dashboard: undefined;
};

export type RootStackParamList = AuthStackParamList;

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
