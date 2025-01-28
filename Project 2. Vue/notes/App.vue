<template>
  <div class="app-container">
    <header>
      <h1>📒 Мои заметки</h1>
    </header>

    <main>
      <div v-if="$route.path === '/'" class="home-content">
        <h2>Добро пожаловать в приложение для заметок! 📝</h2>
        <button class="notes-btn" @click="$router.push('/notes')">
          📂 Перейти к заметкам
        </button>
      </div>
      <router-view v-else></router-view>
    </main>

    <footer>
      <p>© 2025 | Vue Notes App</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: #007bff;
  color: white;
  padding: 15px;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 24px;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

footer {
  text-align: center;
  padding: 10px;
  background: #f8f9fa;
  width: 100%;
}
</style>
