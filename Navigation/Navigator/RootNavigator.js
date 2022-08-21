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

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MessageTab = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="발송 예정"
                component={Message}
            />
            <TopTab.Screen
                name="발송 완료"
                component={MessageEnd}
            />
        </TopTab.Navigator>
    )
}

const AlarmTab = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="처리 예정"
                component={Alarm}
            />
            <TopTab.Screen
                name="처리 완료"
                component={AlarmEnd}
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