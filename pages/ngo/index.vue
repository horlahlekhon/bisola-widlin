<template>
  <main class="text-white">
    <div class="w-full lg:w-10/12 mx-auto mail--law px-8 md:px-24 overflow-hidden">
      <navbar/>
      <section class="body mt-4 flex flex-row justify-center items-center">
        <div class="flex flex-col items-center">
          <p class="mb-1 text-xs bg-white rounded-full text-black p-2">
            💰NGO
          </p>
          <p class="w-3/4 mt-2 text-center text-3xl md:text-6xl font-gambetta">Spreading the love of God through giving, inspiring and
            motivating the people within our reach</p>
          <a href="#" class="bg-green-600 hover:bg-green-700 px-12 py-3 rounded mt-8">Donate</a>
        </div>
      </section>
      <section class="flex flex-row justify-start items-start">
        <div class="flex flex-col items-start text-left mr-8">
          <span class="flex flex-row bg-green-700 bg-opacity-50">
            <span class="p-2 bg-green-700">Contact Us</span>
            <span class="text-xs w-[175px]">&nbsp;</span>
          </span>
          <span>Abuja, Abuja FCT, NG</span>
          <span>BisolaWidlin@gmail.com</span>
          <span>+234 813 489 3527</span>
          <span>+234 812 575 7578</span>
          <span class="mt-2 flex flex-row">
            <img src="/shared/icons/instagram.svg" alt="Instagram" class="mr-2"/>
            <img src="/shared/icons/twitter.svg" alt="Twitter" class="mr-2"/>
          </span>
        </div>
        <div class="bg-black bg-opacity-70 flex flex-row p-12 h-52">
          <div class="flex flex-col justify-center items-center w-48 border-r-2 border-white">
            <span class="text-6xl">5</span>
            <span class="mt-4">Volunteers</span>
          </div>
          <div class="flex flex-col justify-center items-center w-56 border-r-2 border-white">
            <span class="text-6xl">2M</span>
            <span class="mt-4">Donations <br> Received</span>
          </div>
          <div class="flex flex-col justify-center items-center w-48">
            <span class="text-6xl">7+</span>
            <span class="mt-4">Active <br> Campaign</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Navbar from "~/pages/ngo/components/navbar.vue";

export default {
  name: "ngo",
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
  background-image: url("/ngo/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
}

.bg-primary {
  background: #FCEDD0;
}

.text-primary {
  color: #FCEDD0;
}

.body {
  height: calc(100vh - 295px);
  padding-top: 10rem;
  padding-bottom: 10rem;
}
</style>
