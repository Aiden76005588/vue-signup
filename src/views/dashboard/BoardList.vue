<template>
  <div class="mt-10" max-width="800px">
    <AppBar />
    <vs-row vs-justify="center">
      <vs-col
        max-width="500px"
        v-for="(image, i) in feedImages"
        :key="i"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
      >
        <vs-card class="cardx">
          <div slot="header">
            <h3>Hello world !</h3>
          </div>
          <div>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</span
            >
          </div>
          <div slot="media">
            <img :src="image.url" alt="" />
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                type="gradient"
                color="danger"
                icon="favorite"
              ></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button
                color="rgb(230,230,230)"
                color-text="rgb(50,50,50)"
                icon="settings"
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <!-- <v-container>
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
        </v-col>
      </v-row>
    </v-container> -->

    <!-- to, router 전부 안먹힌다. -->
    <div class="con-example-images">
      <div class="title">최근 게시글</div>

      <vs-images @click="rowClick" :hover="hover">
        <vs-image
          :key="index"
          v-for="(image, index) in 20"
          :src="`https://picsum.photos/400/400?image=3${index}`"
        />
      </vs-images>
    </div>

    <!-- 사진 사이즈를 맞춰줘야된다 아니면 blur옵션에서 오류뜸 -->

    <!-- <div class="con-example-images">
      <vs-images :hover="hover">
        <vs-image :key="i" v-for="(image, i) in feedImages" :src="image.url">
        </vs-image>
      </vs-images>
    </div> -->
  </div>
</template>

<script>
import data from "@/data";
import AppBar from "@/components/AppBar";
export default {
  components: { AppBar },

  data() {
    // let items = data.FeedImages.sort((a, b) => {
    //   return b.user_id - a.user_id;
    // });
    // items = items.map((contentItem) => {
    //   return {
    //     ...contentItem,
    //     user_name: data.FeedImages.filter(
    //       (userItem) => userItem.user_id === contentItem.user_id
    //     )[0].name,
    //   };
    // });
    // console.log("items------------", items);

    const feedImages = data.FeedImages;
    // console.log(data);
    return {
      hover: "blur",
      feedImages: feedImages,
      // items: items,
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

<style scoped>
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
.title {
  margin-left: 30px;
}
.cardx {
  margin-right: 5px;
}
</style>
