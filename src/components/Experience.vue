<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const experiences = [
  {
    year: '2025',
    title: '向量设计 · 视觉设计实习生',
    company: '曾任',
    description: '参与品牌视觉设计工作，专注AIgc设计实践',
    award: false,
  },
  {
    year: '2025',
    title: '十九届中国好创意设计大赛',
    company: '参赛',
    description: '参赛作品入围，展示年轻设计师的创意实力',
    award: true,
  },
  {
    year: '2024',
    title: '阿里国际站AIgc视觉设计',
    company: '曾任 · Aigc视觉设计实习生',
    description: '参与阿里国际站AIgc生成式设计工具训练，负责跨境电商Banner和产品主图的AIgc设计',
    award: false,
  },
  {
    year: '2024',
    title: '米兰设计周',
    company: '曾参与',
    description: '作品入选米兰设计周高校设计展，走向国际舞台',
    award: true,
  },
  {
    year: '2023',
    title: 'VR虚拟博物馆',
    company: '曾任 · 项目负责人',
    description: '基于Unity的VR虚拟博物馆系统开发，负责unity交互功能开发、VR手柄交互功能实现、视觉呈现设计',
    award: false,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('experience')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="experience" class="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-black text-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        class="mb-12 md:mb-20"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out;"
      >
        <span class="font-sans text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">03 / Experience</span>
        <div class="w-12 h-px bg-white"></div>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl">
        <!-- Vertical Line -->
        <div class="absolute left-0 md:left-0 top-0 bottom-0 w-px bg-white/10"></div>

        <!-- Timeline Items -->
        <div class="space-y-12 md:space-y-16">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-8 md:pl-12"
            :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
            :style="{ transition: `all 0.6s ease-out ${0.1 + index * 0.12}s` }"
          >
            <!-- Node -->
            <div
              class="absolute left-0 top-2 w-3 h-3 rounded-full border border-white/40"
              :class="exp.award ? 'bg-white' : 'bg-transparent'"
            ></div>

            <!-- Year -->
            <span class="font-sans text-xs tracking-[0.2em] text-white/30 uppercase">{{ exp.year }}</span>

            <!-- Title -->
            <h3 class="font-sans font-bold text-2xl md:text-3xl mt-2 mb-2 text-white">{{ exp.title }}</h3>

            <!-- Company/Role -->
            <p class="font-sans text-sm text-white/40 mb-3">{{ exp.company }}</p>

            <!-- Description -->
            <p class="font-sans text-sm leading-relaxed text-white/50 max-w-xl">{{ exp.description }}</p>

            <!-- Award Badge -->
            <div v-if="exp.award" class="mt-4">
              <span class="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-white uppercase">
                <span class="w-4 h-px bg-white"></span>
                Featured
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Awards Section -->
      <div class="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-white/10">
        <h4 class="font-sans text-xs tracking-[0.2em] text-white/30 uppercase mb-8">Awards & Honors</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="space-y-1">
            <p class="font-sans text-sm text-white/80">米兰设计周高校设计展入选</p>
            <p class="font-sans text-xs text-white/30">2024.04</p>
          </div>
          <div class="space-y-1">
            <p class="font-sans text-sm text-white/80">十九届中国好创意设计大赛</p>
            <p class="font-sans text-xs text-white/30">2025.01</p>
          </div>
          <div class="space-y-1">
            <p class="font-sans text-sm text-white/80">学院空间优秀作品银奖</p>
            <p class="font-sans text-xs text-white/30">2023.12</p>
          </div>
          <div class="space-y-1">
            <p class="font-sans text-sm text-white/80">第十一届中国刺绣艺术展入选</p>
            <p class="font-sans text-xs text-white/30">2023.12</p>
          </div>
          <div class="space-y-1">
            <p class="font-sans text-sm text-white/80">省级大学生创新创业项目立项</p>
            <p class="font-sans text-xs text-white/30">2023.07</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
