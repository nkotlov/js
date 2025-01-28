<template>
  <form @submit.prevent="save">
    <input v-model="localNote.title" placeholder="Заголовок" class="form-control title-input" />
    <textarea v-model="localNote.content" placeholder="Текст заметки" class="form-control content-input"></textarea>
    <select v-model="localNote.category" class="form-control select-category">
      <option>Работа</option>
      <option>Учёба</option>
      <option>Идеи</option>
    </select>
    <EditActions :note="localNote" @save="save" @cancel="$emit('cancel')" />
  </form>
</template>

<script>
import EditActions from "@/components/EditNoteView/EditActions.vue";

export default {
  components: { EditActions },
  props: ["note"],
  data() {
    return {
      localNote: { ...this.note },
    };
  },
  methods: {
    save() {
      if (!this.localNote.title.trim() || !this.localNote.content.trim()) {
        alert("Ошибка: заголовок и текст заметки не могут быть пустыми!");
        return;
      }
      this.$emit("save", this.localNote);
    },
  },
};
</script>

<style scoped>
.form-control {
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}

.title-input {
  font-size: 22px;
  font-weight: bold;
}

.content-input {
  height: 300px;
  resize: none;
}

.select-category {
  cursor: pointer;
}
</style>