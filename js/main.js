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
        }
        
    },
  }).mount('#app')
