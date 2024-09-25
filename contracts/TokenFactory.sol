// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "./MemeToken.sol";

contract TokenFactory {
    address[] public createdTokens;
    event TokenCreated(address tokenAddress);

    function createToken(
        string calldata _name,
        string calldata _ticker
    ) public returns (address) {
        MemeToken token = new MemeToken(msg.sender, _name, _ticker);
        createdTokens.push(address(token));
        emit TokenCreated(address(token));
        return address(token);
    }

    function numTokens() public view returns (uint256) {
        return createdTokens.length;
    }

    function getTokens() public view returns (address[] memory) {
        return createdTokens;
    }
}
