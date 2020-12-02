<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="asses"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'History',
  data: () => ({
    search: '',
    asses: '',
    items: [
      {
        name: 'ガスト',
        time: '11/30',
        asses: 10.0,
      },
      {
        name: 'マクド',
        time: '11/30',
        asses: 6.0,
      },
      {
        name: 'カーシェア',
        time: '11/30',
        asses: 8.0,
      },
      {
        name: 'カフェ',
        time: '11/30',
        asses: 2.0,
      },
    ],
  }),
  computed: {
    headers() {
      return [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Time',
          value: 'time',
        },
        {
          text: 'Assessment',
          value: 'asses',
          filter: value => {
            if (!this.asses) return true

            return value < parseInt(this.asses)
          },
        },
      ]
    },
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === 'string' &&
        value
          .toString()
          .toLocaleUpperCase()
          .indexOf(search) !== -1
      )
    },
  },
}
</script>

<style scoped></style>
