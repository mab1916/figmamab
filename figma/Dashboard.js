import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { Feather } from '@expo/vector-icons';
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

export default function Dashboard() {
    useFonts({ Overpass_400Regular, Roboto_400Regular });
    return (
        <View style={dashboard.code}>
            <View style={dashboard.menu}>
                <Feather name="menu" size={35} color="black" />
            </View>
            <Text style={dashboard.oportunidades}>
                Oportunidades de Inversión
            </Text>
            <View style={dashboard.rectangle14} />
            <View style={dashboard.group18}>
                <View style={dashboard.group12}>
                    <View style={dashboard.group8}>
                        <View style={dashboard.rectangle10}>
                            <Text style={dashboard.desarrollo}>
                                Desarrollo Alfa
                            </Text>
                            <Text style={dashboard.por}>
                                Por Desarrollador 1
                            </Text>
                            <Text style={dashboard.quedan}>
                                Quedan 39 días
                            </Text>
                        </View>
                        <View style={dashboard.maskgroup}>
                            <Image style={dashboard.pexel, dashboard.rectangle12} source={require('../assets/pexel.png')} />
                        </View>
                        <View style={dashboard.group16}>
                            <View style={dashboard.group10}>
                                <View style={dashboard.group5}>
                                    <Text style={dashboard.twelve}>
                                        12.32%
                                    </Text>
                                    <Text style={dashboard.tasa}>
                                        Tasa anual fija
                                    </Text>
                                    <Text style={dashboard.minde}>
                                        Min de inversion
                                    </Text>
                                    <Text style={dashboard.fiftyfour}>
                                        $54,000 MXN
                                    </Text>
                                    <Text style={dashboard.plazo}>
                                        Plazo
                                    </Text>
                                    <Text style={dashboard.meses}>
                                        12 meses
                                    </Text>
                                </View>
                                <View style={dashboard.group15}>
                                    <Text style={dashboard.min}>
                                        Min $4.5MM
                                    </Text>
                                    <Text style={dashboard.max}>
                                        Max $4.5MM
                                    </Text>
                                    <Text style={dashboard.mm}>
                                        $1.5MM recaudado
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={dashboard.group19}>
                <View style={dashboard.group12}>
                    <View style={dashboard.group8}>
                        <View style={dashboard.rectangle10}>
                            <Text style={dashboard.desarrollo}>
                                Desarrollo Alfa
                            </Text>
                            <Text style={dashboard.por}>
                                Por Desarrollador 1
                            </Text>
                            <Text style={dashboard.quedan}>
                                Quedan 39 días
                            </Text>
                        </View>
                        <View style={dashboard.maskgroup}>
                            <Image style={dashboard.pexel, dashboard.rectangle12} source={require('../assets/building2.png')} />
                        </View>
                        <View style={dashboard.group16}>
                            <View style={dashboard.group10}>
                                <View style={dashboard.group5}>
                                    <Text style={dashboard.twelve}>
                                        12.32%
                                    </Text>
                                    <Text style={dashboard.tasa}>
                                        Tasa anual fija
                                    </Text>
                                    <Text style={dashboard.minde}>
                                        Min de inversion
                                    </Text>
                                    <Text style={dashboard.fiftyfour}>
                                        $54,000 MXN
                                    </Text>
                                    <Text style={dashboard.plazo}>
                                        Plazo
                                    </Text>
                                    <Text style={dashboard.meses}>
                                        12 meses
                                    </Text>
                                </View>
                                <View style={dashboard.group15}>
                                    <Text style={dashboard.min}>
                                        Min $4.5MM
                                    </Text>
                                    <Text style={dashboard.max}>
                                        Max $4.5MM
                                    </Text>
                                    <Text style={dashboard.mm}>
                                        $1.5MM recaudado
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={dashboard.title}>
                Invertir
            </Text>
        </View>
    );
}

