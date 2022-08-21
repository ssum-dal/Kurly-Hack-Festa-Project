import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfoMessage from "../../../Components/DeliveryInfo/DeliveryInfoMessage";

const info2 = [
    {
        id: 12345612121333, 
        name: '서수민(완료)', 
        address: '서울특별시 강서구 마곡중앙로 25 1000동 1000호',
        number: '010-1234-5678',
        request: '부재 시 연락 바랍니다.',   
    },
]

const s = StyleSheet.create({
    MessageView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default({ navigation }) => {
    const renderDeliveryInfo = ({item, index}) => {
        return (
            <DeliveryInfoMessage
                navigation={navigation}
                trakingNum={item.id}
                name={item.name}
                address={item.address}
                number={item.number}
                request={item.request}
            />
        );
    }

    return (
        <View style={s.MessageView}>
            <FlatList
                data={info2}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}