import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { Overpass_400Regular, Overpass_700Bold } from '@expo-google-fonts/overpass';

export default function Group11() {
    useFonts({
        Overpass_400Regular, Overpass_700Bold
    })
    return (
        <React.Fragment>
            <View style={group11.code}>
                <View style={group11.group8}>
                    <View style={group11.rectangle10}>
                    </View>
                    <View style={group11.maskgroup}>
                        <Image style={group11.building2, group11.rectangle12} source={require('../assets/building2.png')}></Image>
                    </View>
                </View>
                <View style={group11.group9}>
                    <Text style={group11.deuda}>DEUDA</Text>
                    <Text style={group11.quedan}>Quedan 34 días para invertir</Text>
                    <Text style={group11.desarrolla}>Desarrollo Alfa</Text>
                    <Text style={group11.hundreds}>100%</Text>
                    <Text style={group11.recaudados}>$1,548,100 recaudados</Text>
                    <Text style={group11.meta}>Meta 2.5 MM</Text>
                    <View style={group11.group13}>
                        <Text style={group11.fourteen}>14.5%</Text>
                        <Text style={group11.tasa}>Tasa anual fija</Text>
                    </View>
                    <View style={group11.group14}>
                        <Text style={group11.inversion}>Inversión min.</Text>
                        <Text style={group11.foureight}>$48,000 MXN</Text>
                        <Text style={group11.meses}>12 meses</Text>
                        <Text style={group11.plazo}>Plazo%</Text>
                    </View>
                    <View style={group11.rectangle15} />
                </View>
            </View>
        </React.Fragment>
    );
}

const group11 = StyleSheet.create({
    /* Group 11 */
    code: {
        position: 'absolute',
        width: 374,
        height: 299,
        top: 50,
        left: 500
    },

    /* Group 8 */
    group8: {
        position: 'absolute',
        width: 374,
        height: 299,
    },

    /* Rectangle 10 */
    rectangle10: {
        position: 'absolute',
        width: 374,
        height: 299,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderRadius: 15,
        // box-sizing: border-box into React Native
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        // box-shadow: 0px 2px 4px 2px rgba(158, 158, 158, 0.25) into React Native
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },

    /* Mask Group */
    maskgroup: {
        position: 'absolute',
        width: 374,
        height: 132,
    },

    /* Rectangle 12 */
    rectangle12: {
        position: 'absolute',
        width: 374,
        height: 132,
        backgroundColor: '#C4C4C4',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    /* building2 2 */
    building2: {
        position: 'absolute',
        width: 515.62,
        height: 183.62,
        borderRadius: 16,
    },

    /* Group 9 */
    group9: {
        position: 'absolute',
        width: 348,
        height: 131,
        top: 150,
        left: 13,
    },

    /* DEUDA */
    deuda: {
        position: 'absolute',
        width: 48,
        height: 21,
        top: 10,
        right: 0,
        fontFamily: 'Overpass_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#227BFF',
    },

    /* Quedan 34 días para invertir */
    quedan: {
        position: 'absolute',
        width: 128,
        height: 15,
        top: 115,
        left: 4,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#393939',
    },

    /* Desarrollo Alfa */
    desarrolla: {
        position: 'absolute',
        width: 97,
        height: 21,
        top: 10,
        fontFamily: 'Overpass_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* 100% */
    hundreds: {
        position: 'absolute',
        width: 26,
        height: 15,
        top: 115,
        right: 4,
        fontFamily: 'Overpass_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#227BFF',
    },

    /* $1,548,100 recaudados */
    recaudados: {
        position: 'absolute',
        width: 104,
        height: 15,
        top: 90,
        left: 4,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Meta 2.5 MM */
    meta: {
        position: 'absolute',
        width: 58,
        height: 15,
        top: 90,
        right: 4,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Group 13 */
    group13: {
        position: 'absolute',
        width: 64,
        height: 36,
        top: 40,
    },

    /* 14.5% */
    fourteen: {
        position: 'absolute',
        width: 39,
        height: 21,
        top: 10,
        fontFamily: 'Overpass_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#227BFF',
    },

    /* Tasa anual fija */
    tasa: {
        position: 'absolute',
        width: 64,
        height: 15,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Group 14 */
    group14: {
        position: 'absolute',
        width: 135,
        height: 29,
        top: 40,
        right: 2,
    },

    /* Inversión min. */
    inversion: {
        position: 'absolute',
        width: 63,
        height: 15,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* $48,000 MXN */
    foureight: {
        position: 'absolute',
        width: 64,
        height: 15,
        right: 0,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* 12 meses */
    meses: {
        position: 'absolute',
        width: 41,
        height: 15,
        top: 10,
        right: 0,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Plazo */
    plazo: {
        position: 'absolute',
        width: 25,
        height: 15,
        top: 10,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Rectangle 15 */
    rectangle15: {
        position: 'absolute',
        width: 339,
        height: 10,
        top: 105,
        left: 4,
        backgroundColor: '#227BFF',
        borderRadius: 15,
    },
});