const dashboard = StyleSheet.create({
    /* Dashboard */

    code: {
        position: 'relative',
        width: 414,
        height: 896,
        top: 20,
        left: 200,
        backgroundColor: '#F7F7F9',
    },

    /* menu_24px */

    menu: {
        position: 'absolute',
        width: 39,
        height: 39,
        left: 16,
        top: 50,
    },

    /* Oportunidades de Inversión */

    oportunidades: {
        position: 'absolute',
        width: 229,
        height: 28,
        left: 22,
        top: 116,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Rectangle 14 */

    rectangle14: {
        position: 'absolute',
        width: 414,
        height: 22,
        left: 0,
        top: 886,
        backgroundColor: '#000000',
    },

    /* Group 18 */

    group18: {
        position: 'absolute',
        width: 853,
        height: 937,
        left: 22,
        top: 161,
    },

    /* Group 12 */

    group12: {
        position: 'absolute',
        width: 374,
        height: 309,
        left: 22,
        top: 161,
    },

    /* Group 8 */

    group8: {
        position: 'absolute',
        width: 374,
        height: 309,
        left: 22,
        top: 161,
    },

    /* Rectangle 10 */

    rectangle10: {
        position: 'absolute',
        width: 374,
        height: 309,
        left: -45,
        top: -300,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        // border: 1px solid #FFFFFF;
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#FFFFFF",
        // box-sizing: border-box;
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // box-shadow: 0px 2px 4px 2px rgba(158, 158, 158, 0.25);
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },

    /* Desarrollo Alfa */

    desarrollo: {
        position: 'absolute',
        width: 97,
        height: 16.52,
        left: 15,
        top: 10,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Por Desarrollador 1 */

    por: {
        position: 'absolute',
        width: 85,
        height: 11.8,
        left: 15,
        top: 25,
        fontSize: 10,
        lineHeight: 15,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#959595',
        // bac
    },

    /* Quedan 39 días */

    quedan: {
        position: 'absolute',
        width: 98,
        height: 21,
        left: 263,
        top: 15,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Mask Group */

    maskgroup: {
        position: 'absolute',
        width: 374,
        height: 241.56,
        left: -45,
        top: -290,
    },

    /* Rectangle 12 */

    rectangle12: {
        position: 'absolute',
        width: 374,
        height: 141.56,
        left: 22,
        backgroundColor: '#C4C4C4',
    },

    /* pexels-tomáš-malík-2581922 1 */

    pexel: {
        position: 'absolute',
        width: 375,
        height: 262.24,
        left: 20,
    },

    /* Group 16 */

    group16: {
        position: 'absolute',
        width: 329,
        height: 74,
        left: -160,
        top: -1270,
    },

    /* Group 10 */

    group10: {
        position: 'absolute',
        width: 328,
        height: 37,
        left: 41,
        top: 415,
    },

    /* Group 5 */

    group5: {
        position: 'absolute',
        width: 328,
        height: 37,
        left: 41,
        top: 415,
    },

    /* 12.32% */

    twelve: {
        position: 'absolute',
        width: 47,
        height: 16.52,
        left: 42,
        top: 435.01,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C1327',
    },

    /* Tasa anual fija */

    tasa: {
        position: 'absolute',
        width: 76,
        height: 14.16,
        left: 41,
        top: 417,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Mín de inversión */

    minde: {
        position: 'absolute',
        width: 88,
        height: 18,
        left: 170,
        top: 415,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* $54,000 MXN */
    fiftyfour: {
        position: 'absolute',
        width: 91,
        height: 21,
        left: 170,
        top: 431,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C1327',
    },

    /* Plazo */

    plazo: {
        position: 'absolute',
        width: 30,
        height: 18,
        left: 309,
        top: 415,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* 12 meses */

    meses: {
        position: 'absolute',
        width: 59,
        height: 21,
        left: 310,
        top: 431,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C1327',
    },

    /* Group 15 */

    group15: {
        position: 'absolute',
        width: 327,
        height: 15,
        left: 40,
        top: 378,
    },

    /* $1.5MM recaudado */

    mm: {
        position: 'absolute',
        width: 84,
        height: 15,
        left: 40,
        top: 378,
        fontSize: 10,
        lineHeight: 15,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Max $4.5MM */

    max: {
        position: 'absolute',
        width: 58,
        height: 15,
        left: 309,
        top: 378,
        fontSize: 10,
        lineHeight: 15,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Min $4.5MM */

    min: {
        position: 'absolute',
        width: 59,
        height: 21,
        left: 310,
        top: 431,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C1327',
    },

    /* Rectangle 13 */

    rectangle13: {
        position: 'absolute',
        left: 5.31,
        right: 4.35,
        top: 23.44,
        bottom: 74.67,
        backgroundColor: '#227BFF',
    },

    /* Deuda */

    deuda: {
        position: 'absolute',
        width: 59,
        height: 21,
        left: 310,
        top: 431,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#0C1327',
    },

    /* Group 17 */

    group17: {
        position: 'absolute',
        width: 374,
        height: 12,
        left: 22,
        top: 357,
    },

    /* Rectangle 12 */

    rectangle12: {
        position: 'absolute',
        left: 5.31,
        right: 4.35,
        top: 39.84,
        bottom: 58.82,
        backgroundColor: '#DADADA',
    },


    /* Rectangle 13 */

    rectangle13: {
        position: 'absolute',
        left: 5.31,
        right: 63.04,
        top: 39.84,
        bottom: 58.82,
        backgroundColor: '#227BFF',
    },

    /* Group 19 */

    group19: {
        position: 'absolute',
        width: 374,
        height: 309,
        left: 21,
        top: 490,
    },

    /* Title */

    title: {
        position: 'absolute',
        height: 24,
        left: 177,
        right: 172,
        top: 55,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 23,
        letterSpacing: 0.15,
        color: '#000000',
    },

});


