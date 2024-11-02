import { StyleSheet, Text, View,FlatList,TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityIndicator from '../components/ActivityIndicator'
import Firebase from '../config/firebase';
import Screen from '../components/Screen';
import { Talukas } from '../config/Taluka';
import HospitalCard from '../components/HospitalCard';
import { AntDesign } from '@expo/vector-icons';



export default function HomeScreen({navigation}) {
    const [selectedId,setSelectedId] = useState([]);
    const [allHospitals,setHospitals] = useState([]);
    const [SortedHospitals,setSortedHospitals] = useState([]);
    const [loading,setLoading] = useState(false);

    const db=Firebase.firestore();

    useEffect(() => {
        setLoading(true);
        try{

            db.collection('hospitals').onSnapshot(
                snapshot => {
                  setHospitals(snapshot.docs.map(
                    doc => ({
                      id:doc.id,
                      Contact_No: doc.data().Contact_No,
                      Images : doc.data().Images,
                      Address : doc.data().Address,
                      email: doc.data().email,
                      name:doc.data().name,
                      Taluka: doc.data().Taluka.label
                    })
                  ))
                }
            );
            GetHospitals(allHospitals);
        } catch(err) {
            console.log(error);
        }
        setLoading(false);
    
    
    },[]);

    const GetHospitals = (data) => {
        setSelectedId(data.id);
        const newHospitals =  allHospitals.filter(hospital => hospital.Taluka.toLowerCase() === data.eng.toLowerCase());
        setSortedHospitals(newHospitals);
    }

    //Item
    const Item = ({item, onPress, backgroundColor, textColor}) =>{
        return(
        <TouchableOpacity onPress={onPress} style={[styles.item,backgroundColor]}>
            <Text style={textColor}>{item.eng}</Text>
        </TouchableOpacity>
        )
    }

    const renderItem = ( {item} ) => {
        const backgroundColor = item.id === selectedId ? "#FDCE93" : "#60F4F5";
        const color = 'black';

        return (
            // <Text>Code</Text>
            <Item 
                    item={item}
                    onPress={() => {GetHospitals(item)}}
                    backgroundColor={{backgroundColor}}
                    textColor={{color}}
            />
        )
    }

    return (
   <>
    <ActivityIndicator />
    <Screen style={styles.container} >
            <Text style={styles.text}>Hospitals in Satara</Text>
            <View style={styles.TalukaContainer}>
                    <FlatList

                        style={styles.flat}
                        data={Talukas}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        extraData={selectedId}
                    
                    />
            </View>
            <ScrollView>
                {
                    SortedHospitals.length ? SortedHospitals.map(hospital => (
                        <HospitalCard 

                        key={hospital.id}
                        details={hospital}
                        onPress={() => navigation.navigate('Hospital_Details',{hospital})}
                        
                        />
                    )) : <Text style={styles.text}>No Hospital Found</Text>

                }
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={styles.profileButton} >
                <AntDesign name="user" size={30} color="white"/>
            </TouchableOpacity>
    </Screen>
   </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start'
    },
    TalukaContainer:{
      height:80,
      width:"100%"
    },
    flat:{ 
        padding:10,
        borderTopWidth:3,
        borderTopColor:"black",
        borderBottomWidth:3,
        borderBottomColor:"black",
        marginRight:10,
        width:"100%"
    },
    item:{
      padding:10,
      // height:40,
      backgroundColor : "grey",
      borderRadius:12,
      marginLeft:10,
      marginRight:10,
      justifyContent:"flex-start",
      textAlign:'center',  
      alignSelf:"center"
   },
    title :{
      margin:10,
      fontSize:20
  },
  profileButton: {
    height: 70,
    width: 70,
    bottom:0,
    right:10,
    backgroundColor: "#1DA1F2",
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent:'center',
    margin:20,
    borderRadius:50,
    elevation:10
  },
  text:{
    textAlign:'center',
    padding:40,
    fontSize:20
  }
})