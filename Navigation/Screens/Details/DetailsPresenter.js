import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DeliveryInfoNotTouchable from "../../../Components/DeliveryInfo/DeliveryInfoNotTouchable";
import Header from "../../../Components/Header/Header";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';

const s = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    DetailsView: {
        paddingHorizontal: '7%',
        paddingVertical: '2%',
        marginBottom: '3%'
    },
    HeadText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000',
        marginVertical: '2%'
    },
    SubText: {
        fontSize: 15,
        color: '#666666'
    },
    Image: {
        width: '100%',
        aspectRatio: 2/1
    },
    FullImageView: {
        width: '100%',
        height: '100%'
    },
    Button: {
        backgroundColor: '#5F0080',
        borderRadius: 7
    },
    ButtonText: {
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: '4%',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default({trackingNum, name, address, title, category, detail, uri, orderNum, csId, isDone}) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    
    return (
        <View style={s.View}>
            <Header title={'배송불편사항'}/>
            
            <View style={s.DetailsView}>
                <Text style={s.HeadText}>주문자 정보</Text>
                <DeliveryInfoNotTouchable
                    trackingNum={trackingNum}
                    name={name}
                    address={address}
                    category={category}
                    detail={detail}
                />
            </View>
            
            <View style={s.DetailsView}>
                <Text style={s.HeadText}>[배송문의] {title}</Text>
                <Text style={s.SubText}>{detail}</Text>
            </View>
            <View style={s.DetailsView}>
                <Text style={s.HeadText}>고객 첨부 사진</Text>
                {uri ?
                    <TouchableOpacity
                    onPress={() => {
                        setIsVisible(true)
                    }}
                    >
                        <Image
                            style={s.Image}
                            source={{
                                uri: uri
                            }}
                        />
                    </TouchableOpacity>
                    :
                    <Text>첨부 사진이 없습니다</Text>
                }
            </View>

            <View style={s.DetailsView}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={s.Button}
                    onPress={() => {
                        navigation.push('Chatting', {
                            trackingNum: trackingNum,
                            orderNum: orderNum,
                            isCs: true,
                            csId: csId,
                            isDone: isDone
                        })
                    }}
                >
                    <Text style={s.ButtonText}>{isDone ? '메시지 이력': '메시지 전송'}</Text>
                </TouchableOpacity>
            </View>

            <Modal 
                isVisible={isVisible}
                animationIn="fadeIn"
                animationOut="fadeOut"
                backdropOpacity={0.4}
				backdropTransitionOutTiming={0}
				onBackButtonPress={() => {setIsVisible(false)}}
				onBackdropPress={() => {setIsVisible(false)}}
                style={{alignItems: 'center'}}
            >
                <ImageBackground
                    style={s.FullImageView}
                    source={{
                        uri: uri
                    }}
                >
                    <TouchableOpacity
                        style={{alignItems: 'flex-end'}}
                        onPress={() => {
                            setIsVisible(false);
                        }}
                    >
                        <Icon name="close-circle" size={40} color="#000000"/>
                    </TouchableOpacity>
                </ImageBackground>
            </Modal>
        </View>
    )
}