<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters>
      <div class="display-1 mr-3">Welcome! {{ $store.state.username }}!</div>
      <v-avatar size="100">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        >
        </v-img>
      </v-avatar>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" md="6">
        <v-card height="150">
          <div class="d-flex">
            <v-card-title>
              Your Profile
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn class="ma-4" color="light-green" dark @click="openDialog">
              edit
            </v-btn>
          </div>
          <div class="d-flex text-left ml-4 mt-4">
            <v-list-item-title class="font-weight-medium">
              Full Name:
            </v-list-item-title>
            <v-list-item-title class="text-right mr-4">
              {{ $store.state.username }}
            </v-list-item-title>
          </div>
          <div class="ml-4 mr-4">
            <v-divider></v-divider>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card height="200">
          <v-card-title>
            Add Position
          </v-card-title>
          <v-card-text>
            sorry.. I develop now..
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="400">
      <v-card ref="form" class="pa-4">
        <v-card-text>
          <v-row align="center" no-gutters>
            <div>
              Avatar Image
            </div>
            <v-spacer></v-spacer>
            <v-avatar size="100">
              <v-hover v-slot="{ hover }">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  src="https://picsum.photos/id/11/500/300"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out light-green darken-2 v-card--reveal display-1 white--text"
                      style="height: 100%; width: 100%; padding-left: 20px; padding-top: 30px"
                      @click="editImage"
                    >
                      Edit
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-avatar>
          </v-row>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            :placeholder="$store.state.username"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text @click="openDialog">
            close
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { api } from '../../apis/api'

export default {
  name: '',
  data: () => ({
    errorMessages: '',
    name: null,
    formHasErrors: false,
    dialog: false,
  }),

  computed: {
    form() {
      return {
        name: this.name,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name ? `Hey! I'm required` : ''

      return true
    },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false
      const body = {
        userId: this.$store.state.user.username,
        name: this.name,
      }
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)

        if (!this.formHasErrors) {
          this.$store.commit('setUsername', this.name)
          api.saveUser(body)
        }
      })
      this.dialog = false
    },
    editImage() {
      console.log('click')
    },
    openDialog() {
      if (this.dialog) {
        this.dialog = false
      } else {
        this.dialog = true
      }
    },
  },
}
</script>

<style scoped></style>
