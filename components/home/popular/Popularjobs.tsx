import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";

const Popularjobs: React.FC<any> = () => {
  const router = useRouter();
  const { data, loading, err, refetch } = useFetch({
    endpoint: "search",
    params: {
      query: "React",
      page: "1",
      num_pages: "1",
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Content: Jobs */}
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : err ? (
          <Text style={{}}>Something went wrong!</Text>
        ) : (
          <FlatList
            data={data?.data}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
