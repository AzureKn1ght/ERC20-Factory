// SPDX-License-Identifier: UNLICENSED
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MemeToken.sol";

contract TokenFactory is Ownable {
    address[] public createdTokens;
    event TokenCreated(address tokenAddress);

    constructor() Ownable(msg.sender) {}

    function createToken(
        string calldata _name,
        string calldata _ticker
    ) public onlyOwner returns (address) {
        MemeToken token = new MemeToken(msg.sender, _name, _ticker);
        createdTokens.push(address(token));
        emit TokenCreated(address(token));
        return address(token);
    }

    function getTokens() public view returns (address[] memory) {
        return createdTokens;
    }

    function numTokens() public view returns (uint256) {
        return createdTokens.length;
    }
}
