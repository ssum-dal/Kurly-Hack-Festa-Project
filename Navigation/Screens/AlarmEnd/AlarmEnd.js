import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import AlarmEndPresenter from "./AlarmEndPresenter";

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AlarmEndPresenter"
                component={AlarmEndPresenter}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};