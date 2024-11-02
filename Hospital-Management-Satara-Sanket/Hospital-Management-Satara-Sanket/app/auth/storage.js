import * as SecureStore from 'expo-secure-store';


const key="UserId";

const storeData = async (user) => {
    try{
        await SecureStore.setItemAsync(key,JSON.stringify(user));
    }catch(err){
        console.log("Error While Storing the data",err);
    }
}

const getData = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error While Retrive the data",error);
    }
}

const removeData = async () => {
    try{
        await SecureStore.deleteItemAsync(key);
    }catch(err){
        console.log("Error while deleting user",error);
    }
}

export default {
    getData,storeData,removeData
}