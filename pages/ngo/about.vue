<template>
    <main>
        <div class="main text-white h-screen w-full mx-auto mail--law px-8 md:px-24 overflow-y-scroll lg:overflow-hidden">
            <div class="w-full lg:w-10/12 mx-auto">
                <navbar/>
                <section
                        class="text-center w-5/6 mx-auto flex flex-col-reverse lg:flex-row mt-20 lg:mt-40 items-start justify-between border-b pb-24 border-opacity-10">
                    <div class="w-full lg:w-3/5 flex flex-col items-start">
                        <span class="rounded-full w-fit py-2 px-2 text-sm text-black bg-white mb-8">☺️About Me</span>
                        <p class="text-left mb-4 font-gambetta text-lg text-justify lg:text-left">
                            Cantor and the word foundation is a Charitable body that helps to give with the help of our
                            Lord Jesus
                            Christ.
                        </p>
                        <p class="text-left mb-4 font-gambetta text-lg text-justify lg:text-left">
                            It is a non-profit organization that operates independently of the government and works to
                            address social,
                            environmental, and humanitarian issues. NGOs are often funded by donations from individuals,
                            foundations,
                            corporations, or governments.
                        </p>
                        <p class="text-left mb-4 font-gambetta text-lg text-justify lg:text-left">
                            Cantor and the word foundation may work on a variety of issues, such as poverty, hunger,
                            education,
                            healthcare, human rights, gender equality, environmental conservation, and disaster relief.
                            They may also
                            focus on advocacy, research, and awareness-raising activities related to their issue areas.
                        </p>
                        <a href="https://wa.me/+2349061156905?text=Cantor%20and%20the%20word%20foundation%20-%20I%20would%20like%20to%20become%20a%20partner%20to%20help%20address%20social%2C%20environmental%2C%20and%20humanitarian%20issues%20with%20the%20help%20of%20our%20Lord%20Jesus%20Christ." target="_blank" class="bg-green-600 hover:bg-green-700 px-5 py-4 rounded-md mt-8">Become a
                            Partner</a>
                    </div>
                    <div class="w-2/5 hidden lg:flex flex-row justify-end m-4">
                        <img src="/ngo/hero.png" alt="Happy Children" class="w-full ml-auto max-w-[400px]">
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
import Navbar from "~/pages/ngo/components/navbar.vue";

export default {
    name: "about",
    components: {Navbar},
    data() {
        return {
            logo: "black",
            textColor: "text-black",
        }
    }
}
</script>

<style scoped>
.main {
    position: relative;
    background: #1e1e1e url("/ngo/background2.webp") no-repeat center;
    background-size: cover;
    backdrop-filter: drop-shadow(0 0 0.75rem #000000);
    background-blend-mode: overlay;
}

main {
    background: black;
    min-height: 100vh;
}
</style>
