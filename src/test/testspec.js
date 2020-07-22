// require ('jsdom-global')();
var expect = require('chai').expect;
var mount = require('@vue/test-utils');
var loginUsersList= require('../assets/users.json')

// import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
// import Login from '../components/Login.vue';  

describe('Begin test()', function () {
    it('should render correctly', () => { })    
    it('to check if the exact object exists in the array or not', function () {
        var obj={
            "userName": "admn",
            "password": "admin"
        }
        expect(loginUsersList.indexOf(obj)).to.equal(-1);
    });
    it('should print two equals 1', function () {
        expect(loginUsersList.length).to.equal(3);
    });
    it('The number of users should be greater than 1', function () {
        expect(loginUsersList).to.have.length.of.at.least(2);
    });
    it('The number of users should be greater than 1', function () {
        expect(loginUsersList[0]).to.have.property('password');
        // expect(loginUsersList).to.have.length.of.at.least(2);
    });

    // expect(user).to.have.property('name');



});


