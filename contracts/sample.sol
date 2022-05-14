pragma solidity ^0.4.17;

contract Sample {
    int public data;

    function Sample(int ss) public {
        data = ss;
    }

    function getData() public view returns(int){
        return data;
    }

    function setData(int latestData) public{
        data = latestData;
    }
}