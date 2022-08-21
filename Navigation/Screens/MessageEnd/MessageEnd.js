import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MessageEndPresenter from "./MessageEndPresenter";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MessageEndPresenter"
                component={MessageEndPresenter}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};