<template>
  <v-container>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 회원정보 </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

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
      items: [
        { title: "회원정보", icon: "mdi-view-dashboard", to: "/userinfo" },
        { title: "자유게시판", icon: "mdi-image", to: "/boardlist" },
        { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
