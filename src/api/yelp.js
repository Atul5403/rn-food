import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer bktIVIFmy3hus6j5dDrC_M4zRMa1Gm1S41yvsCGijV5fzbi5toar0lt_UxPNgwPMBDYHfAJVkRQnLjrl1t_bRjRNyo0px5uwDGPJDYTV1F8e5bgUSJvxyb-34MNyX3Yx'
    }
})