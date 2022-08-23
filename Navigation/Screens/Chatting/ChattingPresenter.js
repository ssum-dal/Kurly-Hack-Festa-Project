import React, {useState, useEffect, useRef} from "react";
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TouchableOpacity, 
    FlatList, 
    ImageBackground, 
    TextInput, 
    Alert 
} from "react-native";
import { launchCamera } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/Ionicons";
import SpeechBubble from "../../../Components/Chatting/SpeechBubble";
import Header from "../../../Components/Header/Header";
import { ConvertDate } from "../../../Utils/Date";
import axios from "axios";
import { mainURL } from "../../../Context/Route";

const info = [
    {id: 0, content: 1, date: String(new Date('2022-08-22')), isFirstMessage: true},
    {id: 1, content: 2, date: String(new Date('2022-08-22')), isFirstMessage: false},
    {id: 2, content: 3, date: String(new Date('2022-08-23')), isFirstMessage: true},
    {id: 3, content: 4, date: String(new Date('2022-08-24')), isFirstMessage: true}
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
    },
    InputContainer: {
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: '#F9F9F9',  
        paddingHorizontal: 9,
    },
    Input: {
        flex:1,
        fontSize: 14,
        maxHeight:150
    },
    Disabled: {
        color: '#CFCFCF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Activated: {
        color: '#5F0080',
        fontSize: 16,
        fontWeight: 'bold',
    },
    DateView: {
        alignItems: 'center',
        marginTop: '3%'
    },
    DateText: {
        color: '#666666'
    },
});

const completedPhrase = '안녕하세요. *** 고객님, 마켓컬리의 ***입니다.\n\n주문하신 신선한 상품을 요청하신 문 앞에 안전하게 배송 완료하였습니다.'
const delayedPhrase = '안녕하세요. *** 고객님, 마켓컬리의 ***입니다.\n\n배송지연 관련 안내드립니다.'
const basicPhrase = '안녕하세요. *** 고객님, 마켓컬리의 ***입니다.\n\n오배송 관련 안내드립니다.'

export default({trackingNum, orderNum, isCs, csId}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [photo, setPhoto] = useState();
    const [isKeyboardOn, setKeyboardOn] = useState(false);
    const [text, setText] = useState('');
    const [state, setState] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [chatList, setChatList] = useState([]);
    const scrollRef = useRef();

    const renderMessage = ({item, index}) => {    
        return (
            <>
            {item.is_first_msg == 1 &&
                <View style={s.DateView}>
                    <Text style={s.DateText}>{ConvertDate(new Date(item.time))}</Text>
                </View>
            }
            <View style={{alignItems: 'flex-end'}}>
                <SpeechBubble
                    content={item.text}
                    uri={item.img_uri}
                />
            </View>
            </>
        )
    }

    const updateButton = () => {
        if (text.trim().length === 0) {
            setDisabled(true);
        } else {
            if (state === 1 || state == 0) {
                if (photo) {
                    setDisabled(false);
                } else {
                    setDisabled(true);
                }
            } else {
                setDisabled(false);
            }
        }
    }

    const isFirstMessage = () => {
        let len = chatList.length;
        let lastDate = new Date(chatList[len-1].time);
        let now = new Date();
  
        if (len == 0) {
            return 1;
        } else {
            if(now.getFullYear() === lastDate.getFullYear() && now.getMonth() === lastDate.getMonth() && now.getDate === lastDate.getDate()) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    const sendAlert = () => {
        Alert.alert("주의", "전송을 누르면 고객에게 알림이 갑니다. 전송하시겠습니까?", [
			{ text: "취소", onPress: () => null, style: "cancel" },
			{ 
                text: "전송", onPress: () => {
                    addChatting();
			}}
		]);
    }

    const addChatting = async() => {
        const msgData = {
            text: text,
            img_uri: photo,
            is_first_msg: isFirstMessage(),
            order_num: orderNum
        }

        const csData = {
            text: text,
            img_uri: photo,
            is_first_msg: isFirstMessage(),
            order_num: orderNum,
            cs_id: csId
        }
        const status = state == 2 ? 2 : 3
        const msgUrl = `${mainURL}/delivery/msg/todo/${status}/${trackingNum}`;
        const csUrl = `${mainURL}/delivery/cs/todo/${trackingNum}`;
        
        const newData = {...msgData, time: String(new Date())}
        
        await axios.post(isCs ? csUrl : msgUrl, isCs ? csData : msgData
            ).then((result) => {
                setChatList((prev) => prev.concat(newData));
                setPhoto();
                setText('');
                setIsMenuOpened(false);
                Keyboard.dismiss();
                scrollRef.current.scrollToEnd({duration: 500});
    
            }).catch((err) => {
                console.log(`addChatting err = ${err}`);
            });
    }

    const onMenuBtnPress = () => {
        setIsMenuOpened((prev)=>{
            if (!prev && isKeyboardOn) {
            Keyboard.dismiss();
        }
            return !prev
        })
    }

    useEffect(()=> {
        const showKeyboardHandler = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardOn(true);
            setIsMenuOpened((prev) => {
                if (prev) {
                    return !prev
                }
            })
        });
        
        const hideKeyboardHandler = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardOn(false);
        });

        return () => {
            showKeyboardHandler.remove();
            hideKeyboardHandler.remove();
        }
    }, []);

    useEffect(() => {
        updateButton();
    }, [text, photo]);

    useEffect(() => {
        const getData = async() => {
            const url = `${mainURL}/delivery/${trackingNum}`;

            await axios.get(url).then((result) => {
                const response = JSON.parse(result.request._response);
                setChatList(response);
            })
        }
        getData();
    }, []);


    return (
        <View style={s.ChattingViewContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={s.ChattingViewInner}>
                    <Header title={'메시지 발송'}/>
                    <View style={s.ChattingHistoryView}>
                        <FlatList
                            ref={scrollRef}
                            data={chatList}
                            renderItem={renderMessage}
                            keyExtractor={(item) => String(item.time)}
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
                    <View style={s.InputContainer}>
                        <TouchableOpacity onPress={onMenuBtnPress}>
                            <Icon  
                                name={isMenuOpened ? "close" : "add"} 
                                style={{ color: "#323232" }} 
                                size={34}
                            />
                        </TouchableOpacity>
                        <TextInput 
                            multiline={true} 
                            style={s.Input}
                            value={text}
                            onChangeText={(t) => {
                                setText(t);
                            }}
                        />
                        <TouchableOpacity
                            disabled={disabled}
                            onPress={()=> {
                                sendAlert();
                            }}
                        >
                            <Text style={disabled ? s.Disabled : s.Activated}>전송</Text>
                        </TouchableOpacity>
                    </View>
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
                        <TouchableOpacity
                            onPress={() => {
                                setText(delayedPhrase);
                                setState(2);
                            }}
                        >
                            <View style={s.Menu}>
                                <Icon name={"navigate"} size={40}/>
                                <Text>배송지연</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setText(completedPhrase);
                                setState(1);
                            }}
                        >
                            <View style={s.Menu}>
                                <Icon name={"cart"} size={40}/>
                                <Text>배송완료</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> {
                                setText(basicPhrase);
                                setState(0);
                            }}
                        >
                            <View style={s.Menu}>
                                <Icon name={"pencil"} size={40}/>
                                <Text>오배송</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}