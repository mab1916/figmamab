import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { MaterialIcons } from '@expo/vector-icons';
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

export default function Signup() {
    useFonts({ Overpass_400Regular });
    return (
        <React.Fragment>
            <View style={signup.code}>
                <Image style={signup.building22} source={require('../assets/building22.png')} />
                <View style={signup.rectangle72}>
                    <View style={signup.rectangle71} />
                </View>
                <Image style={signup.logowhite} source={require('../assets/logo-white.png')} />
                <View style={signup.group4}>
                    <Text style={signup.email}>Email*</Text>
                    <View style={signup.component1}>
                        <View style={signup.rectangle5}>
                            <Text style={signup.email1}>Nombre(s)</Text>
                        </View>
                    </View>
                    <Text style={signup.contraseña}>Contraseña*</Text>
                    <View style={signup.component2}>
                        <View style={signup.rectangle5}>
                            <Text style={signup.contrasen}>Apellido Paterno</Text>
                        </View>
                    </View>
                    <Text style={signup.repetir}>Repetir contrasena*</Text>
                    <View style={signup.component3}>
                        <View style={signup.rectangle5}>
                            <Text style={signup.paterno}>Apellido Paterno</Text>
                        </View>
                    </View>
                </View>
                <Text style={signup.iniciar}>Abrir Cuenta</Text>
                <View style={signup.mainbutton}>
                    <View style={signup.mainrectangle}>
                        <Text style={signup.maininiciar}>Abrir Cuenta</Text>
                    </View>
                </View>
                <View style={signup.arrow}>
                    <MaterialIcons name="keyboard-arrow-left" size={35} color="white" />
                </View>
            </View>
        </React.Fragment>
    );
}

const signup = StyleSheet.create({
    /* signup */

    code: {
        position: 'relative',
        width: 414,
        height: 896,
        top: 20,
        left: 200,
        backgroundColor: '#0C1327',
    },

    /* building2 2 */

    building22: {
        position: 'absolute',
        width: 414,
        height: 896,
    },

    /* Rectangle 71 */

    rectangle71: {
        position: 'absolute',
        width: 414,
        height: 896,
    },
    
    /* Rectangle 72 */
    
    rectangle72: {
        position: 'absolute',
        width: 414,
        height: 686,
        left: 0,
        top: 210,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#FFFFFF',
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    // /* logo-white 1 */

    logowhite: {
        position: 'absolute',
        width: 235,
        height: 57,
        left: 89,
        top: 100,
    },

    /* Group 4 */

    group4: {
        position: 'absolute',
        width: 350,
        height: 179,
    },

    /* Component 1 */

    component1: {
        position: 'absolute',
        width: 349,
        height: 55,
        left: 31,
        top: 344,
    },

    /* Component 2 */

    component2: {
        position: 'absolute',
        width: 349,
        height: 55,
        left: 32,
        top: 444,
    },

    /* Component 3 */

    component3: {
        position: 'absolute',
        width: 349,
        height: 55,
        left: 32,
        top: 544,
    },

    /* Rectangle 5 */

    rectangle5: {
        position: 'absolute',
        left: 0,
        // backgroundColor: 'blue',
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        // border: 1px solid #D2D2D2;
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D2D2D2',
        // box-sizing: border-box;
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },

    /* Contraseña */

    contrasen: {
        position: 'absolute',
        left: 10,
        right: 73.93,
        top: 30.3,
        bottom: 31.52,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        color: '#A4A9B3',
    },

    /* Contraseña* */

    contraseña: {
        position: 'absolute',
        left: 35,
        top: 422,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#000000',
    },

    /* Email */

    email1: {
        position: 'absolute',
        left: 10,
        right: 84.53,
        top: 30.3,
        bottom: 31.52,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        color: '#A4A9B3',
    },

    /* Email* */
    
    email: {
        position: 'absolute',
        left: 35,
        right: 81.64,
        top: 322,
        bottom: 61.94,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },

    /* Apellido Paterno */

    paterno: {
        position: 'absolute',
        left: 10,
        right: 84.53,
        top: 30.3,
        bottom: 31.52,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        color: '#A4A9B3',
    },

    /* Repetir contrasena* */
    
    repetir: {
        position: 'absolute',
        left: 35,
        right: 81.64,
        top: 522,
        bottom: 61.94,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },

    /* Iniciar sesión */

    iniciar: {
        position: 'absolute',
        width: 146,
        height: 37,
        left: 131,
        top: 233,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 37,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },

    /* Main Button */

    mainbutton: {
        position: 'absolute',
        width: 350,
        height: 56,
        left: 33,
        top: 784,
    },

    /* Rectangle 1 */

    mainrectangle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#227BFF',
        // border: 1px solid #227BFF,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#227BFF',
        // box-sizing: border-box,
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        // box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    /* Iniciar Sesión */

    maininiciar: {
        position: 'absolute',
        left: 115,
        right: 115,
        top: 25,
        bottom: 25,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
    },

    /* ¿Olvidaste tu contraseña? */

    olvidaste: {
        position: 'absolute',
        width: 163,
        height: 21,
        left: 217,
        top: 518,
        fontFamily: 'Overpass_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: '#000000',
    },

    /* arrow_back_ios_24px */

    arrow: {
        position: 'absolute',
        width: 24,
        height: 24,
        left: 26,
        top: 30,
    },

});


