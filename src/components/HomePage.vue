<template style="1px solid red">
  <div class="home-page" ref="homePage">
    <!-- header -->
    <div class="home-header">
      <div class="logo-img neon">JP Studio</div>
      <div class="serve-items mobile-nav">
        <a
          :class="{ active: activeTab === 'about' }"
          @click="scrollToSection('about')"
          >{{ $t("subTitle.about") }}</a
        >
        <a
          :class="{ active: activeTab === 'portfolio' }"
          @click="scrollToSection('portfolio')"
          >{{ $t("subTitle.portfolio") }}</a
        >
        <a
          :class="{ active: activeTab === 'features' }"
          @click="scrollToSection('features')"
          >{{ $t("subTitle.feature") }}</a
        >
        <a
          :class="{ active: activeTab === 'demo' }"
          @click="scrollToSection('demo')"
          >{{ $t("subTitle.demo") }}</a
        >
        <a
          :class="{ active: activeTab === 'contact' }"
          @click="scrollToSection('contact')"
          >{{ $t("subTitle.contact") }}</a
        >
      </div>
      <!-- Demo 1 -->
      <!-- <div v-if="locale == 'zh'">English Icon</div>
		<div v-if="locale == 'en'">Chinese Icon</div> -->

      <!-- Demo 2 -->
      <!-- <div>{{ showLangIcon(locale) }}</div> -->
		<div @click="changeLang(locale)" class="choose-lang">
			<div v-show="locale == 'zh'">
				<img class="lang-switch" src="../img/icon/language-solid.svg" alt="" />
			</div>
			<div v-show="locale == 'en'">
				<img class="lang-switch" src="../img/icon/language-solid.svg" alt="" />
			</div>
			<div class="show-lang">{{ locale == 'zh' ? '繁中' : 'EN' }}</div>
		</div>

      <!-- <select v-model="locale">
        <option
          v-for="item in localeOptions"
          :key="`locale-${item.lang}`"
          :value="item.lang"
        >
          {{ item.name }}
        </option>
      </select> -->

    </div>
    <!-- Sections -->
    <div id="about" class="section">
      <div class="title-background">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <!-- 新增aos-delay時間1.8s -->
          <div class="section-title">{{ $t("subTitle.about") }}</div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="section-1-img-area">
          <div data-aos="fade-down-right" data-aos-duration="1500">
            <img
              src="../img/coding1.jpeg"
              alt=""
              class="section-1-img mobile-img"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500">
            <img src="../img/coding2.jpeg" alt="" class="section-1-img" />
          </div>
          <div data-aos="fade-down-left" data-aos-duration="1500">
            <img
              src="../img/coding3.jpeg"
              alt=""
              class="section-1-img mobile-img"
            />
          </div>
        </div>
        <div data-aos="zoom-in-right" class="section-content">
          {{ $t("section1.content") }}
        </div>
      </div>
    </div>
    <div id="portfolio" class="section">
      <div class="title-background">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <div class="section-title">{{ $t("subTitle.portfolio") }}</div>
        </div>
      </div>
      <div
        data-aos="zoom-out-right"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-left">
          <div class="sec-2-title">Aiplux</div>
          <a href="https://aiplux.com/">
            <img
              class="sec-2-img-left"
              src="../img/portfolio/aiplux.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-right">
          <div class="sec-2-title">{{ $t("section2.blue") }}</div>
          <a href="https://www.leucosapphire.com/shop/order/search">
            <img
              class="sec-2-img-left"
              src="../img/portfolio/blue.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-right"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-left">
          <div class="sec-2-title">{{ $t("section2.TP") }}</div>
          <a href="https://www.tfam.museum/index.aspx?ddlLang=zh-tw">
            <img class="sec-2-img-left" src="../img/portfolio/TP.png" alt="" />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-right">
          <div class="sec-2-title">{{ $t("section2.TPECH") }}</div>
          <a href="https://v-hosp.tpech.gov.tw/w/Tpech/index">
            <img class="sec-2-img-left" src="../img/portfolio/TPG.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div id="features" class="section">
      <div class="title-background">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <div class="section-title">{{ $t("subTitle.feature") }}</div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        data-aos-duration="1500"
        class="study-icon"
        src="../img/unit.jpeg"
        alt=""
      />
      <div data-aos="zoom-in-left" class="section-content">
        {{ $t("section3.content") }}
      </div>
    </div>

    <div id="demo" class="section">
      <div class="title-background">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <div class="section-title">{{ $t("subTitle.demo") }}</div>
        </div>
      </div>
      <div
        data-aos="zoom-out-right"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-left">
          <div class="sec-2-title">Memory Game</div>
          <a
            href="https://joshua-c-lin.github.io/Joshua-Game-Fixed/newGame.html"
        >
            <img class="sec-2-img-left" src="../img/demo/demo1.png" alt="" />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-right">
          <div class="sec-2-title">Breakout</div>
          <a
            href="https://joshua-c-lin.github.io/Joshua-Breakout-Game/index.html"
          >
            <img class="sec-2-img-left" src="../img/demo/demo2.png" alt="" />
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-out-right"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-left">
          <div class="sec-2-title">Candy Crush</div>
          <a href="https://www.tfam.museum/index.aspx?ddlLang=zh-tw">
            <img class="sec-2-img-left" src="../img/demo/demo3.png" alt="" />
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-out-left"
        data-aos-duration="1500"
        class="portfolio-item"
      >
        <div class="item-right">
          <div class="sec-2-title">Joshua Crush</div>
          <a href="https://joshua-c-lin.github.io/canvas-crush/index.html">
            <img class="sec-2-img-left" src="../img/demo/demo4.png" alt="" />
          </a>
        </div>
      </div>
    </div>

    <div id="contact" class="section">
      <div class="title-background">
        <div data-aos="fade-down" data-aos-delay="1800">
          <div class="section-title">{{ $t("subTitle.contact") }}</div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" class="social-area">
        <!-- Line -->
        <div>
          <div class="sec-2-title connect-line connect-text">LINE</div>
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            class="social-icon"
            src="../img/contact/line.png"
            alt=""
            @click="linkTo('LINE')"
          />
        </div>
        <!-- IG -->
        <div>
          <div class="sec-2-title connect-ig connect-text">IG</div>
          <img
            data-aos="fade-down"
            data-aos-duration="1500"
            class="social-icon"
            src="../img/contact/ig.jpg"
            alt=""
            @click="linkTo('IG')"
          />
        </div>
        <!-- FB -->
        <div>
          <div class="sec-2-title connect-fb connect-text">FB</div>
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            class="social-icon"
            src="../img/contact/fb.png"
            alt=""
            @click="linkTo('FB')"
          />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" class="google-btn">
        <a
          ref="link"
          class="google-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdiK1k6zwhqQpnk_JuLcx8njxXEPAUVwpqM0-6Ae25sQtdVGA/viewform?usp=sf_link"
        >
          {{ $t("footer.quoteButton") }}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="footer">
        Copyright © 2023-2033 JP Studio {{ $t("footer.right") }}.
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import AOS from "aos";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  setup() {
    const { t, locale } = useI18n();
    const activeTab = ref("about");
    const homePage = ref(null);
    let observer;

    const showLangIcon = (lang) => {
      return lang === "en" ? "TW" : "EN";
    };

    // let currentLanguage = 'zh';
    const changeLang = (lang) => {
      console.log("測試修改語言", lang);
      if (lang == 'zh') {
        locale.value = 'en';
      }
      if (lang == 'en') {
        locale.value = 'zh';
      }
    //   console.log("修改後的語言,currentLanguage");
    };

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 處理 .section 元素
          if (entry.target.classList.contains("section")) {
            activeTab.value = entry.target.id;
          }

          // 處理 .title-background 元素
          if (entry.target.classList.contains("title-background")) {
            entry.target.classList.add("progressAnimationStrike");
          }
        } else {
          // 處理 .title-background 元素離開視口
          if (entry.target.classList.contains("title-background")) {
            entry.target.classList.remove("progressAnimationStrike");
          }
        }
      });
    };

    const linkTo = (type) => {
      const links = {
        LINE: "https://line.me/R/ti/p/@pxv4691g",
        IG: "https://instagram.com/jp_studio_0101",
        FB: "https://www.facebook.com/share/xCkZwuXbMbkSSWLR/?mibextid=K35XfP",
      };
      if (links[type]) {
        window.location.href = links[type];
      }
    };

    onMounted(() => {
      AOS.init();
      homePage.value = document.querySelector(".home-page");

      observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      });

      const sections = homePage.value.querySelectorAll(".section");
      const titleBackgrounds =
        homePage.value.querySelectorAll(".title-background");

      sections.forEach((section) => observer.observe(section));
      titleBackgrounds.forEach((titleBackground) =>
        observer.observe(titleBackground)
      );
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      t,
      locale,
      localeOptions: [
        {
          lang: "en",
          name: "EN",
        },
        {
          lang: "zh",
          name: "TC",
        },
      ],
      activeTab,
      scrollToSection,
      linkTo,
      showLangIcon,
      homePage,
		changeLang
    //   currentLanguage,
    
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jacquard+24&display=swap");

