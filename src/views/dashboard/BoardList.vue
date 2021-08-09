<template>
  <div class="mt-10" max-width="800px">
    <AppBar />
    <v-container>
      <v-row>
        <v-col>
          <div class="title">최근 게시글</div>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col v-for="(image, i) in feedImages" :key="i">
          <v-card
            elevation="12"
            height="230"
            width="210"
            color="blue"
            class="mr-4"
            link
            v-model="items"
            @click="rowClick"
          >
            <v-img height="213" :src="image.url"></v-img>
          </v-card>
          <Modal :items="items"></Modal>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import data from "@/data";
import AppBar from "@/components/AppBar";
export default {
  components: { Modal, AppBar },

  data() {
    let items = data.FeedImages.sort((a, b) => {
      return b.user_id - a.user_id;
    });
    items = items.map((contentItem) => {
      return {
        ...contentItem,
        user_name: data.FeedImages.filter(
          (userItem) => userItem.user_id === contentItem.user_id
        )[0].name,
      };
    });
    console.log("items------------", items);

    const feedImages = data.FeedImages;
    console.log(data);
    return {
      feedImages: feedImages,
      items: items,
    };
  },

  methods: {
    rowClick(item) {
      console.log("item-----------", item);
      this.$router.push({
        path: `/board/free/detail/`,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
