<template>
  <div>
    <v-card>
      <v-card-title>
        Books
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="books" :search="search">
        <template v-slot:item.title="{ item }">
          <v-edit-dialog :return-value.sync="item.title">
            {{ item.title }}
            <template v-slot:input>
              <v-text-field v-model="item.title" label="Edit"></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:item.author="{ item }">
          <v-edit-dialog :return-value.sync="item.author">
            {{ item.author }}
            <template v-slot:input>
              <v-text-field v-model="item.author" label="Edit"></v-text-field>
            </template>
          </v-edit-dialog> </template
        ><template v-slot:item.status="{ item }">
          <v-btn
            outlined
            small
            :color="item.status === 'Read' ? 'red' : 'black'"
            @click="
              item.status === 'Read'
                ? (item.status = 'Unread')
                : (item.status = 'Read');
              updateLocalStorage();
            "
            >{{ item.status }}
          </v-btn>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="
              clickedBook = item;
              deteleBook(clickedBook);
            "
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:item.notes="{ item }">
          <v-icon
            small
            @click.stop="
              notesDialog = true;
              clickedNote = item;
            "
          >
            mdi-comment-edit
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="notesDialog" width="500">
      <v-card>
        <v-card-title>
          <span class="headline">Notes</span>
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="clickedNote.notes"></v-textarea>
        </v-card-text>
      </v-card>
    </v-dialog>
    <app-new-book-form @bookAdded="addNewBook($event)"></app-new-book-form>
  </div>
</template>

<script>
import appNewBookForm from './NewBookForm.vue';

export default {
  name: 'Table',
  components: { appNewBookForm },
  data() {
    return {
      clickedNote: '',
      search: '',
      headers: [
        { text: 'Title', value: 'title', sortable: 'desc' },
        { text: 'Author', value: 'author', sortable: true },
        { text: 'Status', value: 'status', sortable: true },
        { text: 'Notes', value: 'notes', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      books: [],
      newBookDialog: false,
      notesDialog: false,
      clickedBook: '',
      localLibrary: JSON.parse(localStorage.getItem('books')),
      addDummies: JSON.parse(localStorage.getItem('addDummies')),
    };
  },
  updated() {
    localStorage.setItem('books', JSON.stringify(this.books));
  },
  created() {
    if (this.addDummies === null) {
      this.populateBookshelf();
      localStorage.setItem('books', JSON.stringify(this.books));
      return;
    }
    this.books = [];
    this.localLibrary.forEach((book) => {
      this.books.push(book);
    });
  },
  methods: {
    addNewBook(newBook) {
      this.books.push(newBook);
      localStorage.setItem('addDummies', false);
    },
    deteleBook(book) {
      this.books.splice(this.books.indexOf(book), 1);
      localStorage.setItem('addDummies', false);
    },
    populateBookshelf() {
      const orwell = {
        title: 'Nineteen Eighty-Four',
        author: 'George Orwell',
        notes: '',
        status: 'Read',
      };
      const nowBook = {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        status: 'Unread',
        notes: '',
      };
      this.books.push(orwell);
      this.books.push(nowBook);
    },
    updateLocalStorage() {
      localStorage.setItem('books', JSON.stringify(this.books));
      localStorage.setItem('addDummies', false);
    },
  },
};
</script>
