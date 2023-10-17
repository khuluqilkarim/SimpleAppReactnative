import React from "react"; 
import { View, TouchableOpacity, Image, StyleSheet } from "react-native"; 

    const Header = (props) => { 
        return ( 
            <View style={styles.header}> 
            <TouchableOpacity onPress={() => props.drawer.current.openDrawer()}> 
            <Image 
            source={require("../assets/menu.png")} 
            style={{ width: 18, height: 18 }} 
            /> 
            </TouchableOpacity> 
            <View> 
                <View style={styles.iconsView}> 
                <Image 
                source={require("../assets/facebook.png")} 
                style={styles.icons} 
                /> 
                <Image 
                source={require("../assets/youtube.png")} 
                style={styles.icons} 
                /> 
                <Image source={require("../assets/twitter.png")}
                style={styles.icons} 
                /> 
                <Image source={require("../assets/search.png")} 
                style={styles.icons} 
                /> 
                </View> 
            </View> 
        </View> 
    );
 }; 
    export default Header; 
    const styles = StyleSheet.create({ 
        header: { 
            backgroundColor: "#AA0002", 
            flexDirection: "row", 
            justifyContent: "space-between", 
            padding: 15, 
            }, 
            stripeMenu: { 
                width: 23, 
                backgroundColor: "white", 
                height: 3, }, 
                iconsView: { 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center", }, 
                    icons: { width: 36, 
                    height: 16, 
                    resizeMode: "contain", 
                }, 
            });