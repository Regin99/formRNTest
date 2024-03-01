import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {Dashboard, ErrorModal, SignUp} from '../features/SignUp/screens';

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen
        name="ErrorModal"
        component={ErrorModal}
        options={{presentation: 'transparentModal', animation: 'fade'}}
      />
      <AuthStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true}}
      />
    </AuthStack.Navigator>
  );
};
