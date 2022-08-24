import React, {useEffect} from "react";
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
import { useSelector } from 'react-redux';
import axios from "axios";
import { mainURL } from "../../Context/Route";
import { useDispatch } from 'react-redux';
import { requestAlarm } from "../../Context/Reducer/badgeReducer";

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
    const num = useSelector(state => state.badge.badge);
    
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
                            size={35}
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
                    tabBarBadge: num > 0 ? num : null,
                    tabBarBadgeStyle: {
                        backgroundColor: '#5F0080'
                    },
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? "notifications" : "notifications-outline"}
                            style={{ color: focused ? "#5F0080" : "#404040" }}
                            size={35}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function RootNavigator() {
    const dispatch = useDispatch();
	
    useEffect(()=> {
		const getData = async() => {
            const url = `${mainURL}/delivery/cs/todo`;

            await axios.get(url).then((result) => {
                const response = JSON.parse(result.request._response);
                dispatch(requestAlarm(response.length));
            })
        }
        getData();
    }, []);

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