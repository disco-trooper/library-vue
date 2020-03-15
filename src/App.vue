<template>
  <v-app>
    <v-app-bar app color="grey darken-2" dark>
      <v-toolbar-title class="display-1 font-weight-light"
        >Library</v-toolbar-title
      >
    </v-app-bar>
    <v-content>
      <v-container>
        <app-table></app-table>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import appTable from './components/Table.vue';

export default {
  name: 'App',
  components: { appTable },
  data() {
    return {};
  },
};
</script>
