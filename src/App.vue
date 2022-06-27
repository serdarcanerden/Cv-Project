<template>
  <div
    class="Menu"
    v-show="menuAct"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="Menu-list card" :style="cardStyle">
      <n-button
        text
        icon
        @click="menuAct = false"
        @mouseenter="closeIcon = true"
        @mouseleave="closeIcon = false"
        class="cancelButton"
      >
        <icon-base
          :width="24"
          :height="24"
          :iconColor="closeIcon ? '#1b6ec2' : '#fff'"
          :scaleVal="3"
        >
          <cancel-icon></cancel-icon>
        </icon-base>
      </n-button>
      <n-button
        color="#1b6ec2"
        text
        circle
        class="langButton semi-bold"
        @click="languageSwitch()"
        >{{ langVal }}
      </n-button>
      <router-link
        @click="menuAct = false"
        id="abt"
        class="semi-bold Menu-list-item"
        to="/"
      >
        {{ $t("about") }}
        <span class="Mask"
          ><span>{{ $t("about") }}</span></span
        >
        <span class="Mask"
          ><span>{{ $t("about") }}</span></span
        >
      </router-link>
      <router-link
        @click="menuAct = false"
        id="wrt"
        class="semi-bold Menu-list-item"
        to="/writing"
      >
        {{ $t("writing") }}
        <span class="Mask"
          ><span>{{ $t("writing") }}</span></span
        >
        <span class="Mask"
          ><span>{{ $t("writing") }}</span></span
        >
      </router-link>
      <router-link
        @click="menuAct = false"
        id="faq"
        class="semi-bold Menu-list-item"
        to="/faq"
      >
        {{ $t("faq") }}
        <span class="Mask"
          ><span>{{ $t("faq") }}</span></span
        >
        <span class="Mask"
          ><span>{{ $t("faq") }}</span></span
        >
      </router-link>
      <router-link
        @click="menuAct = false"
        id="question"
        class="semi-bold Menu-list-item"
        to="/question"
      >
        {{ $t("question") }}
        <span class="Mask"
          ><span> {{ $t("question") }}</span></span
        >
        <span class="Mask"
          ><span> {{ $t("question") }}</span></span
        >
      </router-link>
      <router-link
        @click="menuAct = false"
        id="con"
        class="semi-bold Menu-list-item"
        to="/contact"
      >
        {{ $t("contact") }}
        <span class="Mask"
          ><span> {{ $t("contact") }}</span></span
        >
        <span class="Mask"
          ><span> {{ $t("contact") }}</span></span
        >
      </router-link>
    </div>
  </div>
  <div v-show="!menuAct">
    <div class="routeName heavy">{{ routeName }}</div>

    <n-button text circle @click="navClick" class="navICon">
      <icon-base
        class="menuIcon"
        :iconName="'Menu'"
        :width="24"
        :height="24"
        :iconColor="'#fff'"
        :scaleVal="2"
      >
        <menu-icon />
      </icon-base>
    </n-button>

    <img
      src="./assets/images/background.png"
      alt="back"
      class="backgroundOverlay"
    />
    <router-view v-slot="{ Component, route }">
      <Transition name="slide-fade" mode="out-in">
        <div :key="route.name">
          <keep-alive include="Home">
            <component :is="Component" />
          </keep-alive>
        </div>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import IconBase from "./assets/icons/IconBase.vue";
