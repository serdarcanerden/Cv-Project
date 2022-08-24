<template>
  <div class="homeInside">
    <n-radio-group v-model:value="myEffect">
      <n-radio-button v-for="effect in effects" :key="effect" :value="effect">
        {{ effect }}
      </n-radio-button>
    </n-radio-group>
    <n-carousel
      :key="myEffect"
      effect="fade"
      :centered-slides="isCard"
      :slides-per-view="isCard ? 'auto' : 1"
      draggable
      class="carouselForAbout"
      style="height: 250px"
    >
      <n-carousel-item
        :key="i"
        v-for="(item, i) in carouselItems"
        :style="{ width: isCard ? '60%' : '100%' }"
      >
        <img class="carousel-img" :src="item.src" />
      </n-carousel-item>
    </n-carousel>
    <div class="aboutPageInside"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      carouselItems: [
        {
          src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
        },
        {
          src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
        },
        {
          src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.homeInside {
  margin-top: 5vh;
  border-top: #f1f5f9 solid thin;
}
.aboutPageInside {
}

.carouselForAbout {
  margin-top: -2.4vh;
  opacity: 0.8;
}
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style>
.n-timeline.n-timeline--horizontal {
  flex-direction: row;
  justify-content: center;
}
</style>
