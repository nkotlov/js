  <template>
    <div class="top-bar">
      <button class="back-btn" @click="$emit('go-back')">🔙 Назад</button>
      <h2>{{ title || "Без названия" }}</h2>
    </div>
  </template>

  <script>
  export default {
    props: ["title"],
  };
  </script>

  <style scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .back-btn {
    background: #007bff;
    color: white;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .back-btn:hover {
    background: #0056b3;
  }
  </style>
