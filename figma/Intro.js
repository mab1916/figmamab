import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

export default function Intro() {
    useFonts({ Overpass_400Regular });
    return (
        <React.Fragment>
            <View style={intro.code}>
                <Image style={intro.building21} source={require('../assets/building22.png')} />
                <View style={intro.rectengle6} />
                <View style={intro.main1}>
                    <View style={intro.rectengle1}>
                        <Text style={intro.iniciar}>Iniciar sesión</Text>
                    </View>
                </View>
                <View style={intro.main2}>
                    <View style={intro.rectengle2}>
                        <Text style={intro.crear}>Crear cuenta</Text>
                    </View>
                </View>
                <Image style={intro.logowhite} source={require('../assets/logo-white.png')} />
                <Text style={intro.crowfunding}>CROWDFUNDING INMOBILIARIO</Text>
            </View>
        </React.Fragment>
    );
}

const intro = StyleSheet.create({
    /* Intro */

    code: {
        position: 'relative',
        width: 414,
        height: 896,
        top: 50,
        left: 200,
        backgroundColor: '#FFFFFF',
    },

    /* building2 1 */

    building21: {
        position: 'absolute',
        width: 415,
        height: 895,
        left: 0,
        top: 0,
    },

    /* Rectangle 6 */

    rectengle6: {
        position: 'absolute',
        width: 414,
        height: 896,
        left: 0,
        top: 0,
        backgroundColor: '#000000',
        opacity: 0.25,
    },

    /* Group 1 */

    group1: {
        position: 'absolute',
        width: 350,
        height: 124,
        left: 32,
        top: 710,
    },

    /* Main Button 1 */

    main1: {
        position: 'absolute',
        width: 350,
        height: 60,
        left: 32,
        top: 710,
    },

    /* Rectangle 1 */

    rectengle1: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#227BFF',
        // border: 1px solid #227BFF;
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#227BFF',
        // box-sizing: border-box;
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // border-radius: 50px;
        borderRadius: 50
    },

    /* Iniciar sesión */

    iniciar: {
        position: 'absolute',
        left: 33.14,
        right: 33.14,
        top: 25,
        bottom: 23.33,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 31,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
    },

    /* Main Button 2 */

    main2: {
        position: 'absolute',
        width: 350,
        height: 60,
        left: 32,
        top: 774,
    },

    /* Rectangle 2 */

    rectengle2: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#0C1327',
        // border: 1px solid #0C1327;
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#0C1327',
        // box-sizing: border-box;
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // border-radius: 50px;
        borderRadius: 50
    },


    /* Crear cuenta */

    crear: {
        position: 'absolute',
        left: 33.43,
        right: 33.43,
        top: 25,
        bottom: 23.33,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 31,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
    },

    /* logo-white 1 */

    logowhite: {
        position: 'absolute',
        width: 298,
        height: 72,
        left: 52,
        top: 128,
    },

    /* CROWDFUNDING INMOBILIARIO */

    crowfunding: {
        position: 'absolute',
        width: 197,
        height: 74,
        left: 109,
        top: 396,
        fontSize: 24,
        lineHeight: 37,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',      
        // text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});


