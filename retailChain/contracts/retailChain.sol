// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
contract retail{
struct Item{
    string name;
    uint item_no;
    uint price;
    uint quantity;
    address wallet;
}
struct User{
    string name;
    uint item_no;
    uint price;
    uint quantity;
}

    uint public items;
    address owner = msg.sender;
    mapping(uint=>Item) public item;
    mapping(address=>User[]) public  user;
    
    function record_item(string memory _name, uint itemnum, uint _price, uint _quant, address _add) public {
      item[items] = Item({
            name: _name,
            item_no: itemnum,
            price: _price,
            quantity: _quant,
            wallet: _add
        });
        User memory newuser = User(_name, itemnum, _price, _quant);
       user[_add].push(newuser);
        items++;
    }
    function check(uint256 orderno,string memory _name, uint itemnum, uint _price, uint _quant,address _add) external view returns(string memory){
        require(owner==msg.sender, "items maybe corrupted because sender is not same!");
        require(item[orderno].wallet==_add,"The address of reciever is lost!");
        require(keccak256(abi.encodePacked((item[orderno].name))) == keccak256(abi.encodePacked((_name))),"The name does not match!");
        require(item[orderno].item_no == itemnum,"Item number does not match!");
        require(item[orderno].price == _price,"The price of the item does not match");
        require(item[orderno].quantity == _quant,"The quantity of the item does not match!");
        return "The item is correct and ready to go!";
    }
    
    function get_orders(address _add) external view returns(User[] memory){
       return user[_add];
    } 
}
