<script lang="ts" setup>
import {
  mdiHome,
  mdiPencilPlus,
  mdiLogin,
  mdiAccountPlus,
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiAccount,
  mdiPlusBox,
  mdiMagnify,
  mdiPost,
} from "@mdi/js";

const router = useRouter();
const currentPath = computed(
  () => `https://pso2-search.com${router.currentRoute.value.path}`
);
useSeoMeta({
  ogUrl: currentPath,
});

// 認証状況を確認
const { checkAuthState, isAuthed } = useAuth();
await checkAuthState();

// ナビゲーションドロワーの開閉
const drawer = ref(false);

// テーマ情報
const { switchTheme, darkMode } = useAppTheme();

// ダークモード切り替え
const changeTheme = () => {
  switchTheme();
};

// ダークモードを確認
changeTheme();
</script>

<template>
  <v-app>
    <v-app-bar density="comfortable" :elevation="0">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        color="primary"
        @click.stop="drawer = !drawer"
      />

      <v-tabs class="hidden-sm-and-down">
        <v-tab :prepend-icon="mdiHome" to="/">トップ</v-tab>
        <v-tab :prepend-icon="mdiMagnify" to="/search">検索</v-tab>
        <v-tab :prepend-icon="mdiPost" href="https://blog.pso2-search.com" target="_blank">
          開発ブログ
        </v-tab>
      </v-tabs>

      <template v-slot:append>
        <v-icon color="primary" :icon="mdiWeatherSunny" />
        <v-switch
          v-model="darkMode"
          class="mx-2"
          color="success"
          inset
          hide-details
          @change="changeTheme"
        />
        <v-icon color="primary" class="mr-4" :icon="mdiWeatherNight" />
      </template>
    </v-app-bar>
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" temporary>
      <ClientOnly>
        <v-list nav>
          <v-list-item :prepend-icon="mdiHome" title="ホーム" to="/" nuxt />
          <v-list-item
            v-if="!isAuthed"
            :prepend-icon="mdiAccountPlus"
            title="アカウント登録"
            to="/signup"
            nuxt
          />
          <v-list-item
            v-if="!isAuthed"
            :prepend-icon="mdiLogin"
            title="ログイン"
            to="/signin"
            nuxt
          />
          <v-list-item
            v-if="isAuthed"
            :prepend-icon="mdiPlusBox"
            title="アイテム登録"
            to="/item/create"
            nuxt
          />
          <v-list-item
            v-if="isAuthed"
            :prepend-icon="mdiAccount"
            title="アカウント"
            to="/account"
            nuxt
          />
        </v-list>
      </ClientOnly>
    </v-navigation-drawer>
    <v-main>
      <NuxtPage />
    </v-main>
    <v-footer color="primary" app absolute>
      <v-row justify="center" no-gutters>
        <v-btn
          color="secondary"
          variant="text"
          class="mx-2"
          rounded="xl"
          to="/"
          nav
        >
          ホーム
        </v-btn>
        <v-btn
          color="secondary"
          variant="text"
          class="mx-2"
          rounded="xl"
          to="/terms"
          nav
        >
          利用規約
        </v-btn>
        <v-btn
          color="secondary"
          variant="text"
          class="mx-2"
          rounded="xl"
          to="/privacy"
          nav
        >
          プライバシーポリシー
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          <strong>PSO2 Search</strong> {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style></style>
