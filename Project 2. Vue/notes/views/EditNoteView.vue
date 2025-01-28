<template>
  <div class="edit-wrapper">
    <div class="edit-container">
      <EditHeader />
      <EditForm v-if="note" :note="note" @save="saveNote" @cancel="cancelEdit" />
      <p v-else class="error-message">⚠ Заметка не найдена!</p>
    </div>
  </div>
</template>

<script>
import EditHeader from "@/components/EditNoteView/EditHeader.vue";
import EditForm from "@/components/EditNoteView/EditForm.vue";

export default {
  components: { EditHeader, EditForm },
  props: ["id"],
  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      note: null,
    };
  },
  mounted() {
    this.note = this.notes.find((n) => n.id == this.id);

    if (!this.note) {
      alert("Ошибка: Заметка не найдена!");
      this.$router.push("/notes");
    }
  },
  methods: {
    saveNote(updatedNote) {
      if (!updatedNote.title.trim() || !updatedNote.content.trim()) {
        alert("Ошибка: заголовок и текст заметки не могут быть пустыми!");
        return;
      }

      this.notes = this.notes.filter((n) => n.id !== updatedNote.id);
      updatedNote.id = Date.now();
      this.notes.unshift(updatedNote);

      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.$router.push("/notes");
    },
    cancelEdit() {
      this.$router.push("/notes");
    },
  },
};
</script>

<style scoped>
.edit-container {
  width: 60vw;
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.edit-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.error-message {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>