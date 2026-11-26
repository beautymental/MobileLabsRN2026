import React from 'react';
import {Pressable,Text,StyleSheet} from 'react-native';
export const ROW_HEIGHT=148;
export default React.memo(function NewsCard({item,onOpen}){return <Pressable onPress={()=>onOpen(item.id)} style={s.card}><Text style={s.category}>{item.category.toUpperCase()} · {item.id}</Text><Text numberOfLines={2} style={s.title}>{item.title}</Text><Text numberOfLines={1} style={s.summary}>{item.summary}</Text></Pressable>});
const s=StyleSheet.create({card:{height:136,marginBottom:12,marginHorizontal:16,padding:16,backgroundColor:'white',borderRadius:14,borderWidth:1,borderColor:'#e2e8f0',gap:6},category:{fontSize:12,color:'#2563eb',fontWeight:'700'},title:{fontSize:19,fontWeight:'700',color:'#14243b'},summary:{color:'#64748b'}});
