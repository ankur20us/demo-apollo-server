const axios = require("axios");

module.exports = {
    Query: {
        companies: (_root, _args, _context, _info)=> {
            return axios.get(`http://localhost:3004/companies/`)
            .then(({data})=> data)
        },
        company: (_root, { id }, _context, _info)=> {
            return axios.get(`http://localhost:3004/companies/${id}`)
            .then(({data})=> data)
        },
    },
    Company:{
        users: ({ id }, _args, _context, _info) => {
            return axios.get(`http://localhost:3004/companies/${id}/users`)
            .then(({data})=> data);
        }
    }
}