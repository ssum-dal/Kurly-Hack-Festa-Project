import React from "react";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import AlarmPresenter from "./AlarmPresenter";
import DetailsPresenter from "./DetailsPresenter";

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator 
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen
                name="AlarmPresenter"
                component={AlarmPresenter}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DetailsPresenter"
                children={({route}) => (
                    <DetailsPresenter
                        trakingNum={route.params.trakingNum}
                        name={route.params.name}
                        address={route.params.address}
                        category={route.params.category}
                        detail={route.params.detail}
                        uri={route.params.uri}
                    />
                )}
                options={{headerShown: false, gestureEnabled: true}}
            />
        </Stack.Navigator>
    );
};