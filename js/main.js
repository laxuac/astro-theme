const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
const { createApp } = Vue
createApp({
    data() {
      return {
        data: {},
        signs: [ 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces' ],
        horoscopes: [],
      }
    },     
    mounted() {
        this.signs.forEach(async (sign) => {
            const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`,{method: 'POST'});
            const data = await response.json();
            data.sign = sign;
            this.horoscopes.push(data);
        });
    },
  }).mount('#app')
