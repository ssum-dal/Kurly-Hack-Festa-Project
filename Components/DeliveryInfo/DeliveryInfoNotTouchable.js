import React from "react";
import { View, Text, StyleSheet } from "react-native";

const s = StyleSheet.create({
    InfoView: {
        backgroundColor: '#ffc0cb',
        marginVertical: '2%',
        marginHorizontal: '5%'
    },
    TrackingNumber: {
        fontWeight: 'bold',
        marginBottom: '2%'
    },
});

function DeliveryInfoNotTouchable({ trakingNum, name, address, category}) {
    return (
        <View style={s.InfoView}>
            <Text style={s.TrackingNumber}>{trakingNum}</Text>
            <Text>받는 분 : {name}</Text>
            <Text>배송지 : {address}</Text>
            <Text>문의사항 : {category}</Text>
        </View>
    );
}

export default DeliveryInfoNotTouchable;