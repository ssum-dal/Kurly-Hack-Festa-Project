import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DeliveryInfo from "../../../Components/DeliveryInfo/DeliveryInfo";

const info = [
    {
        id: 123456121212, 
        name: '서수민',
        number: '010-1234-1234',
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '상품이 다른곳으로 갔어요',
        title: '제목',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 주차장입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: 'https://cdn.pixabay.com/photo/2021/08/25/07/21/cat-6572630_960_720.jpg'
    },
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
    {
        id: 454515151544, 
        name: '천예찌',
        number: '010-1234-5678',
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '배송 상품이 안 왔어요',
        title: '제목',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 집입니다. 첨부한 사진 위치로 다시 배송해주세요.',
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
                number={item.number}
                address={item.address}
                category={item.category}
                title={item.title}
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