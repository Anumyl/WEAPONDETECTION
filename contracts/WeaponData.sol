pragma solidity ^0.5.16;

contract WeaponData{
    address public weapon;
    string public hash;
    string public date;
    string public time;

    constructor(
        address _weapon, 
        string memory _hash,
        string memory  _date,
        string memory _time
    )public{
        weapon = _weapon;
        hash = _hash;
        date = _date;
        time=_time;
    }
    
    function getDetailsWeapon() public returns(
        string memory Hash, string memory Date, string memory Time
    ){
        Hash = hash;
        Date = date;
        Time = time;
    }

    function getDetailsResearcher() public returns(
        string memory Hash, string memory Date, string memory Time
    ){
        Hash = hash;
        Date = date;
        Time = time;
    }
}