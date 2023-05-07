<template>
    <main class="text-white">
        <div class="w-full mx-auto mail--law px-8 md:px-24 overflow-hidden">
            <div class="mx-auto w-full lg:w-10/12">
                <navbar/>
                <section class="body mt-4 flex flex-row justify-center items-center">
                    <div class="flex flex-col items-center">
                        <p class="mb-1 text-xs bg-white rounded-full text-black p-2">
                            💰NGO
                        </p>
                        <p class="w-full lg:w-3/4 mt-2 text-center text-3xl md:text-6xl font-gambetta">Spreading the
                            love of God
                            through giving, inspiring and
                            motivating the people within our reach</p>
                        <a href="#" class="bg-green-600 hover:bg-green-700 px-12 py-3 rounded mt-8">Donate</a>
                    </div>
                </section>
                <section class="flex flex-col flex-col-reverse lg:flex-row justify-start items-start">
                    <div class="flex flex-col items-start text-left mr-0  lg:mr-8 w-full lg:w-fit mb-8 lg:mb-0">
          <span class="flex flex-row bg-green-700 bg-opacity-50 w-full">
            <span class="p-2 bg-green-700 w-1/3 lg:w-fit">Contact Us</span>
            <span class="text-xs w-2/3 lg:w-[175px]">&nbsp;</span>
          </span>
                        <span>Abuja, Abuja FCT, NG</span>
                        <span>BisolaWidlin@gmail.com</span>
                        <span>+234 813 489 3527</span>
                        <span>+234 812 575 7578</span>
                        <span class="mt-2 flex flex-row">
            <a href="https://www.instagram.com/cantorandtheword/" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/instagram.svg" alt="Instagram" class="mr-2"/>
            </a>
            <a href="https://twitter.com/BisolaWidlin" target="_blank" class="mr-2 mt-1">
              <img src="/shared/icons/twitter.svg" alt="Twitter" class="mr-2"/>
            </a>
            <a href="https://www.youtube.com/@CANTORANDTHEWORD" target="_blank" class="mr-2">
              <img src="/shared/icons/icons8-youtube-50.png" alt="Youtube" class="mr-2 h-8"/>
            </a>
          </span>
                    </div>
                    <div class="bg-black bg-opacity-70 flex flex-row p-4 lg:p-12 h-32 lg:h-52 mb-8 lg:mb-0 w-full lg:w-fit">
                        <div class="flex flex-col justify-center items-center w-1/3 lg:w-48 border-r-2 border-white">
                            <span class="text-3xl lg:text-6xl">5</span>
                            <span class="mt-4 text-sm lg:text-base">Volunteers</span>
                        </div>
                        <div class="flex flex-col justify-center items-center w-1/3 lg:w-56 border-r-2 border-white">
                            <span class="text-3xl lg:text-6xl">2M</span>
                            <span class="mt-4 text-sm lg:text-base">Donations <br> Received</span>
                        </div>
                        <div class="flex flex-col justify-center items-center w-1/3 lg:w-48">
                            <span class="text-3xl lg:text-6xl">7+</span>
                            <span class="mt-4 text-sm lg:text-base">Active <br> Campaign</span>
                        </div>
                    </div>
                </section>
            </div>
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
