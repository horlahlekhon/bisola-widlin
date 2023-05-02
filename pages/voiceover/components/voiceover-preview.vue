<template>
    <main class="text-white">
        <div class="w-full mx-auto mail--law px-8 md:px-24 overflow-y-scroll lg:overflow-hidden">
            <navbar :is-preview="true"/>
            <div class="flex flex-col lg:flex-row">
                <div>
                    <section class="body mt-4 flex flex-row justify-center items-center">
                        <div class="flex flex-col items-end">
                            <p class="mb-1 text-xs bg-white rounded-full text-black p-2 mr-56">
                                🎙️Voiceover
                            </p>
                            <p class="w-2/3 mt-2 text-right text-3xl md:text-6xl font-gambetta">Use the best
                                voice possible to engage
                                your
                                audience.</p>
                            <button
                                    class="bg-amber-50 hover:bg-amber-100 px-12 py-3 rounded mt-8 text-black mr-56">
                                <span>Listen</span>
                            </button>
                        </div>
                    </section>
                    <section class="hidden lg:flex flex-row justify-between items-start">
                        <div class="flex flex-col items-start text-left mr-8">
          <span class="flex flex-row bg-amber-50 bg-opacity-50 mb-2">
            <span class="p-2 bg-amber-50 text-black">Contact Us</span>
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
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import WaveSurf from "~/pages/voiceover/components/WaveSurf.vue";
import Navbar from "~/pages/voiceover/components/navbar.vue";

export default {
    name: "voiceover-preview",
    components: {Navbar, WaveSurf}
}
</script>

<style scoped>
main {
    background: black;
    /*clip-path: inset(0 30% 0 0);*/
    /*width: 70%;*/
    /*overflow-x: hidden !important;*/
}

.mail--law {
    background-color: #1e1e1e;
    min-height: 100vh;
    background-image: url("/voiceover/background2.svg");
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
