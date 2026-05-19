<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) return

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true

  setTimeout(() => {
    isSubmitted.value = false
    formData.value = { name: '', email: '', message: '' }
  }, 3000)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('contact')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="contact" class="py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        class="mb-24"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out;"
      >
        <span class="font-sans text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">04 / Contact</span>
        <div class="w-12 h-px bg-black"></div>
      </div>

      <div class="grid lg:grid-cols-[1fr,1fr] gap-24 lg:gap-32">
        <!-- Left - Contact Info -->
        <div
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          style="transition: opacity 0.6s ease-out 0.2s;"
        >
          <h2 class="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-12">
            LET'S<br/>TALK
          </h2>

          <p class="font-sans text-base leading-relaxed text-black/60 mb-16 max-w-md">
            如果您对设计合作感兴趣，或者想了解更多关于我的作品，请随时与我联系。
          </p>

          <div class="space-y-8">
            <div class="group">
              <span class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Phone</span>
              <p class="font-sans text-xl text-black mt-1">139 8619 4447</p>
            </div>

            <div class="group">
              <span class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Email</span>
              <p class="font-sans text-xl text-black mt-1">wangpuyuan@email.com</p>
            </div>

            <div class="group">
              <span class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Location</span>
              <p class="font-sans text-xl text-black mt-1">湖北工业大学</p>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex gap-6 mt-16">
            <a href="#" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right - Contact Form -->
        <div
          :class="isVisible ? 'opacity-100' : 'opacity-0'"
          style="transition: opacity 0.6s ease-out 0.4s;"
        >
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div>
              <label class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Name</label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full bg-transparent border-b border-black/20 py-4 font-sans text-lg focus:outline-none focus:border-black transition-colors"
                placeholder="您的姓名"
                required
              />
            </div>

            <div>
              <label class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Email</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full bg-transparent border-b border-black/20 py-4 font-sans text-lg focus:outline-none focus:border-black transition-colors"
                placeholder="您的邮箱"
                required
              />
            </div>

            <div>
              <label class="font-sans text-xs tracking-[0.15em] text-black/30 uppercase">Message</label>
              <textarea
                v-model="formData.message"
                rows="4"
                class="w-full bg-transparent border-b border-black/20 py-4 font-sans text-lg focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="留言内容..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting || isSubmitted"
              class="w-full py-5 bg-black text-white font-sans text-sm tracking-[0.2em] uppercase hover:bg-gray-800 disabled:opacity-50 transition-colors duration-300"
            >
              {{ isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="mt-32 pt-8 border-t border-black/10"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.6s ease-out 0.6s;"
      >
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p class="font-sans text-xs text-black/30 tracking-wider">
            © 2024 WANG PUYUAN. ALL RIGHTS RESERVED.
          </p>
          <p class="font-sans text-xs text-black/30 tracking-wider">
            HUBUT · PRODUCT DESIGN
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
