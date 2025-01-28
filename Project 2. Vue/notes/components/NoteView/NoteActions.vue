<template>
  <div class="actions">
    <button class="edit-btn" @click="$emit('edit')">✏️ Редактировать</button>
    <button class="delete-btn" @click="$emit('delete')">🗑 Удалить</button>
  </div>
</template>

<style scoped>
.actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.edit-btn {
  background: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-btn:hover {
  background: #218838;
}

.delete-btn {
  background: #dc3545;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c82333;
}
</style>
