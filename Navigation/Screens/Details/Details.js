import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DetailsPresenter from "./DetailsPresenter";

const Stack = createStackNavigator();

export default ({route}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DetailsPresenter"
                children={() => (
                    <DetailsPresenter
                        trakingNum={route.params.trakingNum}
                        name={route.params.name}
                        address={route.params.address}
                        category={route.params.category}
                        title={route.params.title}
                        detail={route.params.detail}
                        uri={route.params.uri}
                    />
                )}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};