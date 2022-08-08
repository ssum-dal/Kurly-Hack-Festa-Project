import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ChattingPresenter from "./ChattingPresenter";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator swipeEnabled={false}>
            <Stack.Screen
                name="ChattingPresenter"
                component={ChattingPresenter}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};