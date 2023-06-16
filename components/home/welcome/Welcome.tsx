import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageStyle,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobsTypes: string[] = [
  "Full Time",
  "Part Time",
  "Contractor",
  "Freelancer",
  "Internship",
  "Temporary",
];

const Welcome: React.FC<any> = () => {
  const [activeJobType, setActiveJobType] = React.useState<string>("Full Time");
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMethod="auto"
            style={styles.searchBtnImage as ImageStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {/* 
      we will use FlatList to render the tabs because we will have a lot of tabs
      */}
        <FlatList
          data={jobsTypes}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                // make styles.tab callable
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(("/search/" + item) as string);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          // keys
          keyExtractor={(item, index) => index.toString()}
          //style
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Welcome;