import menuIcon from "./assets/icons/menuIcon.vue";
import menuOpen from "./assets/icons/menuOpen.vue";
import cancelIcon from "./assets/icons/cancelIcon.vue";
export default {
  components: {
    IconBase,
    menuIcon,
    menuOpen,
    cancelIcon,
  },
  name: "App",
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
      closeIcon: false,
      langVal: "EN",
      menuAct: false,
      path: this.$route.name,
    };
  },
  computed: {
    routeName() {
      const loc = this.$route.name;
      if (loc === "About") return this.$t("about");
      else if (loc === "Question") return this.$t("question");
      else if (loc === "Writing") return this.$t("writing");
      else if (loc === "Faq") return this.$t("faq");
      else if (loc === "Contact") return this.$t("contact");
      else return this.$route.name;
    },
    mousePX() {
      return this.mouseX / 70;
    },
    mousePY() {
      return this.mouseY / 70;
    },
    cardStyle() {
      let rX = this.mousePX;
      let rY = this.mousePY;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },

    navClick() {
      this.menuAct = true;
    },
    languageSwitch() {
      if (this.langVal == "EN") {
        this.langVal = "TR";
        this.$i18n.locale = "en";
      } else {
        this.langVal = "EN";
        this.$i18n.locale = "tr";
      }
    },
  },
  watch: {
    $route() {
      const loc = this.$route.name;
      if (loc === "About") this.aboutAct = true;
      if (loc === "Question") this.questAct = true;
      if (loc === "Writing") this.wrtAct = true;
      if (loc === "Faq") this.faqAct = true;
      if (loc === "Contact") this.conAct = true;
    },
  },
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
};
</script>

<style>
@import "main.css";
@import "fonts.css";

#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100vw;
}
.rightDisp {
  position: absolute;
  top: 0px;
  right: 0px;
}

.menuOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  mix-blend-mode: overlay;
  background: linear-gradient(45deg, #1b6ec2, #354e66);
  z-index: 5;
}
.backgroundOverlay {
  position: absolute;
  opacity: 0.2;
  top: 0px;
  width: 100vw;
  height: 100vh;
  right: 0px;
  mix-blend-mode: overlay;
  object-fit: cover;

  background: linear-gradient(
    90deg,
    rgba(170, 172, 189, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(27, 110, 194, 1) 100%
  );
}

.langButton {
  position: fixed;
  color: #fff;
  z-index: 1500;
  background: transparent;
  border: none;
  top: 30%;
  right: 7.5%;
  font-size: 4rem;
}
.navICon {
  position: absolute;
  top: 1.07%;
  right: 2%;
  z-index: 1500;
  width: 3%;
  background: transparent;
  border: none;
}

.cancelButton {
  position: fixed;
  top: 20%;
  right: 10%;
}
.routeName {
  position: absolute;
  top: 1.3%;
  right: 6%;
  font-size: 1rem;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
  color: #77b5eb;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<style lang="scss">
// === Variables =====

$font-size: 4rem;
$split-position: 49%;
$split-thickness: 4px;
$split-color: #77b5eb;

// === Codepen Setup =====
html,
body {
  width: 100vw;
  height: 100vh;
}
body {
  background: linear-gradient(45deg, #1b6ec2, #354e66);
  align-items: center;
  justify-content: center;
}
.Menu {
  height: 100vh;
  z-index: 1001;
}
// === Menu <ul> =====
.Menu-list {
  max-width: 90vw;
  z-index: 1001;
  padding-top: 10%;
  padding-left: 6%;
  font-size: $font-size;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: skew(0.99turn, 356deg);
}

// === Menu item =====
.Menu-list-item {
  position: relative;
  color: transparent;

  // === Split Line =====
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: $split-position;
    left: -10%;
    right: -10%;
    height: $split-thickness;
    border-radius: $split-thickness;
    margin-top: -($split-thickness / 2);
    background: $split-color;
    transform: scale(0);
    transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    z-index: 1;
  }
}

// === Top/bottom mask =====
.Mask {
  display: block;
  position: absolute;
  overflow: hidden;
  color: $split-color;
  top: 0;
  height: $split-position;
  transition: all 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);

  span {
    display: block;
  }
}

// === Bottom mask specific =====
.Mask + .Mask {
  top: $split-position - 0.1;
  height: 100 - $split-position + 0.1;

  span {
    transform: translateY(-$split-position);
  }
}

// === Where the fun stuff happens =====
.Menu-list-item:hover,
.Menu-list-item:active {
  .Mask {
    color: #fff;
    transform: skewX(12deg) translateX(5px);
  }
  .Mask + .Mask {
    transform: skewX(12deg) translateX(-5px);
  }
  &::before {
    transform: scale(1);
  }
}

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.Menu {
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  overflow: hidden;
  transition: 1s $returnEasing;
}
</style>
