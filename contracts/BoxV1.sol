// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract BoxV1 {
  uint public val;
  constructor(uint _val) {
    val = _val;
  }

  function initializer(uint _val)  external  {
    val = _val;
  }
}