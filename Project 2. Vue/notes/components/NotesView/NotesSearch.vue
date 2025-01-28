<template>
  <div class="search-container">
    <button class="create-btn" @click="$emit('create')">✏️ Создать заметку</button>
    <input type="text" v-model="searchQuery" placeholder="🔍 Поиск..." class="search-bar" @input="$emit('search', searchQuery)" />
    <select v-model="selectedCategory" class="category-filter" @change="$emit('filter', selectedCategory)">
      <option value="">Все категории</option>
      <option value="Учёба">Учёба</option>
      <option value="Работа">Работа</option>
      <option value="Идеи">Идеи</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
    };
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 102;
}

.create-btn {
  background: #28a745;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.create-btn:hover {
  background: #218838;
}

.search-bar, .category-filter {
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
</style>
