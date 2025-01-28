<template>
  <div class="note-item" :class="{ pinned: note.pinned }">
    <div class="note-header">
      <span class="note-title">{{ note.title }}</span>
      <div class="actions">
        <button class="pin-btn" @click="$emit('toggle-pin', note)" :class="{ active: note.pinned }">
          {{ note.pinned ? '📌 Открепить' : '📌 Закрепить' }}
        </button>
        <button class="delete-btn" @click="$emit('delete-note', note)">🗑</button>
      </div>
    </div>
    <router-link :to="'/note/' + note.id" class="note-content">
      {{ note.content.length > 60 ? note.content.substring(0, 60) + "..." : note.content }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["note"],
};
</script>

<style scoped>
.note-item {
  width: 40vw;
  max-width: 600px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  transition: background 0.3s, transform 0.2s;
}

.note-item.pinned {
  background: #fffae6 !important;
  border-left: 5px solid orange;
}

.pin-btn {
  background: gray;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  transition: background 0.3s;
}

.pin-btn.active {
  background: orange;
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 5px;
}

.note-content {
  color: #333;
  font-size: 16px;
  white-space: normal;
  line-height: 1.5;
}
</style>
