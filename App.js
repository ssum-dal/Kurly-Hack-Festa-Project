import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Navigation/Navigator/RootNavigator";
import { NotificationListener, requestUserPermission } from "./src/utils/pushnotification_helper";
import { Provider } from 'react-redux';
import appStore from './Context/appStore';

const App = () => {
	useEffect(()=> {
		requestUserPermission();
		NotificationListener();
	}, []);

	return (
		<Provider store={appStore}>
	    	<NavigationContainer>
        	    <RootNavigator />
        	</NavigationContainer>
		</Provider>
  	)
}

export default App;
