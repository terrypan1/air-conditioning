<!-- <script setup>
//[id].vue 路由傳參
const route = useRoute()
console.log(route)
console.log(route.params.id);
</script>
<template>
    <h1>課程的頁面:{{ route.params.id }}</h1>
</template> -->
<script setup>
//[id].vue 路由傳參
import { useRoute } from 'vue-router'

const route = useRoute()
const courseId = route.params.id

console.log(route)
console.log(courseId)
//Hydration completed but contains mismatches. 會有這種抱錯
</script>
<template>
  <!-- <h1>課程的頁面: {{ courseId }} </h1> -->
  <h1>課程的頁面: {{ $route.params.id }} </h1>
</template>