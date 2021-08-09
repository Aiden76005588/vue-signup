<template>
  <v-continer>
    <v-sheet
      class="mx-auto mt-12"
      color="white"
      elevation="20"
      height="90%"
      width="90%"
    >
      <v-row
        ><v-col>
          <v-img
            class="ml-4"
            height="250"
            width="400"
            src="https://images.unsplash.com/photo-1626379801357-537572de4ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80"
          ></v-img
        ></v-col>
        <v-col>제목 : 오늘 먹은 음식</v-col>
        <v-col>도넛 맛있다.</v-col>
      </v-row>
      <v-col>askdjbakjsbk</v-col>
    </v-sheet>
  </v-continer>
</template>

<script>
import data from "@/data";
export default {
  data() {
    const contentId = Number(this.$route.params.contentId);
    const userId = Number(this.$route.params.userId);

    const feedImages = data.FeedImages;
    console.log(userId);
    return {
      contentId: contentId,
      userId: userId,

      feedImages: feedImages,
    };
  },
};
</script>

<style lang="sass" scoped></style>
