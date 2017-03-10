var structure = {
   "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
   "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
   "fp_type": "ibeacon",
   "fp_owner": "global",
   "fp_ext_id": "bstg_autogen_1445345099899_62005859",
   "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
   "major": 37100,
   "minor": 51516,
   "label": "Icy Bond",
   "actions": [
       {
           "type": "home-block",
           "params": {
               "appearance": "text",
               "action": "open-location",
               "link": {
                   "fp_type": "sponsor",
                   "fp_ext_id": "spotme"
               }
           }
       },
       {
           "type": "presence",
           "params": {
               "interval": 15
           }
       }
   ],
   "fp_last_changes": {
       "timestamp": 1445437699,
       "source": "dataloader_api",
       "host": "localhost.backstage.4pax.com"
   },
   "location": {
       "lat": -4.232423,
       "lng": 12.523098
   }
};

 document.getElementById("json").value = JSON.stringify(structure);

//function for adding a new action type notification with parameters title and message
function NewNotification(title, message){
    var newAction = {"type":"notification",
                     "params":
                     {
                       "title":title,
                       "message":message
                     }
                    };
    structure.actions.push(newAction);    
    console.log(structure);
    document.getElementById("json").value = structure;
}

//function for setting action of the first property to null and remove link property
function SetNull(){    
    structure.actions[0].params.action=null;
    delete structure.actions[0].params.link;
    console.log(structure);
     document.getElementById("json").value = structure;
}

//function with UnderScore extract actions
function ExtractUnderscore(){
    
    var actionsExtracted = _.pick(structure,'actions');
    
    var result = _.map(actionsExtracted.actions, function(value, key){
  return { key : value.type, value : value.params };
        });
    console.log(result);
}


//function for the sum with underscoe
function SumUnderscore(){
    
    var input=["0", 2, 4, 6, null, [], 8, 10];
   var sum = _.reduce(input, function(memo, num){ 
       
       if(Number.isInteger(num)){
            return memo + num; 
       }    
        else{
            return memo;
        }
   
   }, 0);
    
    var avg= sum/input.length; 
    
    console.log("Sum is: "+sum+" and Average is: "+avg);
}

//In the above task, what would happen if there were two actions of a same type?
//Then it will be an object with 2 keys repeated, which is incorrect because key should be unique



//function api
function GetIp(){
    $.ajax({
    url: "https://api.ipify.org?format=json",
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,    
    success: function (data) {
        console.log(data);     
    },
    error: function(){
      alert("Cannot get data");
    }
});
    
    
}

