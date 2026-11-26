import {useLocalSearchParams,useRouter} from 'expo-router';
import {Text,ScrollView,Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {news} from '../../../data/news';
export default function Details(){const {id}=useLocalSearchParams();const router=useRouter();const item=news.find(n=>n.id===id);return <SafeAreaView edges={['bottom','left','right']} style={{flex:1,backgroundColor:'white'}}><ScrollView contentContainerStyle={{padding:24,gap:20}}><Pressable onPress={()=>router.canGoBack()?router.back():router.replace('/')}><Text style={{color:'#2563eb',fontSize:16}}>← До новин</Text></Pressable><Text style={{color:'#2563eb',fontWeight:'700'}}>{item?.category}</Text><Text style={{fontSize:30,fontWeight:'800',color:'#14243b'}}>{item?.title??'Новину не знайдено'}</Text><Text style={{fontSize:18,lineHeight:28,color:'#475569'}}>{item?.body}</Text></ScrollView></SafeAreaView>}
