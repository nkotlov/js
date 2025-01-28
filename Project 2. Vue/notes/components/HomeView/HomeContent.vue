<template>
  <div class="home-content">
    <h2>Добро пожаловать в приложение для заметок! 📝</h2>
    <button class="notes-btn" @click="$router.push('/notes')">📂 Перейти к заметкам</button>
  </div>
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.notes-btn {
  background: #007bff;
  color: white;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.notes-btn:hover {
  background: #0056b3;
}
</style>
