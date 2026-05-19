<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['close'])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 10)
})

const close = () => {
  isVisible.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-opacity duration-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      @click.self="close"
    >
      <!-- Close Button -->
      <button
        @click="close"
        class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Image Container -->
      <div
        class="max-w-[90vw] max-h-[90vh] transition-all duration-300"
        :class="isVisible ? 'scale-100' : 'scale-95'"
      >
        <img
          :src="image"
          alt="作品大图"
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>

      <!-- Image Counter -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 font-inter text-sm text-white/60">
        {{ index + 1 }}
      </div>
    </div>
  </Teleport>
</template>
