<script setup lang="ts">
import { ref } from 'vue'

const { src } = defineProps<{ src: string }>()
const realsrc = ref('')
const loaded = ref(false)

onMounted(() => nextTick(() => realsrc.value = src),
)
</script>

<template>
  <transition name="fade">
    <img
      v-show="loaded"
      alt=""
      :src="realsrc"
      @load="loaded = true"
      @loadingComplete="loaded = true"
    >
  </transition>
</template>
