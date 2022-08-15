import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import NavigationRouter from './src/Navigation';

AppRegistry.registerComponent(appName, () => NavigationRouter);
