import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// 배송불편사항의 정보

const s = StyleSheet.create({
    InfoTextView: {
        backgroundColor: '#FAFAFA',
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
            activeOpacity={1}
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
            <View style={s.InfoTextView}>
                <Text style={s.TrackingNumber}>{trakingNum}</Text>
                <Text>받는 분 : {name}</Text>
                <Text>배송지 : {address}</Text>
                <Text>문의사항 : {category}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DeliveryInfo;