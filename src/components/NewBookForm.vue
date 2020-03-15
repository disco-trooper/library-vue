<template>
  <v-dialog v-model="dialog" width="50%" @click:outside="resetData()">
    <template v-slot:activator="{ on }">
      <v-btn dark class="mt-2" v-on="on">
        Add New Book
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Add New Book
      </v-card-title>

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="title"
                :rules="titleRules"
                label="Title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="author"
                :rules="authorRules"
                label="Author"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="currentStatus"
                :items="status"
                label="Status"
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                v-model="notes"
                auto-grow
                class="mx-2"
                label="Notes"
                rows="1"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark @click="addNewBook">
          Add Book
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'NewBookForm',
  data() {
    return {
      dialog: false,
      valid: false,
      author: '',
      title: '',
      titleRules: [(v) => !!v || 'Title is required'],
      authorRules: [(v) => !!v || 'Author is required'],
      status: ['Read', 'Unread'],
      currentStatus: 'Read',
      notes: '',
    };
  },
  methods: {
    addNewBook() {
      if (!this.valid) return;
      this.dialog = false;
      this.$emit('bookAdded', {
        title: this.title,
        author: this.author,
        status: this.currentStatus,
        notes: this.notes,
      });
    },
    resetData() {
      this.title = '';
      this.author = '';
      this.currentStatus = 'Read';
      this.notes = '';
    },
  },
};
</script>
