'use strict';
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');

    it('this validates the use of Utils function', () => {
        sendPaymentRequestToApi(100, 20);
        chai.expect(spyUtils.calledOnce).to.be.true;
        chai.expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
        spyUtils.restore()
    });
});