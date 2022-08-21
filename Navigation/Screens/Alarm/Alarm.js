import React from "react";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import AlarmPresenter from "./AlarmPresenter";

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AlarmPresenter"
                component={AlarmPresenter}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};