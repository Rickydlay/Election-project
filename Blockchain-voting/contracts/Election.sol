// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint public candidatesCount;

    event Voted(address indexed voter, uint candidateId);

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates[i] = Candidate(i, candidateNames[i], 0);
            candidatesCount++;
        }
    }

    function vote(uint candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(candidateId < candidatesCount, "Invalid candidate ID.");

        candidates[candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, candidateId);
    }

    function getResults(uint candidateId) public view returns (uint) {
        return candidates[candidateId].voteCount;
    }
}
