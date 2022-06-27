import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import naive from "naive-ui";

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );

  let messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages: loadLocaleMessages(),
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);
app.use(naive);
app.mount("#app");
