import axios from 'axios';

// export default axios.create({
//     baseURL : 'https://api.kawalcorona.com'
// })
const baseURL = 'http://localhost:3000';

// Live Data
const getInfoGlobalPositif = async () => {
    // let info = await axios.get('https://api.kawalcorona.com/positif/')
    let info = await axios.get(`${baseURL}/positif/`)
        return info
    };

const getInfoGlobalDeath = async () => {
    let info = await axios.get(`${baseURL}/meninggal/`)
       return info
    }

const getInfoGlobalHealth = async () => {
    let info = await axios.get(`${baseURL}/sembuh/`)
    return info
    };

const getInfoIndonesia = async () => {
    let info = await axios.get(`${baseURL}/indonesia/`)
    return info
};

// Live Global

const getInfoGlobal= async () => {
    let info = await axios.get(baseURL)
    return info
};

// live Provinsi Indonesia

const getInfoProvinsi = async () => {
    let info = await axios.get(`${baseURL}/indonesia/provinsi/`)
    return info
};



export { getInfoGlobalDeath, getInfoGlobalHealth, getInfoGlobalPositif, getInfoIndonesia , getInfoGlobal , getInfoProvinsi };
    
