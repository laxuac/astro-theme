// constants
const headers={
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,ne;q=0.6',
    'content-type': 'application/json',
    'origin': 'https://astrotalk.com',
    'referer': 'https://astrotalk.com/',
    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
}
const body={
    "name":"fasdf",
    "gender":"Male",
    "hour":15,
    "min":22,
    "sec":10,
    "day":1,
    "month":1,
    "year":2022,
    "tzone":5.75,
    "lon":85.3205817,
    "lat":27.708317,
    "place":"Kathmandu,Nepal",
    "userId":"",
    "accuracy":3,
    "weekday":2,
    "seq":[]
}
// places and geo lat long

const  places={
    "Bhojpur":{  "lat":27.1908,"lon":87.1024},
    "Dhankuta":{  "lat":27.0074,"lon":87.3414},
    "Ilam":{  "lat":26.9225,"lon":87.8942},
    "Jhapa":{  "lat":26.5455,"lon":87.8942},
    "Khotang":{  "lat":27.1838,"lon":86.7819},
    "Morang":{  "lat":26.6799,"lon":87.4604},
    "Okhaldhunga":{  "lat":27.3619,"lon":86.3782},
    "Panchthar":{  "lat":27.1096,"lon":87.8157},
    "Sankhuwasabha":{  "lat":27.6174,"lon":87.3016},
    "Solukhumbu":{  "lat":27.6992,"lon":86.7416},
    "Sunsari":{  "lat":26.6276,"lon":87.1822},
    "Taplejung":{  "lat":27.3540,"lon":87.6680},
    "Tehrathum":{  "lat":27.1998,"lon":87.5791},
    "Udayapur":{  "lat":26.8518,"lon":86.6611},
    "Parsa":{  "lat":27.2190,"lon":84.8151},
    "Bara":{  "lat":27.1341,"lon":85.0649},
    "Rautahat":{  "lat":26.9547,"lon":85.3136},
    "Sarlahi":{  "lat":26.9627,"lon":85.5612},
    "Dhanusha":{  "lat":26.8350,"lon":86.0122},
    "Siraha":{  "lat":26.7036,"lon":86.3782},
    "Mahottari":{  "lat":26.8762,"lon":85.8077},
    "Saptari":{  "lat":26.6191,"lon":86.7819},
    "Sindhuli":{  "lat":27.2569,"lon":85.9713},
    "Ramechhap":{  "lat":27.4469,"lon":86.0530},
    "Dolakha":{  "lat":27.7784,"lon":86.1752},
    "Bhaktapur":{  "lat":27.6866,"lon":85.4582},
    "Dhading":{  "lat":27.9711,"lon":84.8985},
    "Kathmandu":{  "lat":27.7293,"lon":85.3343},
    "Kavrepalanchok":{  "lat":27.5285,"lon":85.6435},
    "Lalitpur":{  "lat":27.5178,"lon":85.3136},
    "Nuwakot":{  "lat":27.8895,"lon":85.2308},
    "Rasuwa":{  "lat":28.1755,"lon":85.3963},
    "Sindhupalchok":{  "lat":27.9512,"lon":85.6846},
    "Chitwan":{  "lat":27.5291,"lon":84.3542},
    "Makwanpur":{  "lat":27.5546,"lon":85.0233},
    "Baglung":{  "lat":28.3641,"lon":83.2078},
    "Gorkha":{  "lat":28.2964,"lon":84.8568},
    "Kaski":{  "lat":28.2622,"lon":84.0167},
    "Lamjung":{  "lat":28.2765,"lon":84.3542},
    "Manang":{  "lat":28.6419,"lon":84.1857},
    "Mustang":{  "lat":28.9985,"lon":83.8473},
    "Myagdi":{  "lat":28.6029,"lon":83.3362},
    "Nawalpur":{  "lat":27.6572,"lon":84.0590},
    "Parbat":{  "lat":28.2246,"lon":83.6987},
    "Syangja":{  "lat":28.0197,"lon":83.8049},
    "Tanahun":{  "lat":27.9447,"lon":84.2279},
    "Kapilvastu":{  "lat":27.6009,"lon":82.8641},
    "Parasi":{  "lat":28.3949,"lon":84.1240},
    "Rupandehi":{  "lat":27.5330,"lon":83.3789},
    "Arghakhanchi":{  "lat":27.8940,"lon":83.1220},
    "Gulmi":{  "lat":28.0889,"lon":83.2934},
    "Palpa":{  "lat":27.8253,"lon":83.6348},
    "Dang Deukhuri":{  "lat":28.0000,"lon":82.4753},
    "Pyuthan":{  "lat":28.1032,"lon":82.8548},
    "Rolpa":{  "lat":28.3816,"lon":82.6483},
    "Eastern Rukum":{  "lat":28.6947,"lon":82.4319},
    "Banke":{  "lat":28.1022,"lon":81.8224},
    "Bardiya":{  "lat":28.3102,"lon":81.4279},
    "Western Rukum":{  "lat":28.6947,"lon":82.4319},
    "Salyan":{  "lat":28.4014,"lon":82.1714},
    "Dolpa":{  "lat":29.0539,"lon":83.0791},
    "Humla":{  "lat":30.0052,"lon":81.9535},
    "Jumla":{  "lat":29.2889,"lon":82.3018},
    "Kalikot":{  "lat":29.2089,"lon":81.7349},
    "Mugu":{  "lat":29.6144,"lon":82.3452},
    "Surkhet":{  "lat":28.5175,"lon":81.7787},
    "Dailekh":{  "lat":28.9262,"lon":81.6473},
    "Jajarkot":{  "lat":28.8651,"lon":82.1714},
    "Kailali":{  "lat":28.8314,"lon":80.8987},
    "Achham":{  "lat":29.0396,"lon":81.2519},
    "Doti":{  "lat":29.2006,"lon":80.8987},
    "Bajhang":{  "lat":29.7767,"lon":81.2519},
    "Bajura":{  "lat":29.4201,"lon":81.4279},
    "Kanchanpur":{  "lat":28.8372,"lon":80.3213},
    "Dadeldhura":{  "lat":29.2188,"lon":80.4994},
    "Baitadi":{  "lat":29.5013,"lon":80.5883},
    "Darchula":{  "lat":29.9363,"lon":80.8987}     
};
const searchPlace = (place_name) => {
    let places = Object.keys(places_data).filter((place) => {
        return place.toLowerCase().includes(place_name.toLowerCase());
    });
    return places;
}

const getPanchag= async (year,month,day)=>{
    const url=`https://raw.githubusercontent.com/prolaxu/nepali-panchang-json-db/main/${year}/${month}/${day}.json`;
    const response=await fetch(url);
    const data=await response.json();
    return data;
}
const get=async (path,body)=>{
    const response=await fetch(`https://api.kundali.astrotalk.com/v1/${path}`,{headers,body,method: 'POST'});
    const data=await response.json();
    return data;
}
const getDasha=async ()=>{
    const data=await get('dasha_complete',JSON.stringify(body));
    return data;
}
const getKundali=async ()=>{
    const data=await get('combined/divisional',JSON.stringify({
        detail:body,
        languageId:1
    }));
    return data;
}
