<template>
  <n-space class="insideWriting" vertical>
    <n-layout has-sider class="layoutWriting">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-input v-model:value="value" type="text" placeholder="Basic Input" />
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <span>Content</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { ref, h } from "vue";
import { NIcon } from "naive-ui";
import { BookOutline as BookIcon } from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
  },
  {
    label: "Dance Dance Dance",
    key: "Dance Dance Dance",
    icon: renderIcon(BookIcon),
  },
];

export default {
  data() {
    return {
      value: ref(null),
      activeKey: ref(null),
      collapsed: ref(true),
      menuOptions,
    };
  },
};
</script>

<style>
.n-menu.n-menu--collapsed .n-menu-item-content .n-menu-item-content__icon {
  color: #fff;
}
/* .n-menu .n-submenu .n-menu-item-content {
  color: #fff;
} */
.n-menu .n-menu-item-content .n-menu-item-content__icon {
  color: #fff;
}
.n-menu .n-menu-item-content .n-menu-item-content__arrow {
  color: #fff;
}
.n-menu .n-menu-item-content .n-menu-item-content-header {
  color: #fff;
}
.n-layout-sider {
  min-height: 90vh;
  background-color: transparent !important;
}
.n-layout {
  min-height: 90vh;
  background-color: transparent !important;
}
</style>

<style scoped>
.insideWriting {
  margin-top: 5vh;
  border-top: #f1f5f9 solid thin;
}
</style>