.home-page {
  background-color: #e5e5e5;
}
@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 20px #fff, 0 0 100px #fff, 0 0 20px #fff;
  }
  50% {
    text-shadow: 0 0 50px #fff, 0 0 150px #fff, 0 0 50px #fff;
    color: #a3c6c4;
  }
}
.neon {
  color: white;
  animation: neon 1.5s ease-in-out infinite alternate;
}
select {
  margin-right: 4%;
}
a {
  text-decoration: none;
  cursor: pointer;
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
  /* #2c3e50 */
}
img {
  width: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.home-header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #06141b;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.logo-img {
  margin-left: 20px;
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 46px;
}
.serve-items {
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  width: 600px;
}
.active {
  color: #F2D06B;
}
.choose-lang{
	display:flex;
	justify-content:center;
	align-items: center;
	margin-right: 1rem;
	white-space: nowrap;
	cursor: pointer;
}
.lang-switch {
	color: #ffffff;
  width: 3rem;
}
.show-lang{
	margin-left: 8px;
	color: #D99036;
	min-width: 32px;
	text-align: center;
}
.section {
  min-height: 100vh;
  padding: 30px 0;
}
.title-background {
  margin: 0 auto;
  max-height: 4rem;
  background: linear-gradient(45deg, #11212d 5%, #ccd0cf 95%);
  opacity: 0;
  /* width: 40%; */
}

@keyframes progressAnimationStrike {
  0% {
    opacity: 0;
    width: 0;
  }
  40% {
    width: 40%;
    opacity: 1;
  }
  80% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%);
  }
  100% {
    width: 40%;
    clip-path: polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%);
  }
}
.progressAnimationStrike {
  animation: progressAnimationStrike 1500ms ease-out forwards;
  opacity: 1; /* 动画执行完毕后可见 */
}

