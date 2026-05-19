<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 md:py-6 transition-all duration-500"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#"
        @click.prevent="scrollToSection('hero')"
        class="font-sans font-bold text-sm tracking-[0.2em] text-black"
      >
        WPY
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-10">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="font-sans text-xs tracking-[0.15em] text-black/60 hover:text-black transition-colors duration-300 uppercase"
        >
          {{ link.label }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
      >
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="isMobileMenuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-black transition-all duration-300"
          :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300 bg-white"
      :class="isMobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'"
    >
      <div class="py-4 space-y-2">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="block w-full text-left font-sans text-sm tracking-wider text-black/70 hover:text-black py-3 px-2 transition-colors"
        >
          {{ link.label }}
        </button>
      </div>
    </div>
  </nav>
</template>
