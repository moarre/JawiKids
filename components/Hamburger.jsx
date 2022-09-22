import React from 'react'

function Hamburger() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerPosition='left'
                drawerType="front"
                edgeWidth={100}
                hideStatusBar={false}
                overlayColor='#00000090'
                drawerStyle={{
                    backgroundColor: '#e6e6e6',
                    width: 250
                }}
                screenOptions={{
                    headerShown: true,
                    swipeEnabled: true,
                    gestureEnabled: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#723ec8'
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontSize: 23,
                        fontWeight: 'bold'
                    }
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name="home"
                                size={focused ? 25 : 20}
                                color={focused ? '#723ec8' : '#9d7ad9'}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="FollowUs"
                    component={FollowUs}
                    options={{
                        title: 'Follow Us',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name="at"
                                size={focused ? 25 : 20}
                                color={focused ? '#723ec8' : '#9d7ad9'}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="RateUs"
                    component={RateUs}
                    options={{
                        title: 'Rate Us',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name="star"
                                size={focused ? 25 : 20}
                                color={focused ? '#723ec8' : '#9d7ad9'}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Hamburger