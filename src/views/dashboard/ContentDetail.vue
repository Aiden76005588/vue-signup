<template>
  <v-container>
    <AppBar />
    <v-continer>
      <v-sheet
        :class="radius"
        class="mx-auto mt-12"
        color="white"
        elevation="20"
        height="500px"
        width="450px"
      >
        <v-row class="text-center"
          ><v-col>
            <v-img
              class="mx-auto"
              height="250"
              width="400"
              src="https://images.unsplash.com/photo-1626379801357-537572de4ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80"
            ></v-img
          ></v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>제목 : 오늘 먹은 음식</v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col>내용 : 도넛 맛있다. </v-col>
        </v-row>
        <v-col>askdjbakjsbk</v-col>
      </v-sheet>
    </v-continer>
  </v-container>
</template>

<script>
import data from "@/data";
import AppBar from "@/components/AppBar";
export default {
  components: { AppBar },
  data() {
    const contentId = Number(this.$route.params.contentId);
    const userId = Number(this.$route.params.userId);

    const feedImages = data.FeedImages;
    console.log(userId);
    return {
      contentId: contentId,
      userId: userId,

      feedImages: feedImages,
      rounded: ["0", "sm", "md", "lg", "xl", "pill", "circle"],
    };
  },
  computed: {
    radius() {
      let rounded = "rounded";
      const value = this.rounded[this.model];

      if (value !== "md") {
        rounded += `-${value}`;
      }

      return rounded;
    },
  },
};
</script>

<style lang="sass" scoped></style>
