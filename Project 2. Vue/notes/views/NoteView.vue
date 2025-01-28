<template>
  <div class="note-container" v-if="note">
    <NoteHeader :title="note.title" @go-back="$router.push('/notes')" />
    <NoteContent :content="note.content" :category="note.category" />
    <NoteActions @edit="editNote" @delete="deleteNote" />
  </div>

  <p v-else class="not-found">⛔ Заметка не найдена.</p>
</template>

<script>
import NoteHeader from "../components/NoteView/NoteHeader.vue";
import NoteContent from "../components/NoteView/NoteContent.vue";
import NoteActions from "../components/NoteView/NoteActions.vue";

export default {
  components: { NoteHeader, NoteContent, NoteActions },
  props: ["id"],
  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      note: null,
    };
  },
  mounted() {
    this.loadNote();
  },
  watch: {
    id: "loadNote",
  },
  methods: {
    loadNote() {
      this.notes = JSON.parse(localStorage.getItem("notes")) || [];
      this.note = this.notes.find((n) => n.id == this.id) || null;
    },
    editNote() {
      this.$router.push(`/edit/${this.id}`);
    },
    deleteNote() {
      if (!this.note) return;
      let trash = JSON.parse(localStorage.getItem("trash")) || [];
      trash.unshift(this.note);
      localStorage.setItem("trash", JSON.stringify(trash));

      this.notes = this.notes.filter((n) => n.id !== this.note.id);
      localStorage.setItem("notes", JSON.stringify(this.notes));

      this.$router.push("/notes");
    },
  },
};
</script>

<style scoped>
.note-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.not-found {
  font-size: 18px;
  color: red;
  text-align: center;
}
</style>
