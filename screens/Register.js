import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons, images } from "../constants";


const Register = ({ navigation }) => {
    return (

        <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: COLORS.lightGreen1 }}>
            <Image source={images.profile} style={{ height: 200, width: 200, borderRadius: 15, bottom: 30 }} />
            <Text style={{ right: 140 }}>Email</Text>
            <View style={{ backgroundColor: COLORS.white, height: 40, width: "80%", borderRadius: 10 }}>

                <TextInput placeholder="Buraya Girin" style={{ fontSize: 20, left: 10, top: 5 }} />
            </View>

            <Text style={{ right: 140 }}>Şifre</Text>
            <View style={{ backgroundColor: COLORS.white, height: 40, width: "80%", borderRadius: 10 }}>

                <TextInput placeholder="Buraya Girin" style={{ fontSize: 20, left: 10, top: 5 }} />
            </View>
            <View style={{ backgroundColor: COLORS.lightLime, borderRadius: 10, top: 10, height: 40, width: "80%" }}>
                <Button title="Kayıt Ol" color={COLORS.darkGreen} onPress={() => navigation.navigate("Login")} />
            </View>
        </View>



    )
}

export default Register