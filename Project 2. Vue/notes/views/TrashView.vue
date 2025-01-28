<template>
  <div class="trash-container">
    <TrashHeader :trash-count="trash.length" @clear="clearTrash" />
    <TrashList
        :trash="trash"
        @restore="restoreNote"
        @delete="deleteForever"
    />
  </div>
</template>

<script>
import TrashHeader from "@/components/TrashView/TrashHeader.vue";
import TrashList from "@/components/TrashView/TrashList.vue";

export default {
  components: { TrashHeader, TrashList },
  data() {
    return {
      trash: JSON.parse(localStorage.getItem("trash")) || [],
    };
  },
  methods: {
    restoreNote(note) {
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      const newNote = { ...note, id: Date.now() };
      notes.unshift(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));

      this.trash = this.trash.filter(n => n.id !== note.id);
      localStorage.setItem("trash", JSON.stringify(this.trash));
    },
    deleteForever(noteId) {
      this.trash = this.trash.filter(note => note.id !== noteId);
      localStorage.setItem("trash", JSON.stringify(this.trash));
    },
    clearTrash() {
      this.trash = [];
      localStorage.setItem("trash", JSON.stringify(this.trash));
    }
  }
};
</script>

<style scoped>
.trash-container {
  text-align: center;
  padding: 20px;
}
</style>
