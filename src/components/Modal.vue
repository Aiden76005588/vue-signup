<template>
  <v-container>
    <v-btn @click="dialog2 = true"></v-btn>
    <v-dialog v-model="dialog2" max-width="500px">
      <v-card>
        <v-card-title> Dialog 2 </v-card-title>
        <v-card-text>
          <v-btn color="primary" dark @click="dialog3 = !dialog3">
            Open Dialog 3
          </v-btn>
          <v-select
            :items="select"
            label="A Select List"
            item-value="text"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog2 = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me 2",
        },
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
