import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ChattingPresenter from "./ChattingPresenter";

const Stack = createStackNavigator();

export default ({route}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChattingPresenter"
                children={() => (
                    <ChattingPresenter
                        name={route.params.name}
                        trackingNum={route.params.trackingNum}
                        orderNum={route.params.orderNum}
                        isCs={route.params.isCs}
                        csId={route.params.csId}
                        isDone={route.params.isDone}
                    />
                )}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};