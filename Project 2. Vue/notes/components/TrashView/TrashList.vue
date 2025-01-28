<template>
  <div v-if="trash.length > 0" class="trash-list-container">
    <ul class="trash-list">
      <TrashItem
          v-for="note in trash"
          :key="note.id"
          :note="note"
          @restore="$emit('restore', note)"
          @delete="$emit('delete', note.id)"
      />
    </ul>
  </div>
  <p v-else class="empty-msg">Корзина пуста 🗑</p>
</template>

<script>
import TrashItem from "./TrashItem.vue";

export default {
  props: ["trash"],
  components: { TrashItem }
};
</script>

<style scoped>
.trash-list-container {
  max-height: 400px;
  overflow-y: auto;
}

.trash-list {
  list-style: none;
  padding: 0;
}

.empty-msg {
  font-size: 16px;
  color: gray;
  text-align: center;
}
</style>
