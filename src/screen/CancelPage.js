import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, 
        StatusBar, View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { JADWAL } from '../database/Data'; 

const Detail = ({ navigation, route }) => {
    const data = route.params.text;
    const scheduleList = JADWAL.filter(item =>
        item.dermaga_keberangkatan === data.departure &&
        item.dermaga_tujuan === data.arrival &&
        item.kelas_layanan === data.service &&
        item.tanggal_masuk === data.date &&
        item.jam_masuk === data.time);

    const [listData, setlistData] = useState(data);
    
    const onSubmit = () => {
        navigation.navigate('Confirm', {listData});
    } 

    return (
        <text>Aman</text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        margin: 30,  
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    title: {
        color: '#00579C',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    intitle: {
        fontWeight: 'bold',
        padding: 10
    },
    titleform: {
        fontWeight: 'bold'
    },
    search: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
    card: {
        marginHorizontal: 30,
    },
    detail_search: {
        borderWidth: 1,
        borderColor: '#d4d4d4',
        backgroundColor: '#dedede',
        padding: 20,
        marginBottom: 5,
        elevation: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    detail_style_Text: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    result_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#000",
        fontWeight: 'bold'
    },
    button_style: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planeIcon: {
        marginRight: 10,
    },
    text: {
        color: '#000',
        fontSize: 18,
    },
    textResult: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    detailInfo: {
        paddingBottom: 10
    },
    countText: {
        paddingTop: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    detailInfoDate: {
        paddingBottom: 2
    },
    detailInfoTime: {
        paddingBottom: 10
    },
    backButton: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#283593',
        color: '#283593',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    confirmButton: {
        borderWidth: 1,
        backgroundColor: '#283593',
        borderColor: '#283593',
        color: '#fff',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    backbuttonText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    confirmbuttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default Detail;