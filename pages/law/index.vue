<template>
  <main class="text-white">
    <div class="w-full lg:w-10/12 mx-auto mail--law px-8 md:px-24 overflow-hidden">
      <navbar/>
      <section class="body mt-4 flex flex-row justify-center items-center">
        <div class="flex flex-col items-center">
          <p class="mb-1 text-xs bg-white rounded-full text-black p-2">Law and Justice</p>
          <p class="w-[90%] mt-8 text-center text-6xl md:text-7xl font-gambetta uppercase">Intellectual Property Law</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Navbar from "~/pages/law/components/navbar.vue";

export default {
  name: "law",
  components: {Navbar},
}
</script>

<style scoped>
main {
  background: black;
}

.mail--law {
  background-color: #1e1e1e;
  min-height: 100vh;
  background-image: url("/law/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /*background-blend-mode: overlay;*/
}

.bg-primary {
  background: #FCEDD0;
}

.text-primary {
  color: #FCEDD0;
}

.body {
  height: calc(100vh - 100px);
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>
