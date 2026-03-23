// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {

    struct Cert {
        string name;
        string course;
        string date;
    }

    mapping(string => Cert) public certificates;

    function addCertificate(
        string memory _id,
        string memory _name,
        string memory _course,
        string memory _date
    ) public {

        certificates[_id] = Cert(_name,_course,_date);
    }

    function getCertificate(string memory _id)
    public
    view
    returns(string memory,string memory,string memory){

        Cert memory c = certificates[_id];
        return(c.name,c.course,c.date);
    }
}