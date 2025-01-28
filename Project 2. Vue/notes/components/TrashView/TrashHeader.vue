<template>
  <div class="top-bar">
    <button class="back-btn" @click="$router.push('/notes')">🔙 Назад</button>
    <h2> 🗑 Корзина ({{ trashCount }}) </h2>
    <button class="clear-btn" @click="$emit('clear')">🚮 Очистить корзину</button>
  </div>
</template>

<script>
export default {
  props: ["trashCount"]
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-btn, .clear-btn {
  font-size: 16px;
  background: #f8f9fa;
  border: 1px solid #ccc;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.back-btn:hover, .clear-btn:hover {
  background: #e0e0e0;
}
</style>
