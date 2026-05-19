<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const name = 'WANG PUYUAN'
const title = '视觉设计 · 产品设计'
const location = '武汉 · 湖北工业大学'

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-start overflow-hidden bg-black text-white"
  >
    <!-- Geometric Grid Background -->
    <div class="absolute inset-0 opacity-[0.04]">
      <div class="absolute top-0 left-0 w-full h-px bg-white"></div>
      <div class="absolute top-1/4 left-0 w-full h-px bg-white"></div>
      <div class="absolute top-2/4 left-0 w-full h-px bg-white"></div>
      <div class="absolute top-3/4 left-0 w-full h-px bg-white"></div>
      <div class="absolute left-0 top-0 w-px h-full bg-white"></div>
      <div class="absolute left-1/4 top-0 w-px h-full bg-white"></div>
      <div class="absolute left-2/4 top-0 w-px h-full bg-white"></div>
      <div class="absolute left-3/4 top-0 w-px h-full bg-white"></div>
    </div>

    <!-- Large Background Text -->
    <div class="absolute right-0 bottom-0 text-[18vw] font-bold text-white/[0.02] leading-none tracking-tighter select-none">
      WPY
    </div>

    <!-- Content -->
    <div class="relative z-10 px-6 md:px-12 lg:px-20 pt-16 md:pt-20 lg:pt-24 w-full min-h-screen flex flex-col">
      <!-- Top Info Bar -->
      <div
        class="mb-12 md:mb-16 lg:mb-20"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out;"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <!-- Chinese Name -->
          <div>
            <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-1">姓名</p>
            <p class="font-sans text-base text-white/80">王溥源</p>
          </div>
          <!-- Phone -->
          <div>
            <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-1">电话</p>
            <p class="font-sans text-base text-white/80">13986194447</p>
          </div>
          <!-- Education -->
          <div>
            <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-1">教育</p>
            <p class="font-sans text-base text-white/80">湖北工业大学 · 产品设计</p>
          </div>
        </div>
      </div>

      <!-- Main Title -->
      <div class="flex-1 flex flex-col justify-center">
        <div class="mb-4 md:mb-6">
          <h1
            class="font-sans font-black text-5xl md:text-7xl lg:text-[12vw] xl:text-[10vw] tracking-tighter leading-[0.85] text-white"
            :class="isVisible ? 'opacity-100' : 'opacity-0'"
            style="transition: opacity 0.8s ease-out 0.2s;"
          >
            {{ name.split(' ').join('') }}
          </h1>
        </div>

        <!-- Title -->
        <div
          class="mb-8 md:mb-12"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          style="transition: opacity 0.8s ease-out 0.4s;"
        >
          <span class="font-sans text-base md:text-xl lg:text-2xl tracking-[0.2em] text-white/60">
            {{ title }}
          </span>
        </div>

        <!-- Job Target -->
        <div
          class="mb-12 md:mb-16"
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          style="transition: opacity 0.8s ease-out 0.5s;"
        >
          <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-3">求职意向</p>
          <p class="font-sans text-sm md:text-base text-white/70">
            视觉设计 · UI设计 · 品牌设计
          </p>
        </div>
      </div>

      <!-- Bottom Info Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-12 md:pb-16"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.8s ease-out 0.6s;"
      >
        <div>
          <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-2">Awards</p>
          <p class="font-sans text-sm text-white/70">5+ 获奖经历</p>
        </div>
        <div>
          <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-2">Projects</p>
          <p class="font-sans text-sm text-white/70">20+ 完成项目</p>
        </div>
        <div>
          <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-2">Skills</p>
          <p class="font-sans text-sm text-white/70">PS / AI / ID / Figma</p>
        </div>
        <div>
          <p class="font-sans text-xs tracking-[0.15em] text-white/30 uppercase mb-2">Location</p>
          <p class="font-sans text-sm text-white/70">{{ location }}</p>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-6 md:left-12 lg:left-20"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      style="transition: opacity 0.8s ease-out 0.8s;"
    >
      <div class="flex items-center gap-4">
        <div class="w-px h-10 md:h-12 bg-white/20 relative overflow-hidden">
          <div class="absolute top-0 w-full h-1/2 bg-white animate-pulse"></div>
        </div>
        <span class="font-sans text-xs tracking-[0.2em] text-white/40 uppercase">Scroll</span>
      </div>
    </div>
  </section>
</template>