.section-title {
  font-size: 3rem;
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #f2d06b;
  text-shadow: 1px 1px 0.2em #4a4873, 1px 1px 0.1em #a68365;
}
.section-content {
  color: #eae7df;
  text-align: left;
  padding: 10px 4%;
  font-size: 2rem;
  font-style: normal;
  text-shadow: 0px 0px 0.2em #162835, 0px 0px 3px #783f18, 1px 1px 0px #e2cba7;
}
.section-1-img-area {
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
}
.section-1-img {
  width: 90%;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.mobile-img {
  display: block;
}
.portfolio-item {
  margin: 10px auto 0;
  display: flex;
}
.sec-2-img-left {
  width: 60%;
}
.item-left {
  text-align: left;
  margin-left: 4%;
}
.item-right {
  text-align: right;
  margin-right: 4%;
}
.sec-2-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.connect-line {
  color: #06c755;
}
.connect-ig {
  color: transparent;
  background: -webkit-linear-gradient(
    225deg,
    #4158d0 0%,
    #c850c0 46%,
    #fedd75 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
}
.connect-fb {
  color: #0866ff;
}
.connect-text {
  font-weight: 400;
  font-style: normal;
  font-size: 46px;
}

.study-icon {
  width: 40%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin: 10px auto;
}
.social-area {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.social-icon {
  width: 80%;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin: 10px;
  cursor: pointer;
}
#contact {
  position: relative;
}
.footer {
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background: #354649;
  bottom: 0;
}
.google-btn {
  margin-top: 50px;
}
.google-link {
  margin-top: 40px;
  background-color: #6c7a89;
  color: #ffffff;
  font-size: 3rem;
  padding: 20px;
  margin: 0px auto;
  border-radius: 16px;
  border: 1px solid #6c7a89;
  transition: border-color 0.3s ease;
}
/* .google-link:hover {
	
  } */
.google-link,
.google-link:focus,
.google-link:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  position: relative;
  min-width: 200px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
}
.google-link span:nth-child(1),
.google-link span:nth-child(2),
.google-link span:nth-child(3),
.google-link span:nth-child(4) {
  content: "";
  display: block;
  position: absolute;
  background-color: #ffffff;
}
.google-link span:nth-child(1) {
  width: 1px;
  left: 0;
  bottom: 0;
}
.google-link span:nth-child(2) {
  height: 1px;
  left: 0;
  top: 0;
}
.google-link span:nth-child(3) {
  width: 1px;
  right: 0;
  top: 0;
}
.google-link span:nth-child(4) {
  height: 1px;
  right: 0;
  bottom: 0;
}
.google-link:hover {
  border: none;
}
.google-link:hover span:nth-child(1) {
  animation: move1 1500ms infinite ease;
}
.google-link:hover span:nth-child(2) {
  animation: move2 1500ms infinite ease;
}
.google-link:hover span:nth-child(3) {
  animation: move3 1500ms infinite ease;
}
.google-link:hover span:nth-child(4) {
  animation: move4 1500ms infinite ease;
}
@keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}
@keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}

