import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export default function TabsLayout(){
    return <Tabs screenOptions={{
        tabBarLabelPosition:"below-icon",
        tabBarShowLabel:true,
        headerTitle:"Appx",
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#000",
        tabBarStyle:{
            backgroundColor:"red",
        },
        headerStyle:{
            backgroundColor:"red",
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
            fontWeight:"bold",
        }

    }}>
        <Tabs.Screen name="index" options={{
            tabBarLabel:"Home",
            tabBarIcon:({color})=>(
                <FontAwesome name="home" size={24} color={color} />
            ),
            title:'Home'
        }}/>
        <Tabs.Screen name="explore" options={{
            tabBarLabel:"Explore",
            tabBarIcon:({color})=>(
                <FontAwesome name="search" size={24} color={color} />
            ),
            title:"explore"
        }} />
        <Tabs.Screen name="profile" options={{
            tabBarLabel:"My Profile",
            tabBarIcon :({color}) => (
                <FontAwesome name="user" size={24} color={color} />
            ),
            tabBarBadge:4,
            title:"exlpore"
        }} />
    </Tabs>
}