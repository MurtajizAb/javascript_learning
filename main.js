//const { json } = require("stream/consumers");//

const firebaseConfig = {
    apiKey: "AIzaSyAc4fmktpRUeA5yww-Vr3IobSiR3jiWPxk",
    authDomain: "fir-x-javascript.firebaseapp.com",
    databaseURL: "https://fir-x-javascript-default-rtdb.firebaseio.com",
    projectId: "fir-x-javascript",
    storageBucket: "fir-x-javascript.appspot.com",
    messagingSenderId: "651218887551",
    appId: "1:651218887551:web:221916ebd4f6eeaf89704a"
  };

  firebase.initializeApp(firebaseConfig);

  // var ref = firebase.database().ref("users");



    // var messegesRef = firebase.database().ref('users');
    // messegesRef.push().set({
    //     name: "a",
    //     phone: "b",
    //     email: "g",
       
    // });

    var data={};
    var starCountRef = firebase.database().ref('users');
    starCountRef.once('value', (snapshot) => {
    data = snapshot.val();
    var keys_list=Object.keys(data);
    var data_list=[];
  for (let item of keys_list){
    console.log(item);
    data_list.push(data[item]);
  }
  console.log(data_list);
  sort_data(data_list);
    });


    function sort_data(data_list,email){

      return data_list;
    }


  
      // var li_temp= Object.keys(data);
//  console.log(data);
//  var arry =[];
//    for(let x in data)
//    {
//    arry.push(data[x]);
//    }})
//    console.log(arry);
  
    
    // li_temp.sort(function(key,nl){
    // if(key=='email'){
    //   nl= data[li_temp[key]];
    //   return nl;
    // }})
  

//  for(var i =0; i<=li_temp.length;i++)
//  {    console.log(data[li_temp[i]].name);
//   console.log(data[li_temp[i]].phone);
//   console.log(data[li_temp[i]].email);
  
 
//  }    });
  
  

  // console.log(return_data());

  // messegesRef.orderByKey().addChildEventListener(new ChildEventListener() {
  //     public void onChildAdded(DataSnapshot dataSnapshot, String prevChildKey) {
  //       System.out.println(dataSnapshot.getKey());
  //     }
    
  //     // ...
  //   });
    // const a = {"name": "a", "phone":"b", "email":"c"};
   
    // console.log();


// ref.push({
//     username: "a",
//     email: "b",
//     profile_picture : "c"
//   });

    
    
// var cname, mod, yr;

// function getdata(){
//     cname = document.getElementById("namebox").value;
//     mod = document.getElementById("modelbox").value;
//     ye = document.getElementById("yearbox").value;
// }
    
    
    // document.getElementById("Add").onclick= function(){
          
    //     getdata();
