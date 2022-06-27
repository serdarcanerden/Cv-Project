<template>
  <n-grid x-gap="50" :cols="1" item-responsive>
    <n-gi class="gridPlacement" span="200:2 400:2 600:2 800:1">
      <n-card
        :bordered="false"
        v-for="(item, i) in firstColData"
        :key="`secondCard-${i}`"
        class="faqCard"
        :class="item.expanded ? 'coloredHeader' : ''"
        :title="item.cardTitle"
      >
        <div class="emptyHeader"></div>
        <template #header-extra>
          <n-button
            class="expButton"
            icon
            text
            @click="expansionOfCard(item, i, 'First')"
          >
            <icon-base
              :height="24"
              :width="24"
              :scaleVal="1.5"
              :iconColor="'#fff'"
              :iconName="iconName(item)"
              :class="`expandIconFirst-${i}`"
              style="z-index: 1000; padding: 10px; margin-top: 17px"
            >
              <expand-more />
            </icon-base>
          </n-button>
        </template>
        <n-collapse-transition :show="item.expanded">
          {{ item.cardContent }}
        </n-collapse-transition>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script>
import data from "../assets/Faq/faq.json";
import anime from "animejs";
import IconBase from "../assets/icons/IconBase.vue";
import expandMore from "../assets/icons/expandMore.vue";

export default {
  name: "Faq",
  components: {
    IconBase,
    expandMore,
  },
  data() {
    return {
      firstColData: data,
    };
  },

  methods: {
    iconName(item) {
      if (item.expanded) {
        let name = this.$t("reduce");
        return name;
      } else {
        let name = this.$t("enlarge");
        return name;
      }
    },
    expansionOfCard(item, i, grid) {
      item.expanded = !item.expanded;
      if (item.expanded) {
        anime({
          targets: `.expandIcon${grid}-${i} path`,
          d: [
            {
              value: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z",
            },
          ],
          easing: "linear",
          duration: 300,
        });
      } else {
        anime({
          targets: `.expandIcon${grid}-${i} path`,
          d: [
            {
              value: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",
            },
          ],
          easing: "linear",
          duration: 300,
        });
      }
    },
  },
};
</script>

<style>
.n-collapse-transition {
  margin-top: 10px;
  margin-bottom: 10px;
}
.gridPlacement .n-card > .n-card__content,
.n-card > .n-card__footer {
  padding-bottom: 0 !important;
}
.emptyHeader {
  position: absolute;
  top: 10px;
  right: 0px;
  width: 0;
  height: 0;
  z-index: 500;
  opacity: 0.6;
  border-style: solid;
  border-width: 0 0 90px 170px;
  border-color: transparent transparent #1b6ec2 transparent;
}
.coloredHeader {
  border: solid 2px #f1f5f9;
}
.coloredHeader > .n-card-header {
  transition: background-color 300ms ease-in;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  background-color: #1b6ec2;
}
.coloredHeader > .n-card-header .n-card-header__main {
  transition: color 300ms ease-in;
  color: #fff;
}

.vertDiv {
  color: #1b6ec2;
}

.gridPlacement {
  padding-right: 4%;
  padding-left: 4%;
}

.faqCard {
  margin-top: 3%;
  margin-bottom: 3%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: solid 2px #f1f5f9;
}
</style>
