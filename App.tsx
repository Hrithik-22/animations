import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './app/navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}

