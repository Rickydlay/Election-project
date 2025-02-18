const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Election Contract", function () {
    let Election, election, owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        
        Election = await ethers.getContractFactory("Election");
        election = await Election.deploy();
        await election.waitForDeployment();
    });

    it("Should deploy successfully", async function () {
        expect(election.target).to.not.equal(ethers.ZeroAddress);
    });
});
