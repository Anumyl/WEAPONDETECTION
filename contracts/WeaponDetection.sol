pragma solidity ^0.5.16;
import "./Set.sol";
import "./WeaponData.sol";


contract WeaponDetection {
    Set.Data researcherSet;
    WeaponData[] private weaponData;
    WeaponData[] private nullData;

    mapping(address => bool) rSet;
    mapping(address => WeaponData[]) weaponSpecificData;

    constructor() public {}

    //Add a data from one instance to the weaponData Array
    function addData(
        string memory _hash, 
        string memory _date,
        string memory _time
    ) public {
        WeaponData newWeapon = new WeaponData(msg.sender, _hash, _date,_time);
        weaponData.push(newWeapon);
        weaponSpecificData[msg.sender].push(newWeapon);
    }

    function registerResearcher() external returns(bool){
        rSet[msg.sender] = true;
        return rSet[msg.sender];
    }
    
    function returnAllData() external view returns(WeaponData[] memory){
        if(rSet[msg.sender])
            return weaponData;
        else
            return weaponData;
    }

    function getWeaponData() external view returns(WeaponData[] memory){
        return weaponSpecificData[msg.sender];
    }

    function display() external returns(string memory){
        return "Hello Solidity";
    }
}