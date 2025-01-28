import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotesView from '../views/NotesView.vue';
import NoteView from '../views/NoteView.vue';
import EditNoteView from '../views/EditNoteView.vue';
import TrashView from '../views/TrashView.vue';

const routes = [
    { path: "/", component: HomeView },
    { path: "/notes", component: NotesView },
    { path: "/note/:id", component: NoteView, props: true },
    { path: "/edit/:id?", component: EditNoteView, props: true },
    { path: "/trash", component: TrashView }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
