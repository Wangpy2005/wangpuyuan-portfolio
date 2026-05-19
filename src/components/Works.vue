<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const lightboxOpen = ref(false)
const currentImage = ref('')
const currentImages = ref([])
const currentProjectName = ref('')
const imageLoaded = ref({})

// 4套作品集 - 精确图片分配
const projects = ref([
  {
    id: 'aura',
    name: 'AURA',
    category: 'Brand Identity',
    description: '品牌形象与视觉系统设计',
    year: '2024',
    images: [
      '1.png', '2.png', '3.png', '4.png', '5.png',
      '6.png', '7.png', '8.png', '9.png', '10.png',
      '11.png', '12.png', '13.png', '14.png', '15.png',
      '16.png', '17.png', '18.png', '19.png'
    ],
  },
  {
    id: 'kuwo',
    name: 'KUWO MUSIC',
    category: 'H5 Design',
    description: '移动端活动页面设计',
    year: '2024',
    images: [
      '20.png', '21.png', '22.png', '23.png', '24.png',
      '25.png', '26.png', '27.png', '28.png', '29.png',
      '30.png'
    ],
  },
  {
    id: 'poke',
    name: 'POKE',
    category: 'UI/UX Design',
    description: '整站UI/UX设计',
    year: '2025',
    images: [
      '31.png', '32.png', '33.png', '34.png', '35.png',
      '36.png', '37.png', '38.png', '39.png', '40.png',
      '41.png'
    ],
  },
  {
    id: 'alibaba',
    name: 'ALIBABA INTERNATIONAL',
    category: 'Commercial Design',
    description: '阿里国际站AIgc视觉设计实践',
    year: '2024',
    images: [
      '42.png', '43.png', '44.png', '45.png', '46.png',
      '47.png', '48.png', '49.png', '50.png', '51.png',
      '52.png', '53.png', '54.png', '55.png', '56.png',
      '57.png', '58.png', '59.png', '60.png', '61.png',
      '62.png', '63.png', '64.png', '65.png', '66.png',
      '67.png'
    ],
  },
])

const getImagePath = (filename) => {
  return `/images/${filename}`
}

const openLightbox = (image, images, projectName) => {
  currentImage.value = image
  currentImages.value = images
  currentProjectName.value = projectName
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const handleImageLoad = (projectId, imgIndex) => {
  imageLoaded.value[`${projectId}-${imgIndex}`] = true
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  const section = document.getElementById('works')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="works" class="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        class="mb-12 md:mb-20"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out;"
      >
        <span class="font-sans text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">02 / Works</span>
        <div class="w-12 h-px bg-black"></div>
      </div>

      <!-- Projects -->
      <div class="space-y-24 md:space-y-32">
        <div
          v-for="(project, pIndex) in projects"
          :key="project.id"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          :style="{ transition: `opacity 0.8s ease-out ${pIndex * 0.15}s` }"
        >
          <!-- Project Header -->
          <div class="mb-8 md:mb-12">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4 md:mb-6">
              <div>
                <span class="font-sans text-xs tracking-[0.2em] text-black/40 uppercase">{{ project.category }}</span>
                <h3 class="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mt-2">{{ project.name }}</h3>
              </div>
              <div class="text-left md:text-right">
                <span class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">{{ project.year }}</span>
              </div>
            </div>
            <p class="font-sans text-base text-black/60 mb-6 md:mb-8">{{ project.description }}</p>
            <div class="w-full h-px bg-black/10"></div>
          </div>

          <!-- Project Images - Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(img, imgIndex) in project.images"
              :key="imgIndex"
              class="relative aspect-[4/3] overflow-hidden cursor-pointer group bg-gray-100"
              @click="openLightbox(getImagePath(img), project.images.map(i => getImagePath(i)), project.name)"
            >
              <!-- Loading skeleton -->
              <div
                v-if="!imageLoaded[`${project.id}-${imgIndex}`]"
                class="absolute inset-0 bg-gray-200 animate-pulse"
              ></div>

              <!-- Image -->
              <img
                :src="getImagePath(img)"
                :alt="`${project.name} - ${imgIndex + 1}`"
                class="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                @load="handleImageLoad(project.id, imgIndex)"
                :class="{ 'opacity-0': !imageLoaded[`${project.id}-${imgIndex}`] }"
              />

              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span class="font-sans text-white text-xs tracking-widest uppercase bg-black/60 px-4 py-2">
                  View
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="currentImage"
          :alt="currentProjectName"
          class="max-w-[90vw] max-h-[90vh] object-contain"
        />

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
          <p class="font-sans text-xs tracking-[0.2em] text-white/40 uppercase">{{ currentProjectName }}</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>
