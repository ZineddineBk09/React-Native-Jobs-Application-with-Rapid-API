import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

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
          data?.data.map((job: any) => (
            <NearbyJobCard
              key={job?.job_id}
              job={job}
              handleNavigate={() => router.push("JobDetails/" + job?.job_id)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
