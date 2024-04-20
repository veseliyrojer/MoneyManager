import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Settings from '../Screens/Settings';
import History from '../Screens/History';
import TopList from '../components/TopList';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="TopList" component={TopList} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default MyDrawer