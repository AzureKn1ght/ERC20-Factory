// SPDX-License-Identifier: UNLICENSED
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MemeToken is ERC20, ERC20Permit, Ownable {
    constructor(
        address rcv,
        string memory _tokenName,
        string memory _tokenSymbol
    )
        ERC20(_tokenName, _tokenSymbol)
        ERC20Permit(_tokenName)
        Ownable(msg.sender)
    {
        _mint(rcv, 800000000000000 * 10 ** decimals());
        renounceOwnership();
    }
}
