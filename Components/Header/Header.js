import React from "react";
import { View, Text, StyleSheet } from "react-native";

const s = StyleSheet.create({
    HeaderView: {
        alignItems: 'center',
        backgroundColor: '#5F0080',
        paddingVertical: '4%'
    },
    TextView: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});

function Header({ title }) {
    return (
        <View style={s.HeaderView}>
            <Text style={s.TextView}>{title}</Text>
        </View>
    );
}

export default Header;