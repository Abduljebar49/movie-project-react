import axios from "axios";



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f85b32e95eff46938b047e58e1ec9100'
    }
})