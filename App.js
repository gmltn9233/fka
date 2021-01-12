import * as React from 'react';
import { StyleSheet,Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function MypageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
        <View style={styles.title} >
        <Ionicons name={'arrow-back-outline'}size={30}/>
          <Text style={{fontSize:30},{alignItems:'center'}}>Mypage</Text>
        </View>
        <View style={{width:"100%",borderBottomWidth:0.9,borderColor:'#444'}} />
        <View style={styles.user}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 100}}>
            <View style={{width: 100, height: 100}} >
              <Image source={require('./images/avatar.png')} style={{width: 100, height: 100}}/>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 30}}>닉네임</Text>
            <Text style={{color: 'gray', fontSize: 15}}>이름 / ID</Text>
            <Text style={{color: 'gray', fontSize: 15}}>학교이름</Text>
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./images/list.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./images/chat.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>댓글 단 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./images/star.png')} style={{width: 30, height: 30}}/>
            <Text style={{marginLeft: 5}}>찜</Text>
          </View>
        </View>
      </View>
        <View style={styles.content}>
          <View style={styles.book}>
            <Image style={styles.image}
            source={require('C:/Users/pc10/Desktop/expo/fka/images/c.png')}/>
            <View style={{marginLeft:35,width:"85%",borderBottomWidth:0.9,borderColor:'#444'}} />
            <Image style={styles.image}
            source={require('C:/Users/pc10/Desktop/expo/fka/images/image2.png')}/>
            <View style={{marginLeft:35,width:"85%",borderBottomWidth:0.9,borderColor:'#444'}}/>
          </View>
        </View>
    </View>
  );
}

function PlusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Plus!</Text>
    </View>
  );
}
function notiScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>알림</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mypage" component={MypageScreen} />
      <Tab.Screen name="Plus" component={PlusScreen} />
      <Tab.Screen name="알림" component={notiScreen} />
    </Tab.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Mypage') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'Plus') {
              iconName = focused 
              ? 'add-circle-outline' 
              : 'add-circle-outline';
            }
            else if (route.name === '알림') {
              iconName = focused 
              ? 'notifications-outline' 
              : 'notifications-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Plus" component={PlusScreen} />
        <Tab.Screen name="알림" component={notiScreen} />
        <Tab.Screen name="Mypage" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    flexDirection: 'row',
    width:'100%',
    height:'18%',
    alignItems:'center'
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
  booK:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10
  },
  image:{
    margin:15,
    width:100,
    height:150,
  },
  user:{
    margin:15
  }
})