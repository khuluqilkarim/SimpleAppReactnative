import React from "react";
import { ScrollView, Image, View, Text, StyleSheet, Alert } from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

const ButtonHandler = () => {
  Alert.alert("Button Handler");
};

const Article = () => {
  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://ce.ittelkom-sby.ac.id/wp-content/uploads/2020/09/WhatsApp-Image-2018-04-18-at-11.47.40-AM-1024x564-1.png",
        }}
        style={styles.logo}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Tiga Mahasiswa IT Telkom Surabaya Bersinar di Konferensi Internasional
          ISICO 2023
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://10tph8qrsp2c6.cdn.shift8web.com/wp-content/uploads/2023/09/ISICO-2023.jpg",
          }}
          style={styles.mainImage}
        />
        <Separator height={10} />
        <Text>
          <Text style={{ fontWeight: "bold" }}>Surabaya, September 2023</Text> -
          Tiga mahasiswa berbakat dari Program Studi Sistem Informasi Institut
          Teknologi Telkom Surabaya (ITTelkom Surabaya) telah menciptakan
          sejarah gemilang dengan prestasi luar biasa mereka di Konferensi
          Internasional Sistem Informasi dan Komputer (ISICO) 2023. Konferensi
          yang diadakan di Hotel Prama Sanur Beach, Bali, mulai dari 26 Juli
          hingga 28 Juli 2023, ini telah menjadi ajang yang paling
          dinanti-nantikan oleh para ilmuwan dan praktisi teknologi informasi di
          seluruh dunia.
        </Text>
        <Separator height={10} />
        <Text>
          Tabina Shafa Nabila Syahda, Annisa Fairuz Rizqi, dan Maharani Citra
          Adi Ratna, tiga mahasiswa berbakat dari ITTelkom Surabaya, telah
          berhasil meraih tempat mereka di panggung internasional dengan dua
          paper mereka yang luar biasa. Paper pertama mereka, berjudul “On using
          Floyd-Warshall under uncertainty for Influence Maximization in
          Instagram social network: A case study of Indonesian FnB unicorn
          company,” dan paper kedua mereka, yang berjudul “Malaysia Citizen
          Sentiment on Government Response Towards Covid-19 Disaster Management:
          Using LDA-based Topic Visualization on Twitter,” telah diterima oleh
          panitia ISICO 2023 untuk dipresentasikan dalam sesi konferensi yang
          bergengsi.
        </Text>
        <Separator height={10} />
        <Text>
          Prestasi ini tak lepas dari bimbingan dan dukungan penuh dari seorang
          dosen hebat, Mochammad Nizar Palefi Ma’ady, S.Kom, M.Kom. Dengan
          bimbingan dan dorongan dari dosen mereka, para mahasiswa ini berhasil
          mengatasi persaingan sengit di tingkat internasional dan membuktikan
          bahwa mereka adalah calon-calon terbaik dalam dunia riset teknologi
          informasi.
        </Text>
        <Separator height={10} />
        <Text>
          Konferensi ISICO 2023 adalah platform internasional yang menarik bagi
          para ahli, peneliti, dan praktisi di bidang teknologi informasi. Ini
          adalah acara yang memberi mereka kesempatan untuk berbagi pengetahuan,
          ide, dan terobosan terbaru dalam perkembangan teknologi informasi.
          Kehadiran tiga mahasiswa IT Telkom Surabaya di sini adalah bukti bahwa
          Indonesia memiliki potensi besar dalam arena ini dan dapat bersaing di
          tingkat global.
        </Text>
        <Separator height={10} />
        <Text>
          Prestasi luar biasa yang diraih oleh Tabina Shafa Nabila Syahda,
          Annisa Fairuz Rizqi, dan Maharani Citra Adi Ratna, bersama dengan
          bimbingan yang luar biasa dari dosen mereka, adalah bukti nyata dari
          komitmen ITTelkom Surabaya dalam mendukung pengembangan potensi
          akademik dan penelitian mahasiswa. Universitas ini terus berfokus pada
          pembelajaran inovatif dan penelitian berkualitas tinggi, dan kehadiran
          mereka di ISICO 2023 hanya meningkatkan reputasi kampus ini sebagai
          salah satu lembaga pendidikan terkemuka di Indonesia.
        </Text>
        <Separator height={10} />
        <Text>
          Prestasi ini tidak hanya membanggakan bagi mahasiswa dan kampus
          mereka, tetapi juga bagi Indonesia secara keseluruhan. Ini adalah
          langkah penting dalam membuktikan bahwa anak-anak muda Indonesia
          memiliki bakat dan kemampuan untuk bersaing di panggung global,
          khususnya dalam bidang teknologi informasi yang terus berkembang.
          Semoga prestasi ini menjadi inspirasi bagi generasi mendatang untuk
          mengejar mimpi mereka dan mengejar keunggulan dalam dunia akademik dan
          penelitian.
        </Text>
        <Separator height={10} />
        <Text style={{ fontWeight: "bold" }}>SEPTEMBER, 2023 </Text>
        <Separator height={10} />
        <View style={{ backgroundColor: "gray", height: 1 }} />
        <Separator height={20} />
        <Button text="Share" onPress={ButtonHandler} />
        <Separator height={70} />
      </View>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    resizeMode: "contain",
    marginVertical: 15,
  },
  titleView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eeeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainImage: {
    height: 220,
    resizeMode: "contain",
  },
  content: {
    padding: 15,
  },
});
