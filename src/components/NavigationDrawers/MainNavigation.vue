<template>
  <v-navigation-drawer v-model="drawer" app width="400px">
    <v-app-bar flat :color="color">
      <v-avatar @click.stop="left = !left">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-avatar>
      <v-spacer></v-spacer>

      <v-btn icon :color="NavItemColor">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon :color="NavItemColor">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon :color="NavItemColor" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar flat :color="color">
      <v-text-field
        v-model="message"
        solo
        flat
        hide-details
        clear-icon="mdi-close-circle"
        clearable
        type="text"
        append-icon="mdi-magnify"
        placeholder="Search"
        @click:append-outer="sendMessage"
        @click:clear="clearMessage"
      ></v-text-field>
    </v-app-bar>
    <v-list dense>
      <v-list-item-group :color="color">
        <v-list-item
          v-for="(item, i) in users"
          :key="i"
          @click="selectedUser(item)"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.message"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    message: "",
    left: false,
  }),
  props: {
    color: String,
    users: Array,
    NavItemColor: String,
  },
  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
  },
};
</script>

<style></style>