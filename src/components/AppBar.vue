<template>
  <v-container>
    <v-navigation-drawer
      color="grey lighten-5"
      floating
      class="pa-4"
      permanent
      v-model="drawer"
      app
    >
      <v-col class="ml-8">
        <v-img
          width="130px"
          height="90px"
          lazy-src="@/assets/violetmind_logo.png"
          src="@/assets/violetmind_logo.png"
        ></v-img>
      </v-col>

      <v-row class="mt-5">
        <v-col>
          <v-row>
            <v-col class="text-center">
              <v-avatar class="outlined" size="80">
                <v-avatar size="70">
                  <v-img
                    lazy-src="@/assets/violetmind_logo.png"
                    src="@/assets/violetmind_logo.png"
                  ></v-img>
                </v-avatar>
              </v-avatar>

              <v-container class="mt-5">
                <v-row>
                  <v-col>
                    <div class="mt-4 title">Aiden Lee</div>
                    <div class="mt-1 subtitle-2 grey--text">Hello</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <div class="subtitle-2">게시글</div>
                    <div class="subtitle-2 grey--text">100</div>
                  </v-col>
                  <v-col>
                    <div class="subtitle-2">찜한 게시글</div>
                    <div class="subtitle-2 grey--text">10</div>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer></v-container
  >
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "회원정보", icon: "mdi-view-dashboard", to: "/userinfo" },
        { title: "자유게시판", icon: "mdi-image", to: "/boardlist" },
        { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-avatar.outlined {
  border: 2px solid #e7596f;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.v-col.ml-7 {
  top: 0px;
  background-color: black;
}
</style>
