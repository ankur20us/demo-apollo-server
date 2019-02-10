const axios = require("axios");

module.exports = {
    Query: {
        users: (_root, _args, _context, _info)=> {
            return axios.get(`http://localhost:3004/users/`)
            .then(({status, data})=> data);
        }, 
        user: (_root, { id }, _context, _info)=> {
            return axios.get(`http://localhost:3004/users/${id}`)
            .then(({data})=> data)
            .catch((e) => new Error("No user found"));
        }
    },
    User: {
        company: ({ companyId }, _args, _context, _info) => {
            return axios.get(`http://localhost:3004/companies/${companyId}`)
            .then(({data})=> data);
        }
    },
}