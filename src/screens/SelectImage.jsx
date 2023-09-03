import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import GreenButton from '../components/GreenButton'
import { colors } from '../global/colors'
import { saveImage } from '../features/user/userSlice'
import { insertProfileImage } from '../SQLite'


const SelectImage = ({navigation}) => {

   const [image, setImage] = useState('')
   const dispatch = useDispatch()

   const verifyCameraPermissions = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync()
      if (!granted) {
         return false
      }
      return true
   }

   const pickImage = async () => {
      const isCameraOk = await verifyCameraPermissions()
      if (isCameraOk) {
         let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
         })
         if (!result.canceled) {
            setImage(result.assets[0].uri)
         }
      }
   }

   const confirmImage = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if (status === "granted") {
         const response = await MediaLibrary.createAssetAsync(image)
         dispatch(saveImage(response.uri))
      }
      navigation.goBack()
   }

   return (
      <View style={styles.container}>
         {image ? (
            <>
               <Image source={{ uri: image }} style={styles.image} />
               <GreenButton title="Repetir" onPress={pickImage} />
               <GreenButton title="Confirmar Foto" onPress={confirmImage} />
            </>
         ) : (
            <>
               <View style={styles.noPhotoContainer}>
                  <Text style={styles.text}>Toma una Foto</Text>
               </View>
               <GreenButton title="Cámara" onPress={pickImage} />
            </>
         )}
      </View>
   )
}

export default SelectImage

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor:colors.white,
      paddingTop: 50,
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 50,
   },
   image: {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderRadius: 10,
      borderColor: colors.green,
   },
   noPhotoContainer: {
      width: 300,
      height: 300,
      borderRadius: 10,
      borderWidth: 3,
      backgroundColor: colors.yellow,
      borderColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      color: colors.white,
      fontSize: 30
   }
})