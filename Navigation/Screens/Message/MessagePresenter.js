import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../../../Components/Header/Header";
import DeliveryInfoMessage from "../../../Components/DeliveryInfo/DeliveryInfoMessage";

const info = [
    {
        id: 123456121212, 
        name: '서수민', 
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '배송사진이 희망장소와 달라요',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 주차장입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: 'https://cdn.pixabay.com/photo/2021/08/25/07/21/cat-6572630_960_720.jpg'
    },
    {   
        id: 151548484848, 
        name: '달래', 
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '요청과 다르게 배송',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 편의점입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: ''
    },
    {
        id: 454515151544, 
        name: '천예찌', 
        address: '서울특별시 강서구 마곡중앙로 36 어쩌구 저쩌구', 
        category: '요청과 다르게 배송',
        detail: '배송 희망 장소로 집 앞을 선택하였는데 사진 속 위치는 알 수 없는 집입니다. 첨부한 사진 위치로 다시 배송해주세요.',
        uri: ''
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
                category={item.category}
            />
        );
    }

    return (
        <View style={s.MessageView}>
            <Header title={'메시지'}/>
            
            <FlatList
                data={info}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}