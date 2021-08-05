<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-app-bar-title>Violet Mind</v-app-bar-title>

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <a href="javascript:void(0);" @click="GotoPage()">login</a>
      <v-spacer></v-spacer>

      <v-btn to="/signup" text>
        <span class="mr-2">회원가입</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn to="/signin" text>
        <span class="mr-2">로그인</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    GotoPage() {
      location.href = "/signup";
      this.$router.go(); // 같은 페이지에서 뭔가를 처리해야할때 사용
      // this.$router.push({ path: "/signup" }); //같은페이지에서 계속 요청을 하면 duplicated 에러가 발생할수있음.
    },
  },
  data: () => ({
    //
  }),
};
</script>
