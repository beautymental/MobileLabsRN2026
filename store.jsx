import React,{createContext,useContext,useState} from 'react';
const C=createContext(); export const useStore=()=>useContext(C);
export const statuses=['Опубліковано','Чернетка','На перевірці'];
export const categories=['Технології','Спорт','Культура'];
const date=()=>new Date().toLocaleString('uk-UA');
export function Provider({children}){
 const [auth,setAuth]=useState(false);
 const [news,setNews]=useState(()=>Array.from({length:60},(_,i)=>({id:String(i+1),title:`Новина ${i+1}`,category:categories[i%3],status:statuses[i%3],image:'https://picsum.photos/seed/news'+i+'/640/360',body:`Текст новини ${i+1}. Огляд актуальних подій.`,date:date()})));
 const [users,setUsers]=useState(()=>Array.from({length:60},(_,i)=>({id:String(i+1),name:`Користувач ${i+1}`,email:`user${i+1}@example.com`,role:i%5===0?'Редактор':'Читач',status:i%4===0?'Заблокований':'Активний'})));
 const [logs,setLogs]=useState(()=>Array.from({length:60},(_,i)=>({id:`seed-${i}`,action:['Вхід у систему','Вихід із системи','Створення новини','Редагування новини','Видалення новини','Зміна статусу користувача'][i%6],date:date(),detail:'Демонстраційний запис'})));
 const [nf,setNf]=useState('Усі'),[uf,setUf]=useState('Усі');
 const log=(action,detail='')=>setLogs(a=>[{id:`${Date.now()}-${Math.random()}`,action,detail,date:date()},...a]);
 const login=()=>{setAuth(true);log('Вхід у систему')}; const logout=()=>{log('Вихід із системи');setAuth(false)};
 const save=(item)=>{const exists=!!item.id;setNews(a=>exists?a.map(n=>n.id===item.id?{...n,...item}:n):[{...item,id:String(Date.now()),date:date()},...a]);log(exists?'Редагування новини':'Створення новини',item.title)};
 const remove=(id)=>{setNews(a=>a.filter(n=>n.id!==id));log('Видалення новини',id)};
 const toggle=(u)=>{const status=u.status==='Активний'?'Заблокований':'Активний';setUsers(a=>a.map(x=>x.id===u.id?{...x,status}:x));log('Зміна статусу користувача',`${u.name}: ${status}`)};
 return <C.Provider value={{auth,login,logout,news,users,logs,save,remove,toggle,nf,setNf,uf,setUf}}>{children}</C.Provider>
}
