<template>
  <div id="app">
    <h1>Notes</h1>
    
    <!-- Input section for adding new notes -->
    <textarea v-model="newNote" placeholder="Write a note..."></textarea>
    <button @click="addNote">Add Note</button>

    <!-- List of notes -->
    <div v-if="notes.length">
      <h2>Your Notes:</h2>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          <span v-html="note"></span>
          <button @click="deleteNote(index)">Dismiss</button>
        </li>
      </ul>
    </div>
    
    <p v-else>No notes yet.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',  
      notes: JSON.parse(localStorage.getItem('notes') || '[]'),
    };
  },
  methods: {
    addNote() {
      if (this.newNote.trim() !== '') {
        const sanitizedNote = this.sanitizeInput(this.newNote);
        this.notes.push(sanitizedNote);
        this.newNote = '';  
        this.saveNotes();  
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      this.saveNotes();
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    sanitizeInput(input) {
      const element = document.createElement('div');
      element.innerText = input;
      return element.innerHTML;
    }
  },
};
</script>

<style scoped>
textarea {
  width: 80%;
  height: 80px;
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
}

li {
  margin-bottom: 10px;
}
</style>
