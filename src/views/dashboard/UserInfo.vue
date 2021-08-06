<template>
  <v-container fluid>
    <AppBar />
    <v-row>
      <v-col>
        <v-card class="mx-auto mb-6" max-width="500px" rounded="lg">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Aiden Lee</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div>인기도</div>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">Violet</div>

            <div>안녕하세요 반갑습니다.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>이현규님의 관심사</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>Vue</v-chip>

              <v-chip>Vuetify</v-chip>

              <v-chip>Express</v-chip>

              <v-chip>MySQL</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto mb-6" max-width="500">
          <v-card-text>
            <div>찜한 날짜 2021-08-06</div>
            <p class="text-h4 text--primary">최근 내가 찜한 글</p>
            <p>제목 : VUETIFY 공부중</p>
            <p class="text--primary">
              <br />
              "vuetify공부하자"
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" to="/userlike"> 보러가기 </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto mb-6" max-width="500">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">내가 작성한 글 목록</p>

            <p>작성글 1</p>
            <p>작성글 2</p>
            <p>작성글 3</p>
            <p>작성글 4</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" to="/userinfo"> 보러가기 </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto mb-6" max-width="500">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">Origin</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were
                  distributed): from medieval Latin eleemosynarius, from late
                  Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>

        <v-card class="mx-auto" max-width="500">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">Origin</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were
                  distributed): from medieval Latin eleemosynarius, from late
                  Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "@/data/index";
import AppBar from "@/components/AppBar";
export default {
  components: { AppBar },
  data() {
    return {
      right: null,
      items2: [
        {
          title: data.Content[0].title,
          artist: "Foster the People",
        },
        {
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
