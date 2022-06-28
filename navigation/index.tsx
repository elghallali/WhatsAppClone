/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome, FontAwesome5, Octicons, MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, Image, Text } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerHideShadow: true,
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator}
      options={{
        title: 'WhatsApp',
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
            <Octicons name="search" size={22} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>
        )
      }}
      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen}
      options={({route}) => ({
        headerTitle: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            alignItems: 'center',
          }}>
            <Image source={{uri: route.params.image}} style={{
              width: 50,
              height: 50,
              marginRight: 10,
              borderRadius: 50,}}/>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white'
              }}>{route.params.name}</Text>
          </View>
        ),
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
            <FontAwesome5 name="video" size={22} color={'white'} />
            <MaterialIcons name="call" size={22} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>
        ),
      })} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const MainTab = createMaterialTopTabNavigator<RootTabParamList>();
const MainTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        tabBarLabelStyle:{
          fontWeight: 'bold',
        },
        tabBarShowIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({color}) => <Fontisto name='camera' color={color} size={18}/>,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}

      />
      <MainTab.Screen
        name="Status"
        component={TabOneScreen}

      />
      <MainTab.Screen
        name="Calls"
        component={TabOneScreen}

      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
export default Navigation;
