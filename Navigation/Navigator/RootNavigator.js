import React from "react";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import Message from "../Screens/Message/Message";
import MessageEnd from "../Screens/MessageEnd/MessageEnd";
import Alarm from "../Screens/Alarm/Alarm";
import Chatting from "../Screens/Chatting/Chatting";
import AlarmEnd from "../Screens/AlarmEnd/AlarmEnd";
import Details from "../Screens/Details/Details";

import LogIn from "../Screens/LogIn/LogIn";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MessageTab = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { 
                    fontWeight: 'bold' 
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#5F0080',
                  },
            }}
        >
            <TopTab.Screen
                name="발송 예정"
                component={Message}
                options={{
                    tabBarActiveTintColor: '#5F0080',
                    tabBarInactiveTintColor: '#000000'
                }}
            />
            <TopTab.Screen
                name="발송 완료"
                component={MessageEnd}
                options={{
                    tabBarActiveTintColor: '#5F0080',
                    tabBarInactiveTintColor: '#000000'
                }}
            />
        </TopTab.Navigator>
    )
}

const AlarmTab = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { 
                    fontWeight: 'bold' 
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#5F0080',
                  },
            }}
        >
            <TopTab.Screen
                name="처리 예정"
                component={Alarm}
                options={{
                    tabBarActiveTintColor: '#5F0080',
                    tabBarInactiveTintColor: '#000000'
                }}
            />
            <TopTab.Screen
                name="처리 완료"
                component={AlarmEnd}
                options={{
                    tabBarActiveTintColor: '#5F0080',
                    tabBarInactiveTintColor: '#000000'
                }}
            />
        </TopTab.Navigator>
    )
}

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Message"
                component={MessageTab}
                options={{
                    title: '메시지',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#5F0080',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 16
                    },
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                            style={{ color: focused ? "#5F0080" : "#404040" }}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Alarm"
                component={AlarmTab}
                options={{
                    title: '배송불편사항',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#5F0080',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 16
                    },
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "notifications" : "notifications-outline"}
                            style={{ color: focused ? "#5F0080" : "#404040" }}
                            size={30}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <RootStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <RootStack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{headerShown: false}}
            />
            <RootStack.Screen
                name="Chatting"
                component={Chatting}
                options={{headerShown: false, gestureEnabled: true}}
            />
            <RootStack.Screen
                name="Details"
                component={Details}
                options={{headerShown: false, gestureEnabled: true}}
            />
        </RootStack.Navigator>
    )
}