import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfo from "../../../Components/DeliveryInfo/DeliveryInfo";

const info = [
    {
        id: 123456121213, 
        name: '서수민', 
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '배송사진이 희망장소와 달라요',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 주차장입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: 'https://cdn.pixabay.com/photo/2021/08/25/07/21/cat-6572630_960_720.jpg'
    },
]

const s = StyleSheet.create({
    AlarmView: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
});

export default({ navigation }) => {

    const renderDeliveryInfo = ({item, index}) => {
        return (
            <DeliveryInfo
                navigation={navigation}
                trakingNum={item.id}
                name={item.name}
                address={item.address}
                category={item.category}
                detail={item.detail}
                uri={item.uri}
            />
        );
    }

    return (
        <View style={s.AlarmView}>
            <FlatList
                data={info}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}