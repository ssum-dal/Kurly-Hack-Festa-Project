import React from "react";
import { View, Text, StyleSheet } from "react-native";

const s = StyleSheet.create({
    InfoView: {
    },
    TextView: {
        flexDirection: 'row'
    },
    Category: {
        fontSize: 15,
        color: '#000000',
    },
    TextStyle: {
        flex: 1,
        fontSize: 15,
        color: '#666666',
        marginLeft: '3%'
    }
});

function DeliveryInfoNotTouchable({ trackingNum, name, address, category}) {
    return (
        <View style={s.InfoView}>
            <View style={s.TextView}>
                <Text style={s.Category}>받는분  |</Text>
                <Text style={s.TextStyle}>{name}</Text>
            </View>
            <View style={s.TextView}>
                <Text style={s.Category}>배송지  |</Text>
                <Text style={s.TextStyle}>{address}</Text>
            </View>
            <View style={s.TextView}>
                <Text style={s.Category}>[상세유형]</Text>
                <Text style={s.TextStyle}>{category}</Text>
            </View>
        </View>
    );
}

export default DeliveryInfoNotTouchable;