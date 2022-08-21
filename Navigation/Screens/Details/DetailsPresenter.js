import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import DeliveryInfoNotTouchable from "../../../Components/DeliveryInfo/DeliveryInfoNotTouchable";
import Header from "../../../Components/Header/Header";
import Modal from "react-native-modal";

const s = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    DetailsView: {
        marginHorizontal: '5%',
        marginVertical: '3%'
    },
    HeadText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: '2%'
    },
    Image: {
        width: '100%',
        aspectRatio: 2/1
    },
    FullImageView: {
        width: '100%',
        height: '100%'
    },
    ButtonView: {
        alignItems: 'center',
        marginVertical: '3%'
    },
    Button: {
        backgroundColor: '#dddddd',
        padding: '3%',
        borderRadius: 10
    }
});

export default({trakingNum, name, address, category, detail, uri}) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigation = useNavigation();
    
    return (
        <View style={s.View}>
            <Header title={'배송불편사항'}/>
            <DeliveryInfoNotTouchable
                trakingNum={trakingNum}
                name={name}
                address={address}
                category={category}
                detail={detail}
            />

            <View style={s.DetailsView}>
                <Text style={s.HeadText}>문의내용</Text>
                <Text>{detail}</Text>
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

            <View style={s.ButtonView}>
                <TouchableOpacity
                    style={s.Button}
                    onPress={() => {
                        navigation.push('Chatting')
                    }}
                >
                    <View>
                        <Text>메시지 전송</Text>
                    </View>
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
                <Image
                    style={s.FullImageView}
                    source={{
                        uri: uri
                    }}
                />
            </Modal>
        </View>
    )
}