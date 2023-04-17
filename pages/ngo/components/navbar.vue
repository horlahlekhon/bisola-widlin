<template>
  <nav class="pt-2 flex flex-col lg:flex-row justify-between items-center w-full relative">
    <div class="flex flex-row justify-between items-center w-full lg:w-fit">
      <nuxt-link to="/ngo">
        <img :src="logo=== 'black' ? '/shared/icons/widling-black.svg' : '/shared/icons/widlin.svg'" alt="Widlin Logo"
             class="cursor-pointer"/>
      </nuxt-link>
      <div class="flex lg:hidden">
        <button class="navbar-burger flex items-center py-2 px-3 text-amber-100 hover:text-amber-200"
                @click="toggleMenu">
          <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
            Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden lg:flex flex-row lg:items-center lg:w-fit">
      <nav class="mx-auto w-full">
        <nuxt-link to="about" class="nav-item" :class="textColor">About Me</nuxt-link>
        <nuxt-link to="services" class="nav-item ml-12" :class="textColor">Services</nuxt-link>
        <a href="#" class="bg-green-600 hover:bg-green-700 px-12 py-3 ml-16 rounded">Donate Now</a>
      </nav>
    </div>
    <div class="flex flex-col lg:hidden lg:w-auto bg-white bg-opacity-10 absolute top-20 right-0"
         :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
      <nav class="mx-auto flex flex-col min-w-[300px]">
        <nuxt-link to="about" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10" :class="textColor">About
          Me
        </nuxt-link>
        <nuxt-link to="services" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10" :class="textColor">
          Services
        </nuxt-link>
        <a href="#" class="nav-item px-12 py-3 hover:bg-gray-100 hover:bg-opacity-10">Hire Me</a>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    textColor: {
      type: String,
      default: "text-white"
    },
    logo: {
      type: String,
      default: "white"
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.bg-primary {
  background: #FCEDD0;
}

.text-primary {
  color: #FCEDD0;
}
</style>
