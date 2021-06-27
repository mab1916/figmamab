import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

export default function LoginDark() {
    useFonts({ Overpass_400Regular });
    return (
        <React.Fragment>
            <View style={logindark.code}>
                <View style={logindark.mainbutton}>
                    <View style={logindark.rectengle1}>
                        <Text style={logindark.login}>Login</Text>
                    </View>
                </View>
                <View style={logindark.redbutton}>
                    <View style={logindark.redRectengle1}>
                        <Text style={logindark.redLogin1}>Login</Text>
                    </View>
                </View>
                <View style={logindark.component1}>
                    <View style={logindark.rectengle51}>
                        <Text style={logindark.correo}>Correo electrónico</Text>
                    </View>
                </View>
                <View style={logindark.component2}>
                    <View style={logindark.rectengle52}>
                        <Text style={logindark.contraseña}>Correo electrónico</Text>
                    </View>
                </View>
                <Image style={logindark.logowhite} source={require('../assets/logo-white.png')} />
                <Text style={logindark.olvidaste}>¿Olvidaste tu contraseña?</Text>
            </View>
        </React.Fragment>
    );
}

const logindark = StyleSheet.create({
    /* Login Dark */

    code: {
        position: 'relative',
        width: 414,
        height: 896,
        top: 40,
        left: 200,
        backgroundColor: '#0C1327',
    },

    /* Main Button */

    mainbutton: {
        position: 'absolute',
        width: 350,
        height: 60,
        left: 32,
        top: 800,
    },

    /* Rectangle 1 */

    rectengle1: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#227BFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#227BFF',
        // box-sizing: border-box,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    /* Login */

    login: {
        position: 'absolute',
        left: 150,
        right: 42,
        top: 21.67,
        bottom: 21.67,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
        lineHeight: 34,
    },

    /* Red Button */

    redbutton: {
        position: 'absolute',
        width: 350,
        height: 60,
        left: 32,
        top: 800,
    },

    /* Rectangle 1 */

    redRectengle1: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#FF3366',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FF3366',
        // box-sizing: border-box,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    /* Login */

    redLogin1: {
        position: 'absolute',
        left: 150,
        right: 42,
        top: 21.67,
        bottom: 21.67,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
        lineHeight: 34,
    },

    /* Component 1 */

    component1: {
        position: 'absolute',
        width: 349,
        height: 60,
        left: 33,
        top: 300,
    },

    /* Rectangle 5 */

    rectengle51: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#0C1327',
        // border: 1px solid #FFFFFF,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        // box-sizing: border-box,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // border-radius: 5px,
        borderRadius: 5,
    },

    /* Correo electrónico */

    correo: {
        position: 'absolute',
        left: 5.44,
        right: 51.29,
        top: 26.67,
        bottom: 26.67,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 28,
        color: '#FFFFFF',
    },

    /* Component 1 */

    component2: {
        position: 'absolute',
        width: 349,
        height: 60,
        left: 32,
        top: 380,
    },

    /* Rectangle 5 */

    rectengle52: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#0C1327',
        // border: 1px solid #FFFFFF,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        // box-sizing: border-box,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // border-radius: 5px,
        borderRadius: 5,
    },


    /* Contraseña */

    contraseña: {
        position: 'absolute',
        left: 5.44,
        right: 67.91,
        top: 26.67,
        bottom: 26.67,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 28,
        color: '#FFFFFF',
    },


    /* logo-white 1 */

    logowhite: {
        position: 'absolute',
        width: 298,
        height: 72,
        left: 58,
        top: 83,
    },

    /* ¿Olvidaste tu contraseña? */
    
    olvidaste: {
        position: 'absolute',
        width: 163,
        height: 21,
        left: 33,
        top: 457,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FFFFFF',
    },
});


