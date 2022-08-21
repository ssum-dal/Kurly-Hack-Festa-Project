import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/Ionicons";
import SpeechBubble from "../../../Components/Chatting/SpeechBubble";
import Header from "../../../Components/Header/Header";
import Input from "../../../Components/Input/Input";

const info = [
    {
        id: 1, 
        content : "안녕하세요. 천예지 고객님, 마켓컬리의 강지복입니다.\n\n 주문하신 신선한 상품을 요청하신 문 앞에 안전하게 배송 완료하였습니다.",
        uri: 'https://cdn.pixabay.com/photo/2021/08/25/07/21/cat-6572630_960_720.jpg'
    },
    {
        id: 2,
        content: "하하",
    },
    {
        id: 3,
        content: "하하\n\n 하하핫",
        uri: 'https://cdn.pixabay.com/photo/2021/08/25/07/21/cat-6572630_960_720.jpg'
    },
    {
        id: 4,
        content: "하하하하ㅏㅎ하ㅏ하하ㅏ하하하하하",
    },
    {
        id: 5,
        content: "하하호호호호호호호호호호호호호호",
    }
 
]

const s = StyleSheet.create({
    ChattingViewContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    ChattingViewInner: {
        flex: 1,
    },
    ChattingHistoryView: {
        flex: 1,
    },
    MenuContainer: {
        backgroundColor: '#F9F9F9',  
        borderTopColor: "#D3D3D3",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: 34,
        paddingVertical: 24,
    },
    Menu: {
        alignItems: 'center',
    },
    ImageView: {
        alignItems: 'flex-end',
        marginHorizontal: '3%'
    },
    Image: {
        width: 100,
        aspectRatio: 1/1,
    }
});

export default() => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [photo, setPhoto] = useState();
    //const [messageList, setMessageList] = (info);

    const renderMessage = ({item, index}) => {
        return (
            <View style={{alignItems: 'flex-end'}}>
                <SpeechBubble
                    content={item.content}
                    uri={item.uri}
                />
            </View>
        )
    }

    return (
        <View style={s.ChattingViewContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={s.ChattingViewInner}>
                    <Header title={'메시지 발송'}/>
                    <View style={s.ChattingHistoryView}>
                        <FlatList
                            data={info}
                            renderItem={renderMessage}
                            keyExtractor={(item) => String(item.id)}
                        />
                    </View>
                    
                    {photo &&
                    <View style={s.ImageView}>                        
                        <ImageBackground
                            style={s.Image}
                            source={{uri: photo}}
                        >
                            <TouchableOpacity
                                style={{alignItems: 'flex-end'}}
                                onPress={() => {
                                    setPhoto();
                                }}
                            >
                                <Icon 
                                    name="close-circle"
                                    size={20}
                                />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    }

                    <Input isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
                    {isMenuOpened  && 
                        <View style={s.MenuContainer}>
                            <TouchableOpacity
                                onPress={()=> {
                                    launchCamera(
                                        {
                                            mediaType: 'photo',
                                            maxWidth: 800,
                                            maxHeight: 800,
                                        },
                                        (response) => {
                                            if (response.didCancel || response.errorCode) {
                                                console.log(`launchCamera error: ${response.errorCode}\n${response.errorMessage}`);
                                                return;
                                            }
                                            const photo = response.assets[0];
                                            if (!photo) {
                                                console.log('launchCamera no photo');
                                            }
                                            console.log(`image: ${photo.fileName} = ${photo.uri}`);
                                            setPhoto(photo.uri);
                                        }
                                    );
                                }}
                            >
                                <View style={s.Menu}>
                                    <Icon name={"camera"} size={40}/>
                                    <Text>카메라</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={s.Menu}>
                                    <Icon name={"navigate"} size={40}/>
                                    <Text>배송지연</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={s.Menu}>
                                    <Icon name={"cart"} size={40}/>
                                    <Text>배송완료</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={s.Menu}>
                                    <Icon name={"pencil"} size={40}/>
                                    <Text>직접입력</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}