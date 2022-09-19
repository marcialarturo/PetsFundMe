// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CommunityPets is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter public _totalNFTs;
  uint public _totalFundraisers = 0;

  mapping(uint => Fundraiser) public fundraiserList;

  struct Fundraiser {
    uint id;
    string cid;
    uint targetAmmount;
    uint totalDonations;
    address organizer;
  }

  event FundraiserCreated (
    uint id,
    string cid,
    uint targetAmmount,
    address organizer
  );

  constructor() ERC721("Community Pets", "CP") {}
  // calldata is read only, use for funct inputs as params
  function createFoundraiser(string calldata _cid, uint _targetAmmount) public {

    fundraiserList[_totalFundraisers] = Fundraiser(_totalFundraisers, _cid, _targetAmmount, 0, msg.sender);
    emit FundraiserCreated(_totalFundraisers, _cid, _targetAmmount, msg.sender);
    _totalFundraisers++;
  }

  function donate(uint _donationId, uint _donationAmmount) public {
    Fundraiser storage _postFoundraise = fundraiserList[_donationId];
    _postFoundraise.totalDonations += _donationAmmount;
  }

  function getAllFundraisers() public view returns (Fundraiser[] memory) {
      Fundraiser[] memory fundraiserArray = new Fundraiser[](_totalFundraisers);

      for (uint i = 0; i < _totalFundraisers; i++) {
          Fundraiser storage currentItem = fundraiserList[i];
          fundraiserArray[i] = currentItem;
      }
      return fundraiserArray;
  }

}

