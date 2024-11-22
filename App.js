import React,{useState} from 'react';
import {View, Text, TextInput,Button,FlatList, StyleSheet, Picker} from 'react-native';

const App=()=>{
    const[dishName, setDishName]= useState('');
    const[description, setDescription]= useState('');
    const[course, setCourse]= useState('starter');
    const[price, setPrice]= useState('');
    const[menuItems, setMenuItems]= useState([]);

    const courses=['Starter', 'Main course', 'Dessert'];
    const addMenuItems=()=>{
        if(dishName && description && price){
            const newItems={
                id:Math.random().toString,
                name:dishName,
                description:description,
                course:course,
                price:price
            };
            setMenuItems([...menuItems, newItems]);
            setDishName('');
            setDescription('');
            setPrice('');
        }else{
            alert('Please provide information in all fields');
        }
    };
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.tittle}>Christoffel's Menu</Text>
            <TextInput
            style={StyleSheet.input}
            placeholder="Dish Name"
            value={dishName}
            onChangeText={setDishName}/>
            <TextInput
            style={StyleSheet.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}/>
            <Picker
            selectedValue={course}
            onValueChange={(itemValue)=> setCourse(itemValue)}
            style={StyleSheet.picker}>
                {course.localeCompare((courseItem, index)=>(
                    <Picker.Item label={courseItem}
                    value={courseItem}key={index}/>
                ))}
            </Picker>
            <TextInput
            style={StyleSheet.input}
            placeholder="Price"
            value={price}
            keyboardType="numeric"
            onChangeText={setPrice}/>

            <Button title="Select Dish"
            onPress={addMenuItems}/>
            <Text style={StyleSheet.subTitle}>Christoffel's Menu</Text>
            <Text>Total Menu Items:{menuItems.length}</Text>
            <FlatList
            data={menuItems}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View style={StyleSheet.menuItems}>
                    <Text style={StyleSheet.menuItemText}>{item.name}-{item.course}-${item.prie}</Text>
                    <Text>{item.description}</Text>
                    </View>
            )}
            />
        </View>
    );
};
const styles=StyleSheet.create({
    containe:{
        padding:20,
        flex:1,
        backgroundColor:'ADD8E6',
    },
    title:{
        fontSize:24,
        fotWeight:'bold',
        textAlign:'center',
        marginBottom:20,
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginVertical:10,
        borderRadius:5,
    },
    picker:{
        height:50,
        width:'100',
        marginVertical:10,
    },
    subTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
    },
    menuItems:{
        pading:10,
        backgroundColor:'FFB6C1',
        borderButtomWidth:1,
        borderBottomColor:'#eee',
        marginVertical:5,
    },
    menuItemText:{
        fontSize:18,
    },
});
export default App;