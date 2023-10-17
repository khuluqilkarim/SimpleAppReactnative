import React, { createRef, useState } from "react";
import { View, StatusBar, DrawerLayoutAndroid } from "react-native";
import Article from "./screens/article";
import Header from "./components/header";
import Button from "./components/button";
import List from "./screens/list";
import Separator from "./components/separator";

const App = () => {
  const [page, setPage] = useState("list");
  const drawer = createRef();

  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  const NavigationView = (props) => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(props.drawer, "list")} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, "article")}
      />

      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <NavigationView drawer={drawer} />}
    >
      <View style={{ paddingTop: 0 }}>
        <StatusBar style="auto" backgroundColor="#AA0002" />
        <Header drawer={drawer} />
        {page == "list" && <List />}
        {page == "article" && <Article />}
      </View>
    </DrawerLayoutAndroid>
  );
};
export default App;
