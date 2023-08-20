<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <!-------------------- right side Main navigation drawer------------- -->
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
            <!-- <v-btn
              v-if="mobilebreakdown"
              icon
              :color="NavItemColor"
              @click.stop="drawer = !drawer"
            >
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn> -->
          </v-app-bar>
          <v-app-bar flat :color="color">
            <v-text-field
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
                  <v-list-item-subtitle
                    v-html="item.message"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <!-------------------- Top Nav bar of chart section----------------- -->
        <v-app-bar app clipped-right flat :color="color">
          <v-app-bar-nav-icon
            :color="NavItemColor"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-avatar
            @click.stop="drawerRight = true"
            v-if="selectedUserdata.name"
          >
            <v-img :src="selectedUserdata.avatar"></v-img>
          </v-avatar>
          <v-list-item-content class="ms-3" v-if="selectedUserdata.name">
            <v-list-item-title
              :class="`${NavItemColor}--text`"
              :color="NavItemColor"
              >{{ selectedUserdata.name }}</v-list-item-title
            >
            <v-list-item-subtitle
              :class="`${NavItemColor}--text`"
              class="caption"
            >
              Online
            </v-list-item-subtitle>
          </v-list-item-content>

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
        <!-------------------- left side navigation drawer------------- -->
        <v-navigation-drawer v-model="left" width="400px" fixed temporary>
          <v-app-bar flat height="120px" :color="color">
            <v-list dense flat>
              <v-list-item @click.stop="left = !left">
                <v-list-item-action>
                  <v-icon :color="NavItemColor">mdi-exit-to-app</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <h2 :class="`${NavItemColor}--text`">Profile</h2>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-app-bar>
          <v-card class="mx-auto pa-2" flat>
            <v-avatar size="200" class="ms-16">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-avatar>
            <v-card class="pa-3" flat>
              <v-text-field
                v-model="name"
                flat
                hide-details
                label="Name"
                type="text"
                @click:append-outer="sendMessage"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-card>
            <v-card class="pa-3" flat>
              <v-text-field
                v-model="description"
                flat
                hide-details
                label="Description"
                type="text"
                @click:append-outer="sendMessage"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-card>
          </v-card>
        </v-navigation-drawer>
        <!-------------------- right side navigation drawer------------- -->
        <v-navigation-drawer v-model="drawerRight" app right width="400px">
          <v-app-bar flat height="120px" :color="color">
            <v-list dense :color="color">
              <v-list-item @click.stop="drawerRight = !drawerRight">
                <v-list-item-action>
                  <v-icon :color="NavItemColor">mdi-exit-to-app</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <h2 :class="`${NavItemColor}--text`">Contact Info</h2>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-app-bar>
        </v-navigation-drawer>
        <!-------------------- Main container of chart section------------- -->
        <v-main>
          <v-container v-if="!selectedUserdata.name">
            <v-row justify="center" align="center">
              <v-col class="shrink">
                <v-img contain class="m-auto" src="../assets/chat.svg"></v-img>
              </v-col>
            </v-row>
            <v-col class="shrink">
              <h2 class="text-center">Let's Say Hi...!</h2>
              <p class="text-center">
                Easy to start a conversation just select the user who you
                intened to have a chat.
              </p>
            </v-col>
          </v-container>
          <v-container v-if="selectedUserdata.name">
            <div v-for="message of messages" :key="message">
              <v-card
                :class="`d-flex justify-start`"
                flat
                tile
                shaped
                v-if="message.from_message"
              >
                <v-card
                  class="pa-2 ma-1 rounded-tr-xl rounded-bl-xl"
                  outlned
                  elevation="2"
                  tile
                  width="300px"
                >
                  {{ message.txtMsg }}
                </v-card>
              </v-card>
              <v-card :class="`d-flex justify-end `" flat tile shaped v-else>
                <v-card
                  class="pa-2 ma-1 white--text rounded-tl-xl rounded-br-xl"
                  :color="color"
                  outlined
                  elevation="2"
                  tile
                  width="300px"
                >
                  <span class="p-0 m-0">{{ message.txtMsg }}</span>

                  <v-icon
                    v-if="message.view_msg"
                    class="d-flex justify-end"
                    color="success"
                    >mdi-check-all</v-icon
                  >
                </v-card>
              </v-card>
            </div>
          </v-container>
        </v-main>
        <!-------------------- message type area (send message section)------------- -->
        <v-footer
          app
          class="white--text"
          inset
          fixed
          bottom
          :color="color"
          v-if="selectedUserdata.name"
        >
          <v-app-bar flat :color="color">
            <v-col cols="12">
              <v-form class="d-flex">
                <v-text-field
                  v-model="message"
                  solo
                  flat
                  hide-details
                  clear-icon="mdi-close-circle"
                  clearable
                  type="text"
                  placeholder="Type a message"
                  @click:append-outer="sendMessage"
                  @click:clear="clearMessage"
                ></v-text-field>
                <v-btn icon :color="NavItemColor" @click="sendMessage()">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-form>
            </v-col>
          </v-app-bar>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    name: "Harley David",
    description: "Be good for poor.",
    drawerRight: false,
    right: false,
    left: false,
    password: "Password",
    show: false,
    message: "",
    filterBy: "",
    selectedUserdata: {},
    messages: [
      {
        txtMsg: "Hi hardy ....!",
        to: 1,
        from: 2,
        name: "Hardy",
        from_message: true,
        to_message: false,
        view_msg: true,
      },
      {
        txtMsg: "Hi dear How are you ....How you doing..!",
        to: 2,
        from: 1,
        name: "Max",
        from_message: false,
        to_message: true,
        view_msg: true,
      },
    ],
  }),

  props: {
    color: String,
    users: Array,
    NavItemColor: String,
  },
  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    selectedUser(data) {
      console.log(data);
      this.selectedUserdata = data;
      // this.drawer = false;
    },
    clearMessage() {
      this.message = "";
    },
    sendMessage() {
      const message = {
        txtMsg: this.message,
        to: this.selectedUserdata.id,
        from: this.selectedUserdata.id,
        name: this.selectedUserdata.name,
        from_message: false,
        to_message: true,
        view_msg: true,
      };
      this.message = "";
      this.receivedMessage(message);
    },
    receivedMessage(message) {
      this.messages.push(message);
      setTimeout(() => {
        this.messages.push({
          txtMsg: "Hi dear how you doing...!",
          to: 1,
          from: 2,
          name: "Hardy",
          from_message: true,
          view_msg: true,
          to_message: false,
        });
      }, 400);
    },
  },
};
</script>
<style>
.z-index {
  z-index: 999;
}
</style>