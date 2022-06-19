const { inputToConfig } = require('@ethereum-waffle/compiler');
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('SampleContract', () => {
    let [owner] = [];
    let Contract;
    let sampleContract;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();
        Contract = await ethers.getContractFactory("SampleContract");
        sampleContract= await Contract.deploy(ethers.utils.parseEther("1"));
    });

    it('Should be deployed correctly', async function () {
        const name = await sampleContract.getName();
        expect(name).to.equal('SampleContract');
    });

    it('Should start with initial count', async function () {
        const count = await sampleContract.getCount();
        expect(count).to.equal(ethers.utils.parseEther("1"));
    });

    it('Should increment the count', async function () {
        await sampleContract.incrementCount();
        const incrementedCount = await sampleContract.getCount();
        expect(incrementedCount).to.equal(ethers.utils.parseEther("1").add(1));
    });
});