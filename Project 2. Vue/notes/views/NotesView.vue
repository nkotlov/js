<template>
  <div class="notes-container">
    <NotesHeader :trash-count="trash.length" />
    <NotesSearch @search="updateSearch" @filter="updateCategory" @create="createNote" />
    <NotesList :notes="filteredNotes" @delete-note="deleteNote" @toggle-pin="togglePin" />
  </div>
</template>

<script>
import NotesHeader from "@/components/NotesView/NotesHeader.vue";
import NotesSearch from "@/components/NotesView/NotesSearch.vue";
import NotesList from "@/components/NotesView/NotesList.vue";

export default {
  components: {NotesHeader, NotesSearch, NotesList},
  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      trash: JSON.parse(localStorage.getItem("trash")) || [],
      searchQuery: "",
      selectedCategory: "",
    };
  },
  computed: {
    filteredNotes() {
      return this.notes
          .filter((note) => {
            const title = note.title ? note.title.toLowerCase() : "";
            const content = note.content ? note.content.toLowerCase() : "";
            return (
                (title.includes(this.searchQuery.toLowerCase()) ||
                    content.includes(this.searchQuery.toLowerCase())) &&
                (this.selectedCategory ? note.category === this.selectedCategory : true)
            );
          })
          .sort((a, b) => {
            if (a.pinned && b.pinned) return b.pinnedAt - a.pinnedAt;
            if (a.pinned) return -1;
            if (b.pinned) return 1;
            return b.id - a.id;
          });
    },
  },
  methods: {
    updateSearch(query) {
      this.searchQuery = query;
    },
    updateCategory(category) {
      this.selectedCategory = category;
    },
    createNote() {
      const newNote = {
        id: Date.now(),
        title: "Без названия",
        content: "",
        category: "Работа",
        pinned: false,
        pinnedAt: null,
      };

      this.notes.unshift(newNote);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.$router.push(`/edit/${newNote.id}`);
    },
    deleteNote(note) {
      note.pinned = false;
      this.trash.unshift(note);
      this.notes = this.notes.filter((n) => n.id !== note.id);
      localStorage.setItem("trash", JSON.stringify(this.trash));
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    togglePin(note) {
      note.pinned = !note.pinned;
      note.pinnedAt = note.pinned ? Date.now() : null;
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
};
</script>

<style scoped>
.notes-container {
  text-align: center;
  max-width: 1400px;
  margin: auto;
  padding-bottom: 50px;
}
</style>
