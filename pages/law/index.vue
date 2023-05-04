<template>
    <main class="text-white">
        <div class="w-full mx-auto mail--law px-8 md:px-24 overflow-hidden">
            <navbar/>
            <section class="body mt-4 flex flex-row justify-center items-center main">
                <div class="flex flex-col items-center">
                    <p class="mb-1 text-xs bg-white rounded-full text-black p-2">Law and Justice</p>
                    <p class="w-[90%] mt-8 text-center text-3xl lg:text-6xl md:text-7xl font-gambetta uppercase">
                        Intellectual Property Law</p>
                </div>
            </section>
        </div>
        <section
                class="text-center w-5/6 lg:w-4/6 mx-auto flex flex-col mt-16 lg:mt-40 items-center font-gambetta about text-amber-900">
            <span class="border border-amber-900 rounded-full w-fit p-2 text-xs text-black font-sans" id="about">☺️About Me</span>
            <p class="mt-8 text-lg text-justify lg:text-center">BISOLA WIDLIN is a professional legal professional
                who specializes in the area of
                intellectual
                property law. IP
                law covers a broad range of legal issues related to protecting the rights of creators and owners of
                intellectual
                property, such as patents, trademarks, copyrights, and trade secrets.</p>
            <p class="mt-8 text-lg text-justify lg:text-center">
                My responsibilities may include advising clients on the legal aspects of protecting and managing
                their
                intellectual property, drafting and negotiating contracts related to IP, filing and prosecuting
                patent and
                trademark applications, defending clients against claims of infringement, and representing clients
                in litigation
                related to intellectual property disputes.
            </p>
            <a href="#services" class="">
                <img src="/law/about-hero.svg" alt="Lady Justice" class="my-20"/>
            </a>
            <h2 class="text-5xl">Services</h2>
            <div class="flex flex-col items-center mt-12" id="services">
                <div v-for="service in services" :key="service.title" class="w-full mb-8">
                    <p class="text-lg text-justify lg:text-center">
                        <span class="text-lg lg:text-xl font-bold capitalize">{{ service.title }}:</span>
                        <span>{{ service.description }}</span></p>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
import Navbar from "~/pages/law/components/navbar.vue";

export default {
    name: "law",
    components: {Navbar},
    data() {
        return {
            services: [
                {
                    title: "Patent prosecution",
                    description: "An intellectual property lawyer can help inventors and companies obtain patents for their inventions by drafting and filing patent applications with the appropriate patent office, responding to patent office actions, and prosecuting patent applications."
                },
                {
                    title: "Trademark registration and enforcement",
                    description: "An intellectual property lawyer can assist with trademark registration, including conducting trademark searches, preparing and filing trademark applications, and responding to office actions. They can also help enforce trademarks by sending cease and desist letters, filing infringement lawsuits, and negotiating settlement agreements."
                },
                {
                    title: "Copyright registration and enforcement",
                    description: "An intellectual property lawyer can assist with copyright registration and enforcement, including filing copyright applications, drafting licensing agreements, and representing clients in copyright infringement lawsuits."
                },
                {
                    title: "Trade secret protection",
                    description: "An intellectual property lawyer can help protect trade secrets by drafting non-disclosure agreements, advising on trade secret protection strategies, and litigating trade secret misappropriation cases."
                },
                {
                    title: "IP due diligence",
                    description: "An intellectual property lawyer can perform IP due diligence in mergers and acquisitions, assessing the intellectual property assets and risks of a target company."
                },
                {
                    title: "IP transactions",
                    description: "An intellectual property lawyer can negotiate and draft agreements related to the transfer or licensing of intellectual property, such as patent or trademark licenses, technology transfer agreements, and software development agreements."
                }
            ]
        }
    },
}
</script>

<style scoped>
main {
    background: white;
    /*background: rgb(255,255,255);*/
    /*background: linear-gradient(0deg, rgba(255,255,255,1) 33%, rgba(41,41,43,1) 100%);*/
}

.mail--law {
    background-color: #1e1e1e;
    min-height: 100vh;
    background-image: url("/law/background.webp");
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

.about {
    background: white;
}
</style>
