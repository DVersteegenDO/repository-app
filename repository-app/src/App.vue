<template>
  <v-app>
    <v-main>

      <div id="top-bar" class="container">

        <h1>Repository Factory Application</h1>

        <div id="test" class="container" style="width: 720px;">

          <div id="test-test" style="display: flex; flex-direction: row;">

            <v-select style="flex-basis: 20%;" v-model="selectedApi" :items="dataApis" item-title="name"
              item-value="name" label="API" hide-details="auto" variant="outlined" class="select"></v-select>

            <v-select v-model="selectedParameter" style="flex-basis: 60%;" :items="kadasterParameters" item-title="name"
              item-value="name" label="Parameter" hide-details="auto" variant="outlined" class="select"></v-select>

            <v-btn style="flex-basis: 20%; margin:10px 10px 0 0; height:56px" variant="outlined" @click="addParameter">
              Click Me!
            </v-btn>

          </div>

          <div id="input-container">

            <div v-for="(p, index) in parameters">

              <v-text-field v-model="parameters[index]" :label="index" variant="outlined"
                class="text-field"></v-text-field>

            </div>

          </div>

          <div class="container">

            <p>{{ parameters }}</p>

          </div>

          <v-btn :loading="loading" variant="outlined" @click="fetch">
            Click Me!
            <template v-slot:loader>
              <v-progress-linear indeterminate></v-progress-linear>
            </template>
          </v-btn>

        </div>

        <DataComponent :data="data"></DataComponent>

      </div>

    </v-main>

  </v-app>
</template>

<script>

import { toRaw } from 'vue';
import DataComponent from './components/DataComponent.vue';
import { RepositoryFactory } from './factories/RepositoryFactory';

const KadasterRepository = RepositoryFactory.get('kadaster');
const KvkRepository = RepositoryFactory.get('kvk');
const RdwRepository = RepositoryFactory.get('rdw');

export default {
  data() {
    return {
      loading: false,
      message: '',
      selectedApi: 'KvK',
      selectedParameter: 'postcode',
      repository: KvkRepository,
      dataApis: [
        { name: 'Kadaster' },
        { name: 'KvK' },
        { name: 'RDW' },
      ],
      kadasterParameters: [
        { name: 'postcode' },
        { name: 'Huisnummer' },
        { name: 'Plaats' }
      ],
      data: [],
      parameters: {

      },
      params: {
        'postcode': '5962AG',
        'huisnummer': 10
      },
    }
  },
  computed: {
    //   query: {
    //     get() {
    //       var params = '?';

    //       for (var count = 0; count < this.parameters.length; count++) {

    //         if (this.parameters[count].value != "") {

    //           params = `${params}${this.parameters[count].name}=${this.parameters[count].value}&`;
    //         }
    //       }

    //       params = params.substring(0, params.length - 1);
    //       return `${params}`.toLowerCase();
    //     }
    //   },
    //   axiosParms() {
    //     const axiosP = new URLSearchParams();

    //     for (var count = 0; count < this.parameters.length; count++) {
    //       axiosP.append(this.parameters[count].name, this.parameters[count].value);
    //     }

    //     return axiosP;
    //   }
  },
  methods: {

    async fetch() {

      this.loading = true;
      await this.repository.postTest(this.parameters)
        .then(response => {
          console.log(response);
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        }).finally(response => {
          this.loading = false;
        });
    },
    addParameter() {

      if (!Object.keys(this.parameters).includes(this.selectedParameter)) {

        this.parameters[this.selectedParameter] = '';
      }
    },
  },
  watch: {
    selectedApi() {
      switch (this.selectedApi) {

        case 'Kadaster':
          this.repository = KadasterRepository;
          break;

        case 'KvK':
          this.repository = KvkRepository;
          break;

        case 'RDW':
          this.repository = RdwRepository;
          break;
      }
    }
  }
}


</script>

<style>
#top-bar {
  height: auto;
}

.container {
  background-color: rgb(64, 64, 64);
  border: whitesmoke 5px solid;
  width: calc(100% - 20px);
  margin: 10px;
}

.container>h1 {
  margin: 10px 0 10px 20px;
}

.container>h2 {
  margin: 10px 0 10px 20px;
}

.container>button {
  margin: 10px 0 10px 10px;
}

.container>p {
  margin: 10px 0 10px 10px;
}

.select {
  margin: 10px;
}

.text-field {
  width: calc(100% - 20px);
  margin: 0 10px;
}
</style>
