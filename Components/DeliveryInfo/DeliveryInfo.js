import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const s = StyleSheet.create({
    InfoTextView: {
        marginHorizontal: '5%',
        paddingVertical: '6%',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderColor: '#F3F3F3'
    },
    TextView: {
        width: '85%'
    },
    AddressText: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 16
    },
    RequestView: {
        flexDirection: 'row'
    },
    RequestText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#5F0080',
        marginRight: '2%',
        paddingTop: '1%'
    },
    NormalText: {
        fontSize: 15,
        flex: 1,
        paddingTop: '1%',
        color: '#666666'
    },
    IconView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});

function DeliveryInfo({ navigation, trackingNum, name, number, address, category, title, detail, uri, orderNum, csId, isDone }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                navigation.push('Details',{
                    trackingNum: trackingNum,
                    name: name,
                    address: address,
                    category: category,
                    title: title,
                    detail: detail,
                    uri: uri,
                    orderNum: orderNum,
                    csId: csId,
                    isDone: isDone
                })
            }}
        >
            <View style={s.InfoTextView}>
                <View style={s.TextView}>
                    <Text style={s.AddressText}>{address}</Text>
                    <Text style={s.NormalText}>{name}  |  {number}</Text>
                    <Text style={s.NormalText}>{trackingNum}</Text>
                    <View style={s.RequestView}>
                        <Text style={s.RequestText}>배송문의</Text>
                        <Text style={s.NormalText}>{category}</Text>
                    </View>
                    
                </View>
                <View style={s.IconView}>
                    <Icon 
                        name="chevron-forward-outline"
                        color="#5F0080"
                        size={35}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default DeliveryInfo;