import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Register } from './Register';
import { CustomButton } from '../components';
import { useNavigation } from "@react-navigation/native";


import { images, COLORS, SIZES, FONTS } from '../constants'

const Login = () => {
    const navigation = useNavigation();


    function renderHeader() {

        return (
            <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
                <ImageBackground
                    source={images.loginBackground}
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        left: 0
                    }}
                    resizeMode="cover"
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: "flex-end",
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text style={{ width: "80%", color: COLORS.white, ...FONTS.largeTitle, lineHeight: 45 }}>
                            Vestel Geleceğin Telefonları Gururla Sunar
                        </Text>

                    </LinearGradient>

                </ImageBackground>


            </View>
        )
    }

    function renderDetail() {
        return (

            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding
            }}>
                {/*Description*/}

                <Text style={{
                    marginTop: SIZES.radius,
                    width: "70%",
                    ...FONTS.body3,
                    color: COLORS.gray
                }}>
                    Vestel, 1984 yılında başlayan faaliyetlerini 1994 yılından beri Zorlu Holding bünyesinde sürdüren bir şirkettir.
                </Text>

                {/*Buttons*/}
                <View style={{
                    flex: 1,
                    justifyContent: "center"
                }}>

                    {/*Login*/}

                    <CustomButton buttonText="Giriş Yap"
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        onPress={() => navigation.navigate("Home")}
                        buttonContainerStyle={{
                            paddingVertical: 18,
                            borderRadius: 20
                        }}
                    />


                    {/*Sign Up*/}
                    <CustomButton buttonText="Kayıt Ol"
                        buttonContainerStyle={{ marginTop: SIZES.radius, paddingVertical: 18, borderRadius: 20, borderColor: COLORS.darkLime, borderWidth: 1 }}
                        colors={[]}
                        onPress={() => navigation.navigate("Register")}

                    />


                </View>

            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar barStyle="light-content" />
            {/* Header*/}


            {renderHeader()}
            {/* Detail */}
            {renderDetail()}

            {/* Buttons */}



        </View>
    )
}

export default Login;