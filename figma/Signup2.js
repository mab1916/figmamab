import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/overpass';
import { MaterialIcons } from '@expo/vector-icons';
import { Overpass_400Regular } from '@expo-google-fonts/overpass';

export default function Signup2() {
    useFonts({ Overpass_400Regular });
    return (
        <React.Fragment>
            <View style={signup2.code}>
                <Image style={signup2.building22} source={require('../assets/building22.png')} />
                <View style={signup2.rectangle72}>
                    <View style={signup2.rectangle71} />
                </View>
                <Image style={signup2.logowhite} source={require('../assets/logo-white.png')} />
                <Image style={signup2.kyc} source={require('../assets/kyc.png')} />
                <View style={signup2.group4}>
                    <Text style={signup2.email}>Nombre(s)*</Text>
                    <View style={signup2.component1}>
                        <View style={signup2.rectangle5}>
                            <Text style={signup2.email1}>Nombre(s)</Text>
                        </View>
                    </View>
                    <Text style={signup2.contraseña}>Apellido Paterno*</Text>
                    <View style={signup2.component2}>
                        <View style={signup2.rectangle5}>
                            <Text style={signup2.contrasen}>Apellido Paterno</Text>
                        </View>
                    </View>
                    <Text style={signup2.repetir}>Apellido Paterno*</Text>
                    <View style={signup2.component3}>
                        <View style={signup2.rectangle5}>
                            <Text style={signup2.paterno}>Apellido Paterno</Text>
                        </View>
                    </View>
                </View>
                <Text style={signup2.iniciar}>Ingresa tu Nombre</Text>
                <View style={signup2.mainbutton}>
                    <View style={signup2.mainrectangle}>
                        <Text style={signup2.maininiciar}>Continuar</Text>
                    </View>
                </View>
                <View style={signup2.arrow}>
                    <MaterialIcons name="keyboard-arrow-left" size={35} color="white" />
                </View>
            </View>
        </React.Fragment>
    );
}


const signup2 = StyleSheet.create({
    /* signup2 */
    
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
    
    /* kyc 1 */
    kyc: {
        position: 'absolute',
        width: 157,
        height: 89,
        left: 128,
        top: 301,
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
        top: 444,
    },

    /* Component 2 */

    component2: {
        position: 'absolute',
        width: 349,
        height: 55,
        left: 32,
        top: 544,
    },

    /* Component 3 */

    component3: {
        position: 'absolute',
        width: 349,
        height: 55,
        left: 32,
        top: 644,
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
        top: 522,
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
        top: 422,
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
        top: 622,
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
        width: 200,
        height: 37,
        left: 100,
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


