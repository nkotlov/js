<template>
  <div class="buttons">
    <button class="save-btn" @click="$emit('save', note)">💾 Сохранить</button>
    <button class="cancel-btn" @click="$emit('cancel')">❌ Отмена</button>
  </div>
</template>

<script>
export default {
  props: ["note"],
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.save-btn {
  background: #28a745;
  color: white;
  padding: 14px 22px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.save-btn:hover {
  background: #218838;
}

.cancel-btn {
  background: #dc3545;
  color: white;
  padding: 14px 22px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.cancel-btn:hover {
  background: #c82333;
}
</style>