import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import MessagePresenter from "./MessagePresenter";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MessagePresenter"
                component={MessagePresenter}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};