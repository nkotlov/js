<template>
  <li class="trash-item">
    <span>{{ note.title }}</span>
    <div class="actions">
      <button class="restore-btn" @click="$emit('restore', note)">♻ Восстановить</button>
      <button class="delete-btn" @click="$emit('delete', note.id)">❌ Удалить</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["note"]
};
</script>

<style scoped>
.trash-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffebeb;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}

.actions {
  display: flex;
  gap: 5px;
}

.restore-btn {
  background: green;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.delete-btn {
  background: #f10f0f;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
