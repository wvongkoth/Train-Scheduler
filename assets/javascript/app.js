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
    var firstTrainTime = moment($("#time").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequency").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

  })

})