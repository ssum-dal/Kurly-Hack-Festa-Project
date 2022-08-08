import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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

function DeliveryInfo({ navigation, trakingNum, name, address, category, detail, uri }) {
    return (
        <TouchableOpacity
            style={{backgroundColor: 'red'}}
            onPress={() => {
                navigation.push('DetailsPresenter',{
                    trakingNum: trakingNum,
                    name: name,
                    address: address,
                    category: category,
                    detail: detail,
                    uri: uri
                })
            }}
        >
            <View style={s.InfoView}>
                <Text style={s.TrackingNumber}>{trakingNum}</Text>
                <Text>받는 분 : {name}</Text>
                <Text>배송지 : {address}</Text>
                <Text>문의사항 : {category}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DeliveryInfo;