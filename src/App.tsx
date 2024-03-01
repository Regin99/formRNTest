import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import RootNavigator from './routes/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={{flex: 1}}>
      <RootNavigator />
    </GestureHandlerRootView>
  </QueryClientProvider>
);
