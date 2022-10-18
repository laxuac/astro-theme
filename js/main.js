const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
const { createApp } = Vue
const vueApp=createApp({
    data() {
      return {
        page: 'home',
        data: {},
        signs: [ 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces' ],
        loading: false,
        currentSign: 'aries',
        currentHoroscope: {},
        horoscopes: [],
        // panchang
        panchang: [],
        // birth info
        birth_infos:{}
      }
    }, 
    watch: {
      // page
      page: function (newPage, oldPage) {
        if (newPage === 'panchang') {
          console.log('panchang');
          this.getTodaysPanchang();
        }
      }
    },    
    mounted() {
        // this.signs.forEach(async (sign) => {
        //     const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,{method: 'POST'});
        //     const data = await response.json();
        //     data.sign = sign;
        //     this.horoscopes.push(data);
        // });
    },
    methods: {
        async getHoroscope(sign) {
            this.loading = true;
            this.page = 'view-horoscope';
            this.currentSign = sign;
            if(this.checkHoroscopeExists(sign)) {
              this.currentHoroscope = this.getExistingHoroscope(sign);
            }else{
              const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,{method: 'POST'});
              const data = await response.json();
              data.sign = sign;
              this.horoscopes.push(data);
              this.currentHoroscope = data;
            }
            this.loading = false;
        },
        checkHoroscopeExists(sign) {
            return this.horoscopes.some(horoscope => horoscope.sign === sign);
        },
        getExistingHoroscope(sign) {
            return this.horoscopes.find(horoscope => horoscope.sign === sign);
        },
        link(page){
            this.page = page;
        },
        async getTodaysPanchang() {
          this.loading=true;
          if (this.panchang.length === 0) {
            // todays date
            const date = new Date();
            const date_str=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            const ne_date=ad2bs(date_str).en;
            const panchang = await getPanchag(ne_date.year,ne_date.month,ne_date.day);
            this.panchang = panchang;
          }
          this.loading=false;
        },
        active_class(page){
          return this.page === page ? 'nav-link active' : 'nav-link';
        }
    },
  }).mount('#app')
