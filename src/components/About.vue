<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('about')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="about" class="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        class="mb-12 md:mb-20"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out;"
      >
        <span class="font-sans text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">01 / About</span>
        <div class="w-12 h-px bg-black"></div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-20 items-start">
        <!-- Left - Profile Image -->
        <div
          class="order-2 lg:order-1"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'"
          style="transition: all 0.8s ease-out 0.2s;"
        >
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src="/images/A4 - 1.png"
              alt="王溥源"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="font-sans text-xs text-black/40 mt-4 tracking-wider">PORTFOLIO COVER / 2024</p>
        </div>

        <!-- Right - Text Content -->
        <div class="order-1 lg:order-2">
          <h2
            class="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8 md:mb-12"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition: opacity 0.6s ease-out;"
          >
            WANG<br/>PUYUAN
          </h2>

          <div
            class="space-y-6"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition: opacity 0.6s ease-out 0.3s;"
          >
            <p class="font-sans text-base md:text-lg leading-relaxed text-black/70">
              湖北工业大学产品设计专业硕士。专注于视觉设计与用户体验，
              擅长将创意转化为真实的设计解决方案。
            </p>

            <p class="font-sans text-base md:text-lg leading-relaxed text-black/70">
              曾参与VR虚拟博物馆系统开发，负责unity交互功能与视觉呈现设计。
              在阿里国际站担任Aigc视觉设计实习生，参与跨境电商Banner及产品主图的AIgc设计。
            </p>

            <p class="font-sans text-base md:text-lg leading-relaxed text-black/70">
              2024年作品入选米兰设计周高校设计展，2025年参与中国好创意设计大赛。
              熟练掌握Photoshop、Illustrator、Cinema 4D、Figma等设计工具。
            </p>
          </div>

          <!-- Skills -->
          <div
            class="mt-10 md:mt-14"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition: opacity 0.6s ease-out 0.4s;"
          >
            <p class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase mb-4">Skills</p>
            <div class="flex flex-wrap gap-3">
              <span class="font-sans text-sm px-4 py-2 border border-black/10">Photoshop</span>
              <span class="font-sans text-sm px-4 py-2 border border-black/10">Illustrator</span>
              <span class="font-sans text-sm px-4 py-2 border border-black/10">Cinema 4D</span>
              <span class="font-sans text-sm px-4 py-2 border border-black/10">InDesign</span>
              <span class="font-sans text-sm px-4 py-2 border border-black/10">Figma</span>
              <span class="font-sans text-sm px-4 py-2 border border-black/10">Sketch</span>
            </div>
          </div>

          <!-- Stats -->
          <div
            class="grid grid-cols-2 gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-black/10"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition: opacity 0.6s ease-out 0.5s;"
          >
            <div>
              <span class="font-sans font-bold text-4xl md:text-5xl">5+</span>
              <p class="font-sans text-xs tracking-[0.15em] text-black/40 uppercase mt-2">Awards</p>
            </div>
            <div>
              <span class="font-sans font-bold text-4xl md:text-5xl">20+</span>
              <p class="font-sans text-xs tracking-[0.15em] text-black/40 uppercase mt-2">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
