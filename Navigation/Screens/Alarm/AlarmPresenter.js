import React, {useEffect, useState} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import DeliveryInfo from "../../../Components/DeliveryInfo/DeliveryInfo";
import axios from "axios";
import { mainURL } from "../../../Context/Route";
import { requestAlarm } from "../../../Context/Reducer/badgeReducer";
import { useDispatch } from 'react-redux';

const s = StyleSheet.create({
    AlarmView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default({ navigation }) => {
    const [csList, setCsList] = useState([]);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();


    const renderDeliveryInfo = ({item, index}) => {
        return (
            <DeliveryInfo
                navigation={navigation}
                trackingNum={item.tracking_num}
                name={item.receiver}
                number={item.phone_num}
                address={item.address}
                category={item.request_category}
                title={item.request_title}
                detail={item.request_content}
                uri={item.img_uri}
                orderNum={item.order_num}
                csId={item.cs_id}
                isDone={false}
            />
        );
    }

    useEffect(() => {
        const getData = async() => {
            const url = `${mainURL}/delivery/cs/todo`;

            await axios.get(url).then((result) => {
                const response = JSON.parse(result.request._response);
                setCsList(response);
                dispatch(requestAlarm(response.length));
            })
        }
        getData();
    }, [isFocused]);

    return (
        <View style={s.AlarmView}>
            <FlatList
                data={csList}
                renderItem={renderDeliveryInfo}
                keyExtractor={(item) => String(item.cs_id)}
            />
        </View>
    )
}