@media only screen and (max-width: 790px) {
  .mobile-nav {
    display: none;
  }
  .logo-img {
    font-size: 30px;
    white-space: nowrap;
  }
  .serve-items {
    width: 100%;
  }
  .section-content {
    font-size: 1.5rem;
  }
  .section-1-img-area {
    display: block;
  }
  .section-1-img {
    margin-bottom: 8px;
  }
  .mobile-img {
    display: none;
  }
  .sec-2-img-left {
    width: 90%;
  }
  .study-icon {
    width: 90%;
  }
  .social-area {
    display: block;
  }
  .social-icon {
    width: 80%;
  }
  .footer {
    display: block;
    padding: 14px;
  }
  .footer-info {
    left: 8%;
  }
  .google-btn {
    margin-top: 40px;
    padding-bottom: 100px;
  }
  .title-background {
    width: 80%;
  }
  @keyframes progressAnimationStrike {
    0% {
      opacity: 0;
      width: 0;
    }
    40% {
      width: 80%;
      opacity: 1;
    }
    80% {
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%);
    }
    100% {
      width: 80%;
      clip-path: polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%);
    }
  }
  /* .progressAnimationStrike {
		animation: progressAnimationStrike 1500ms ease-out forwards;
		opacity: 1; 动画执行完毕后可见
		} */
}

@media only screen and (max-width: 890px) {
  .logo-img {
    font-size: 30px;
    white-space: nowrap;
  }
}

#about,
#features,
#contact {
  background-color: #4a5c6a;
}

#portfolio,
#demo {
  background-color: #9ba8ab;
}
</style>
