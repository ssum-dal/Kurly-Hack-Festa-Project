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

function DeliveryInfoMessage({ navigation, trakingNum, name, address, number, request }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                navigation.push('Chatting');
            }}
        >
            <View style={s.InfoTextView}>
                <View style={s.TextView}>
                    <Text style={s.AddressText}>{address}</Text>
                    <Text style={s.NormalText}>{name}  |  {number}  |  {trakingNum}</Text>
                    {request &&
                        <View style={s.RequestView}>
                            <Text style={s.RequestText}>요청사항</Text>
                            <Text style={s.NormalText}>{request}</Text>
                        </View>
                    }
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

export default DeliveryInfoMessage;