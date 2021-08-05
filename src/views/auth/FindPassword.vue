<template>
  <v-container class="mt-16">
    <v-card max-width="600" class="mx-auto" elevation="14">
      <v-row>
        <v-col class="ma-6">
          <div class="findpassword-title">
            <h2>비밀번호 찾기</h2>
          </div>
          <div>
            비밀번호를 찾고자 하는 Violet Mind 이메일 ID를 입력해주시면 <br />
            해당 메일 주소로 비밀번호 재설정 링크를 보내드립니다
          </div>

          <v-form class="mt-3" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="이메일"
              required
            ></v-text-field>

            <div class="login-button">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4 mt-3 mb-10"
                @click="validate"
                block
              >
                이메일 보내기
              </v-btn>
            </div>

            <div>
              <span>
                <a href="/signin">로그인으로 돌아가기</a>
              </span>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.findpassword-title {
  margin-bottom: 20px;
}
</style>
