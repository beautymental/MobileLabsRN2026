import {Redirect} from 'expo-router';
import {Drawer} from 'expo-router/drawer';
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import {useAuth} from '../../context/AuthContext';
export default function Layout(){const {isAuthenticated,logout}=useAuth();if(!isAuthenticated)return <Redirect href="/login"/>;return <Drawer drawerContent={props=><DrawerContentScrollView {...props}><DrawerItemList {...props}/><DrawerItem label="Вийти" onPress={logout}/></DrawerContentScrollView>} screenOptions={{headerStyle:{backgroundColor:'#fff'},headerTintColor:'#14243b',drawerActiveTintColor:'#2563eb'}}><Drawer.Screen name="(news)" options={{title:'Новини'}}/><Drawer.Screen name="faq" options={{title:'Довідковий центр'}}/></Drawer>}
