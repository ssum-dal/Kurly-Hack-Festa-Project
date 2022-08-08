import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Message from "../Screens/Message/Message";
import Alarm from "../Screens/Alarm/Alarm";
import Chatting from "../Screens/Chatting/Chatting";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="chatbox-ellipses-outline"
                            style={{ color: focused ? "#00B386" : "#404040" }}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Alarm"
                component={Alarm}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="notifications"
                            style={{ color: focused ? "#00B386" : "#404040" }}
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
        <RootStack.Navigator>
            <RootStack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{headerShown: false}}
            />
            <RootStack.Screen
                name="Chatting"
                component={Chatting}
                options={{headerShown: false}}
            />
        </RootStack.Navigator>
    )
}