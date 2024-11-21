import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreen from "../screens/ContactListScreen";
import { createStaticNavigation } from "@react-navigation/native";

const SwitchNavigation = (addContact, contacts, loading) => {
  const SwitchNavigation = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    initialRouteName: "ContactList",
    screens: {
      AddContact: {
        screen: AddContactScreen,
        initialParams: {
          handleSubmit: addContact,
        },
      },
      ContactList: {
        screen: ContactListScreen,
        initialParams: {
          contacts: contacts,
          loading: loading,
        },
      },
    },
  });

  const switchNav = createStaticNavigation(SwitchNavigation);
  return switchNav;
};

export default SwitchNavigation;

// Dynamic navigation
{
  /* <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerLeft: null }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer> */
}
