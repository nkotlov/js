<template>
  <div class="notes-list">
    <NotesItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @delete-note="$emit('delete-note', note)"
        @toggle-pin="$emit('toggle-pin', note)"
    />
  </div>
</template>

<script>
import NotesItem from "@/components/NotesView/NotesItem.vue";

export default {
  components: { NotesItem },
  props: ["notes"],
};
</script>

<style scoped>
.notes-list {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
