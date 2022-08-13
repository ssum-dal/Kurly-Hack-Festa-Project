import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const s = StyleSheet.create({
    MenuContainer: {
        backgroundColor: '#F9F9F9',  
        borderTopColor: "#D3D3D3",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: 34,
        paddingVertical: 24,
    },
    Menu: {
        alignItems: 'center',
    }
})

export default function Menu() {
    return <View style={s.MenuContainer}>
                <TouchableOpacity>
                    <View style={s.Menu}>
                        <Icon name={"camera"} size={40}/>
                        <Text>카메라</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={s.Menu}>
                        <Icon name={"navigate"} size={40}/>
                        <Text>배송지연</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={s.Menu}>
                        <Icon name={"cart"} size={40}/>
                        <Text>배송완료</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={s.Menu}>
                        <Icon name={"pencil"} size={40}/>
                        <Text>직접입력</Text>
                    </View>
                </TouchableOpacity>
            </View>
}