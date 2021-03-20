//Импортируем библиотеки которые будем использовать в тестах
const axios = require('axios');
const {expect} = require('chai');
//Импортируем данные из других файлов в нашем проекте
const {urlGET,urlPOST} = require("../data/data")
const {create_user} =require("../data/send_data")

describe('my suite', function ()  {

    it('List users', function () {
        return axios.get(urlGET)
            .then(function (res) {
            expect(res.status).to.equal(200);
        })
    })

    it('Register', function () {
        return axios.post(urlPOST,
            create_user
            ).then(function (res) {
            expect(res.status).to.equal(201);
        })
    })
});