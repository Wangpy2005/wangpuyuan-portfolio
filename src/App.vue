<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Works from './components/Works.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <NavBar />
    <main>
      <Hero />
      <About />
      <Works />
      <Experience />
      <Contact />
    </main>
  </div>
</template>
