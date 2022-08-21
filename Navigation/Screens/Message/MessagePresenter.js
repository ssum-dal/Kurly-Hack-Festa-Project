import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfoMessage from "../../../Components/DeliveryInfo/DeliveryInfoMessage";

const info = [
    {
        id: 123456121212, 
        name: '서수민', 
        address: '서울특별시 강서구 마곡중앙로 25 1000동 1000호',
        number: '010-1234-5678',
        request: '부재 시 연락 바랍니다.',   
    },
    {   
        id: 151548484848, 
        name: '서달래', 
        address: '서울특별시 강서구 마곡중앙로 36-1',
        number: '010-5678-5678',
    },
    {
        id: 454515151544, 
        name: '천예찌', 
        address: '서울특별시 강서구 마곡중앙로 252-1',
        number: '010-9876-5432',
        request: '부재시 연락 바라고 현관 공동 비밀번호는 1111입니다. 초인종 누르지 말고 그냥 들어와주세요.',
    },
    {
        id: 123459878555, 
        name: '탁서연', 
        address: '서울특별시 강서구 마곡중앙로 212-2 102호',
        number: '010-9876-5432',
        request: '부재시 연락 바라고 현관 공동 비밀번호는 1111입니다. 초인종 누르지 말고 그냥 들어와주세요.',
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
                data={info}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}