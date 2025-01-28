<template>
  <div class="top-bar">
    <h1 class="title">📒 Мои заметки</h1>
    <div class="buttons">
      <button class="home-btn" @click="$router.push('/')">🏠 На главную</button>
      <button class="trash-btn" @click="$router.push('/trash')">🗑 Корзина ({{ trashCount }})</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trash-count"],
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 101;
}

.title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

.buttons {
  display: flex;
  gap: 10px;
}

.home-btn, .trash-btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background: #0059ff;
  color: white;
  border-radius: 5px;
  transition: 0.3s;
}
</style>
