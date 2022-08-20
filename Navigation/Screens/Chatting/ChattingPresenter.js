import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../../Components/Header/Header";
import Input from "../../../Components/Input/Input";

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
        alignItems: 'flex-end'
    },
    Image: {
        width: 100,
        aspectRatio: 1/1,
    }
});

export default() => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [photo, setPhoto] = useState();

    return (
        <View style={s.ChattingViewContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={s.ChattingViewInner}>
                    <Header title={'메시지 발송'}/>
                    <View style={s.ChattingHistoryView}>
                        <Text>이전 메세지 내역 보이는 창</Text>
                    </View>
                    
                    {photo &&
                    <View style={s.ImageView}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    setPhoto();
                                }}
                            >
                                <Icon 
                                    name="close"
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={s.Image}
                            source={{uri: photo}}
                        />
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