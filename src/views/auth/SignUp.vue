<template>
  <v-container class="mt-12">
    <v-card max-width="600" class="mx-auto" elevation="14">
      <v-row class="pa-6">
        <v-col class="ma-3">
          <div><h3>간편회원가입</h3></div>
          <button
            type="button"
            class="member-button facebook-button login__fb-btn"
          >
            <span class="facebook-button__inner"
              ><img
                src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"
                class="facebook-button__img"
                width="24"
                height="24"
                alt="facebook"
              /><span class="facebook-button__txt"
                >페이스북으로 회원가입</span
              ></span
            >
          </button>
          <div class="login__l-or">OR</div>
          <v-form ref="form" v-model="valid" lazy-validation class="mb-6">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="이름"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="이메일"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="비밀번호"
              required
            >
            </v-text-field>

            <v-text-field
              v-model="passwordConfirm"
              :rules="passwordRules"
              label="비밀번호 확인"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
              block
            >
              회원가입
            </v-btn>
          </v-form>

          <span>
            아이디가 이미 있으신가요?
            <a href="/signin"> 로그인으로 돌아가기</a>
          </span>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length > 8) || "Password must be more than 8 characters",
    ],

    passwordConfirm: "",

    checkbox: false,
  }),

  methods: {
    validate() {
      if (this.password === this.passwordConfirm) {
        this.$refs.form.validate();
      } else {
        alert("Password must match");
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.passwordConfirm || "Password must match";
    },
  },
};
</script>

<style>
.login__fb-btn {
  margin-top: 12px;
  width: 100%;
}
.facebook-button {
  background-color: #3c5a99;
  line-height: 20px;
}
.facebook-button__img {
  display: inline-block;
  margin-right: 16px;
}
.facebook-button__inner {
  display: inline-block;
  line-height: 0;
}
.facebook-button__txt {
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  vertical-align: top;
  margin-top: 4px;
}
.member-button,
.member-button:disabled {
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
}
.member-button {
  position: relative;

  text-align: center;

  font-weight: 700;
  cursor: pointer;

  padding: 0 20px;
}
button {
  cursor: pointer;
  margin-bottom: 10px;
}
.login__l-or {
  position: relative;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #c5cbd0;
  text-align: center;
  vertical-align: top;
  line-height: 14px;
}
.login__l-or:after,
.login__l-or:before {
  position: absolute;
  top: 6px;
  content: "";
  display: block;
  width: 160px;
  height: 1px;
  background-color: #dddfe4;
}

.login__l-or {
  position: relative;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #c5cbd0;
  text-align: center;
  vertical-align: top;
  line-height: 14px;
}

.login__l-or:after,
.login__l-or:before {
  position: absolute;
  top: 6px;
  content: "";
  display: block;
  width: 160px;
  height: 1px;
  background-color: #dddfe4;
}
.login__l-or:before {
  left: 0;
}
.login__l-or:after {
  right: 0;
}
.login__l-or:after,
.login__l-or:before {
  position: absolute;
  top: 6px;
  content: "";
  display: block;
  width: 160px;
  height: 1px;
  background-color: #dddfe4;
}
.login__l-or:after,
.login__l-or:before {
  position: absolute;
  top: 6px;
  content: "";
  display: block;
  width: 160px;
  height: 1px;
  background-color: #dddfe4;
}
</style>
