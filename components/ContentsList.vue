<script setup lang="ts">
const { data: questions } = await useFetch("/api/contents");
</script>

<template>
  <div class="mt-4">
    <h1 class="sr-only">contents list</h1>
    <ul role="list" class="space-y-2 mt-4 divide-y divide-sws-gray2">
      <li v-for="item in questions" :key="item.id">
        <Content :question="item" />
      </li>
    </ul>
  </div>
</template>
