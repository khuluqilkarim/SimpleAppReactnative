import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const data = [
  {
    id: 1,
    title:
      "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 2,
    title:
      "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 3,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 4,
    title: "Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 5,
    title:
      "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
  {
    id: 6,
    title:
      "Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional ISICO 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
  },
  {
    id: 7,
    title:
      "Pentingnya Manajemen Konfigurasi dalam Rekayasa Perangkat Lunak dan Penerapannya",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/manajemen-konfigurasi.jpeg",
  },
  {
    id: 8,
    title: "Model-Model Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle-.jpeg",
  },
  {
    id: 9,
    title: "Software Development Life Cycle (SDLC)",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/10/software-development-life-cycle.jpg",
  },
  {
    id: 10,
    title:
      "Sidang Terbuka Senat ITTelkom Surabaya Menyambut Dies Natalis ke-5, Pengukuhan Mahasiswa Baru dan PKKMB Dewangkara Maetala 2023",
    image:
      "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/institut-teknologi-telkom-surabaya.jpg",
  },
];

const List = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ paddingBottom: 100 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
});
