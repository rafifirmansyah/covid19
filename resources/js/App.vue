<template>
    <main>
        <div class="container">
            <header class="mb-4">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="text-center mb-1">COVID-19</h1>
                        <h6 class="text-center">Laporan Pandemi COVID-19 Global & Indonesia Terupdate</h6>
                    </div>
                </div>
            </header>
            <content>
                <!-- HIGHLIGHT -->
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                        <b-card tag="article" style="width: 100%;height:100%" class="mb-2 banner-highlight-positif">
                            <b-card-text>
                                <div class="d-flex">
                                    <div class="text-white">
                                        <p class="text-white mb-0">TOTAL POSITIF</p>
                                        <h2 class="mb-0 number-font" v-if="highlight.positive">{{ highlight.positive }}</h2>
                                        <h2 class="mb-0 number-font" v-else>0   </h2>
                                        <p class="text-white mb-0">ORANG</p>
                                    </div>
                                    <div class="ml-auto">
                                        <img :src="'/images/positif.png'" alt="Positif" width="50" height="50">
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                        <b-card tag="article" style="width: 100%;height:100%" class="mb-2 banner-highlight-sembuh">
                            <b-card-text>
                                <div class="d-flex">
                                    <div class="text-white">
                                        <p class="text-white mb-0">TOTAL SEMBUH</p>
                                        <h2 class="mb-0 number-font" v-if="highlight.recovered">{{ highlight.recovered }}</h2>
                                        <h2 class="mb-0 number-font" v-else>0</h2>
                                        <p class="text-white mb-0">ORANG</p>
                                    </div>
                                    <div class="ml-auto">
                                        <img :src="'/images/sembuh.png'" alt="Sembuh" width="50" height="50">
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                        <b-card tag="article" style="width: 100%;height:100%" class="mb-2 banner-highlight-meniggal">
                            <b-card-text>
                                <div class="d-flex">
                                    <div class="text-white">
                                        <p class="text-white mb-0">TOTAL MENINGGAL</p>
                                        <h2 class="mb-0 number-font" v-if="highlight.deaths">{{ highlight.deaths }}</h2>
                                        <h2 class="mb-0 number-font" v-else>0</h2>
                                        <p class="text-white mb-0">ORANG</p>
                                    </div>
                                    <div class="ml-auto">
                                        <img :src="'/images/meninggal.png'" alt="Meninggal" width="50" height="50">
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>                        
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4">
                        <b-card tag="article" style="width: 100%;height:100%" class="mb-2 banner-highlight-indonesia">
                            <b-card-text>
                                <div class="d-flex">
                                    <div class="text-white mr-3">
                                        <h3 class="mb-0 number-font">INDONESIA</h3>
                                        <p class="text-white mb-0">
                                            <b v-if="highlight.indonesian.positive">{{ highlight.indonesian.positive }}</b>
                                            <b v-else>0</b> POSITIF,
                                            <b v-if="highlight.indonesian.recovered">{{ highlight.indonesian.recovered }}</b> 
                                            <b v-else>0</b> SEMBUH,
                                            <b v-if="highlight.indonesian.deaths">{{ highlight.indonesian.deaths }}</b>
                                            <b v-else>0</b> MENINGGAL
                                        </p>
                                    </div>
                                    <div class="ml-auto">
                                        <img :src="'/images/indonesia.png'" alt="Indonesia" width="50" height="50">
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>                           
                    </div>
                </div>
                <div class="col text-center">Sumber data : <a href="https://mathdro.id/" target="_blank">Mathdro.id</a>. Update terakhir : {{ highlight.last_update | moment("dddd, D MMMM YYYY HH:mm:ss") }} WIB</div>

                <!-- END HIGHLIGHT -->

                <!-- STATISTIK KASUS PERHARI -->
                <!-- <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xl-16">
                        <b-card header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h6 class="mb-0">Statistik Kasus Coronavirus di Indonesia</h6>
                            </template>
                            <b-card-text>
                                <div class="chart">
						            <apexcharts width="100%" height="300" type="bar" :options="chartOptions" :series="series"></apexcharts>


                                </div>
                                <div class="row">
                                    <div class="col text-center">
                                        <h5 class="font-weight-normal mt-2">
                                            POSITIF
                                        </h5>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-if="highlight.indonesian.positive">
                                            {{ highlight.indonesian.positive }}
                                        </h3>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-else>
                                            0
                                        </h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-lg font-weight-700">ORANG</span>
                                        </p>
                                    </div>
                                    <div class="col text-center">
                                        <h5 class="font-weight-normal mt-2">
                                            SEMBUH
                                        </h5>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-if="highlight.indonesian.recovered">
                                            {{ highlight.indonesian.recovered }}
                                        </h3>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-else>
                                            0
                                        </h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-lg font-weight-700">ORANG</span>
                                        </p>                                        
                                    </div>
                                    <div class="col text-center">
                                        <h5 class="font-weight-normal mt-2">
                                            MENINGGAL
                                        </h5>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-if="highlight.indonesian.deaths">
                                            {{ highlight.indonesian.deaths }}
                                        </h3>
                                        <h3 class="text-xxl mb-1 social-content number-font" v-else>
                                            0
                                        </h3>
                                        
                                        <p class="mb-0 text-muted">
                                            <span class="text-lg font-weight-700">ORANG</span>
                                        </p>                                        
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                </div> -->
                <!-- END STATISTIK KASUS PERHARI -->

                <!-- TABLE KASUS BERDASARKAN PROVINSI -->
                <div class="row row-custom">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xl-16">
                        <b-card header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h5 class="mb-0">Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h5>
                            </template>
                            <div class="table-responsive table-fix-head">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>PROVINSI</th>
                                            <th>POSITIF</th>
                                            <th>SEMBUH</th>
                                            <th>MENINGGAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="provinsi in provinsi.items" :key="provinsi.no">
                                            <td>{{ provinsi.no }}</td>
                                            <td>{{ provinsi.provinsi }}</td>
                                            <td>{{ provinsi.positif }}</td>
                                            <td>{{ provinsi.sembuh }}</td>
                                            <td>{{ provinsi.meninggal }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card>
                    </div>
                </div>
                <!-- END TABLE KASUS BERDASARKAN PROVINSI -->
                
                <!-- TABLE KASUS CORONAVIRUS DI INDONESIA -->
                <!-- <div class="row row-custom">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xl-16">
                        <b-card header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h5 class="mb-0">Data Kasus Coronavirus di Indonesia</h5>
                            </template>
                            <b-card-text>

                            <div class="table-responsive table-fix-head">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>UMUR</th>
                                            <th>GENDER</th>
                                            <th>STATUS</th>
                                            <th>PROVINSI</th>
                                            <th>WN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="indonesianCase in indonesianCase.items" :key="indonesianCase.no">
                                            <td>{{ indonesianCase.no }}</td>
                                            <td>{{ indonesianCase.umur }}</td>
                                            <td>{{ indonesianCase.gender }}</td>
                                            <td>{{ indonesianCase.status }}</td>
                                            <td>{{ indonesianCase.provinsi }}</td>
                                            <td>{{ indonesianCase.wn }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            </b-card-text>
                        </b-card>
                    </div>
                </div> -->
                <!-- END TABLE CORONAVIRUS DI INDONESIA -->

                <!-- KASUS CORONAVIRUS GLOBAL -->
                <div class="row row-custom">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xl-16">
                        <b-card header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h5 class="mb-0">Kasus Coronavirus Global</h5>
                            </template>
                            <b-card-text>

                            <div class="table-responsive table-fix-head">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>NEGARA</th>
                                            <th>WILAYAH</th>
                                            <th>POSITIF</th>
                                            <th>SEMBUH</th>
                                            <th>MENINGGAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="allCountryCases in allCountryCases.items" :key="allCountryCases.no">
                                            <td>{{ allCountryCases.no }}</td>
                                            <td>{{ allCountryCases.country }}</td>
                                            <td v-if="allCountryCases.province">{{ allCountryCases.province }}</td>
                                            <td v-else>-</td>
                                            <td>{{ allCountryCases.positive }}</td>
                                            <td>{{ allCountryCases.recovered }}</td>
                                            <td>{{ allCountryCases.deaths }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            </b-card-text>
                        </b-card>
                    </div>
                </div>
                <!-- END KASUS CORONAVIRUS GLOBAL -->
            </content>
        </div>
        <footer>
            <div class="container">
                <div class="row row-custom">
                    <div class="col-6 text-left">
                        <div class="mt-4">
                            Copyright &copy; 2020
                        </div>
                    </div>
                    <div class="col-6 text-right">
                        <div class="mt-4">
                            <strong>Made with</strong>  <span style="color: red"><i class="fa fa-heart"></i></span> <strong>by</strong> <strong><a href="https://github.com/rafifirmansyah">Rafi Firmansyah</a></strong> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
import * as covid19Global from './services/global_covid19_case';
import * as covid19Indonesian from './services/indonesian_covid19_case';
import VueApexCharts from 'vue-apexcharts';

export default {
    created() {
        // this.getIndonesianCasePerday();
        this.getGlobal();
        this.getIndonesianCase();
        this.getTotalCaseProvinsi();
        // this.getAllCaseIndonesian();
        this.getAllCountryDetails();
    },
    
    name: 'Covid19',
    components: {
        apexcharts: VueApexCharts,
    },
    data() {
        return {
            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'Mei',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],

            loadingProvinsi: true,

            provinsi: {

                items: [

                ],

            },

	        // chartOptions: {
	        //   chart: {
	        //     id: 'Line Chart'
	        //   },
	        //   xaxis: {
			// 	categories: [],
	        //   }
			// },
			// series: [{
			//   name: 'Positif',
			//   data: [],
	        // }],


            indonesianCase: {
                items: [

                ]
            },

            allCountryCases: {
                items: [

                ]
            },

            highlight : {
                timeUpdate: '',

                // GLOBAL
                positive: '',
                recovered: '',
                deaths: '',

                // INDONESIAN
                indonesian: {
                    positive: '',
                    recovered: '',
                    deaths: ''
                },

                // Time update
                last_update: ''
            },
        }
    },
    methods: {

        priceFormat(data){
            let results = new Intl.NumberFormat('en-US', {currency: 'USD'}).format(data);

            return results;
        },

        getGlobal: async function() {
            try {
                let global = await covid19Global.getGlobal();

                this.highlight.positive = this.priceFormat(global.data.confirmed.value);
                this.highlight.recovered = this.priceFormat(global.data.recovered.value);
                this.highlight.deaths = this.priceFormat(global.data.deaths.value);
                this.highlight.last_update = global.data.lastUpdate;

            } catch (error) {
                console.log(error);
            }
        },

        getIndonesianCase: async function() {
            try {
                let indonesianCase = await covid19Indonesian.getTotalCase();

                this.highlight.indonesian.positive = this.priceFormat(indonesianCase.data.jumlahKasus);
                this.highlight.indonesian.recovered = this.priceFormat(indonesianCase.data.sembuh);
                this.highlight.indonesian.deaths = this.priceFormat(indonesianCase.data.meninggal);
            } catch (error) {
                
            }
        },

        getIndonesianCasePerday: async function() {
            try {

                let indonesianCasePerday = await covid19Indonesian.getCasePositivePerday();

                indonesianCasePerday.data.data.forEach(cases => {
                    let result_date = new Date(cases.tanggal);
                    let date =  result_date.getDate();
                    let month = this.months[result_date.getMonth()];

                    let date_month = date + ' ' +month;

                    this.chartOptions.xaxis.categories.push(date_month);


                    let casePerday = cases.jumlahKasusBaruperHari ? cases.jumlahKasusBaruperHari : 0;

                    this.series[0].data.push(casePerday);



                });


            } catch (error) {
                
            }
        },

        getTotalCaseProvinsi: async function() {
            try {
                let totalCaseProvinsi = await covid19Indonesian.getTotalCaseProvinsi();

                let no = 1

                totalCaseProvinsi.data.data.forEach(cases => {
                    if (cases.provinsi != "Indonesia") {
                        this.provinsi.items.push({
                            no:  no,
                            provinsi: cases.provinsi,
                            positif: this.priceFormat(cases.kasusPosi),
                            sembuh: this.priceFormat(cases.kasusSemb),
                            meninggal: this.priceFormat(cases.kasusMeni)
    
                        });
                    }

                    no++;
                });

                this.loadingProvinsi = false;
            } catch (error) {
                
            }
        },

        getAllCaseIndonesian: async function() {
            try {
                let allCaseIndonesian = await covid19Indonesian.getAllCaseIndonesian();

                allCaseIndonesian.data.data.nodes.forEach(cases => {
                    this.indonesianCase.items.push({
                        no: cases.id,
                        umur: cases.umur,
                        gender: cases.gender,
                        status: cases.status,
                        provinsi: cases.klaster,
                        wn: cases.wn
                    });
                });


            } catch (error) {
                
            }
        },

        getAllCountryDetails: async function() {
            try {
                let allCountryDetails = await covid19Global.getAllCountryDetails();

                let no = 1;
                allCountryDetails.data.forEach(cases => {
                    this.allCountryCases.items.push({
                        no: no,
                        country: cases.countryRegion,
                        province: cases.provinceState,
                        positive: this.priceFormat(cases.confirmed),
                        recovered: this.priceFormat(cases.recovered),
                        deaths: this.priceFormat(cases.deaths),
                        last_update: cases.lastUpdate
                    });

                    no++;
                });
            } catch (error) {
                
            }
        }

    }
}
</script>