// import {
//   Alert,
//   Button,
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React from "react";
// import RootNavigator from "src/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import Header from "src/components/Header";
// import { todoAdded } from "src/store/slices/todo";

// type Props = {};

// const App = (props: Props) => {
//   const useReducer = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   console.log("🚀 ~ App ~ useReducer:", useReducer);
//   return (
//     <View>
//       <Text>Hslssl</Text>
//       <Header />
//       <Button
//         onPress={() => {
//           Alert.alert('jj')
//           dispatch(
//             todoAdded({
//               id: 1,
//               text: "New Todo",
//               completed: true,
//             })
//           );
//         }}
//         title="Press here.."
//         color={"red"}
//       />
//       {/* <RootNavigator /> */}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ApiService, { ApiCallOptions } from "./src/api/api"; // Assuming ApiService is in a separate file

const App = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an instance of ApiService with the base URL
    const apiService = new ApiService({
      baseURL: "https://jsonplaceholder.typicode.com",
    });

    // Define the API call options
    const apiCallOptions: ApiCallOptions = {
      endpoint: "/posts",
      method: "get",
      headers: {
        // You can add custom headers if needed
      },
      params: {
        // You can add query parameters if needed
      },
      data: {
        // You can add request body data if needed
      },
    };

    // Make the API call using the ApiService instance
    apiService
      .callApi(apiCallOptions)
      .then((responseData) => {
        setPostData(responseData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      {postData ? (
        <View>
          <Text>API Response:</Text>
          <Text>{JSON.stringify(postData, null, 2)}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

export default App;
