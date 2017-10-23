  $(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrJZ16pNk3FzyBNpfOPQ_IIIn41vPQ3wQ",
    authDomain: "train-cc95e.firebaseapp.com",
    databaseURL: "https://train-cc95e.firebaseio.com",
    projectId: "train-cc95e",
    storageBucket: "train-cc95e.appspot.com",
    messagingSenderId: "1004702355659"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addTrainBtn").on("click", function(event){
    event.preventDefault();

    var trainName = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = moment($("#time").val().trim(), "HH:mm").format("");
    var frequency = $("#frequency").val().trim();

    var newTrain = {
      name: trainName,
      destination: destination,
      firstTrainTime: firstTrainTime,
      frequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequency);

    $("#name").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");
  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    $("#currentTrainSchedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + 
                                              firstTrainTime + "</td><td>" + frequency + "</td></tr>");
  });

});