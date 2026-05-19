<script setup>
import { ref } from 'vue'

const props = defineProps({
  work: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const isHovered = ref(false)
const imageLoaded = ref(false)
</script>

<template>
  <div
    class="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-gray-100"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="$emit('click')"
  >
    <!-- Skeleton Loader -->
    <div
      v-if="!imageLoaded"
      class="absolute inset-0 bg-gray-200 animate-pulse"
    ></div>

    <!-- Image -->
    <img
      :src="work.image"
      :alt="work.title"
      class="w-full h-full object-cover transition-all duration-500"
      :class="isHovered ? 'scale-105' : 'scale-100'"
      @load="imageLoaded = true"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Title -->
    <div
      class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
    >
      <h3 class="font-syne font-semibold text-white text-lg">{{ work.title }}</h3>
    </div>

    <!-- View Icon -->
    <div
      class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    </div>
  </div>
</template>
