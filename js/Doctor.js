var isDoctor=false;
var msg='';
var emailid='';

var Coursetro;
console.log("hi");
var CoursetroContract;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
// set the provider you want from Web3.providers
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.eth.defaultAccount = web3.eth.accounts[0];

var DoctorContract = web3.eth.contract([{"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"}, {"name": "_license", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "setDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"} ], "name": "setForAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_license", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "updateDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "email", "type": "string"} ], "name": "doctorCreated", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "_address", "type": "address"}, {"indexed": false, "name": "_email", "type": "string"}, {"indexed": false, "name": "_password", "type": "string"} ], "name": "authDoctor", "type": "event"}, {"constant": true, "inputs": [{"name": "_address", "type": "address"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"} ], "name": "authenticateDoctor", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "countDoctors", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"} ], "name": "doctorAccts", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getAddress", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getDoctor", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getDoctors", "outputs": [{"name": "", "type": "address[]"} ], "payable": false, "stateMutability": "view", "type": "function"} ]);
var Doctor = DoctorContract.at('0x930c1b3513b76d15070303fb48df0453627e2136');

console.log(web3.eth.defaultAccount);

var doctorCreateEvent = Doctor.doctorCreated();
console.log(doctorCreateEvent);
doctorCreateEvent.watch(function(error, result){
  if (!error)
  {
    $("#loader").hide();
    console.log(window.location.pathname);
    if(window.location.pathname == '/profile.html'){
      window.location.assign("profile.html");
    }

                    //$("#instructor").html(result.args.name + ' (' + result.args.age + ' years old)');
                    console.log("Inside the event");
                  } else {
                    $("#loader").hide();
                    console.log(error);
                    console.log("Inside the error event");
                  }
                });



$("#loginbtn").click(function(){
  console.log("in btn click"+ web3.eth.defaultAccount);
  Doctor.authenticateDoctor(web3.eth.defaultAccount,$("#emailid").val(), $("#pswd").val(), (err, res) => {
    if (err){
      console.log("error occured");
    }else{
      console.log("in res"+res);
      if(res==true){
        emailid = $("#emailid").val();
        window.location.assign("profile.html");
      }
    }

  });
});


function initDoctorConnection() {

  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];
  CoursetroContract = web3.eth.contract([{"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"}, {"name": "_license", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "setDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"} ], "name": "setForAuthentication", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_license", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "updateDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "email", "type": "string"} ], "name": "doctorCreated", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "_address", "type": "address"}, {"indexed": false, "name": "_email", "type": "string"}, {"indexed": false, "name": "_password", "type": "string"} ], "name": "authDoctor", "type": "event"}, {"constant": true, "inputs": [{"name": "_address", "type": "address"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"} ], "name": "authenticateDoctor", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "countDoctors", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"} ], "name": "doctorAccts", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getAddress", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getDoctor", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getDoctors", "outputs": [{"name": "", "type": "address[]"} ], "payable": false, "stateMutability": "view", "type": "function"} ]); 
  Coursetro = CoursetroContract.at('0x930c1b3513b76d15070303fb48df0453627e2136');
  return JSON.parse('{"API":{"name":"doctor", "version":"v1"}}');
}



function createDoctor(fname, lname, email, password, license, street, unit, city, state, zipcode) {
  console.log("In create Doctor "+ web3.eth.defaultAccount);
  console.log(fname + lname + email + password+ license+ street+ unit+ city+ state + zipcode);
  $("#loader").show();
  Doctor.setDoctor(web3.eth.defaultAccount, fname, lname, email, password, license, street, unit, city, state, zipcode, function(err, res) {
    if (err) {
      console.log("Error while creating Account!! " + err);
    }if (res) {
      console.log("Account created Sucessfully!! " + res);
       window.location.assign("login.html");
    }
  });
}



function getDoctor() {
  console.log("Inside getDoctor");
  Doctor.getDoctor(web3.eth.defaultAccount, function(err, res) {
    if (res) {
      console.log(res);
      $("#fName").val(res[0]);
      $("#lName").val(res[1]);
      $("#full-name").html(res[0]+" "+res[1]);
      $("#email").val(res[2]);
      $("#doctorlic").val(res[3]);

//      return JSON.parse('{"data":{"fname":"'+res[0]+'", "lname":"'+res[1]+'", "email":"'+res[2]+'", "zipcode":"'+res[3]+'"}}');
}
if (err) {
  document.write('{"error":"'+err+'"}');
}
});
}
function getAddress(){
  console.log("Inside getAddress");
  Doctor.getAddress(web3.eth.defaultAccount, function(err, res) {
    if (res) {
      console.log(res);
      $("#streetName").val(res[0]);
      $("#unit").val(res[1]);
      $("#city").val(res[2]);
      $("#state").val(res[3]);
      $("#zipCode").val(res[4]);
      return res;
//      return JSON.parse('{"data":{"fname":"'+res[0]+'", "lname":"'+res[1]+'", "email":"'+res[2]+'", "zipcode":"'+res[3]+'"}}');
}
if (err) {
  document.write('{"error":"'+err+'"}');
}
});
}

function getDoctorCount() {
  Coursetro.countDoctors(function(err, res) {
    if (res)
      return JSON.parse('{"data":{"count":'+res.c+'}}');
    if(err)
      return JSON.parse('{"error":"'+err+'"');
  });
}


function updateDoctor(fname, lname, email, license, street, unit, city, state, zipcode){
  console.log("Inside Update Doctor function");
  $("#loader").show();
  Doctor.updateDoctor(web3.eth.defaultAccount, fname, lname, email, license, street, unit, city, state, zipcode, (error, result) => {
    if (!error) {
      console.log("Account Updated Sucessfully!! " + result);

    }else{
      console.log("Error while Updating Account!! " + error);

    }
  });

}

