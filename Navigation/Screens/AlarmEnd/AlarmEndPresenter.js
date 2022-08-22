import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfo from "../../../Components/DeliveryInfo/DeliveryInfo";

const info = [
    {   
        id: 151548484848, 
        name: '달래', 
        number: '010-5678-1234',
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '상품이 다른곳으로 갔어요',
        title: '제목',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 편의점입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: ''
    },
]

const s = StyleSheet.create({
    AlarmView: {
        flex: 1,
        backgroundColor: '#ffffff',
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