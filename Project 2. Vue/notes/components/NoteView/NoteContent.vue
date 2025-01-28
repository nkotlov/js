<template>
  <div class="note-content">
    <p>{{ content }}</p>
    <small class="category">📌 Категория: {{ category }}</small>
  </div>
</template>

<script>
export default {
  props: ["content", "category"],
};
</script>

<style scoped>
.note-content {
  font-size: 18px;
  line-height: 1.6;
}

.category {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>
