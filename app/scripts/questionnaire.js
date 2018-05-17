// this is the logic of the actual questionnaire
function findingFriends() {
    // on-click function
    $('#submit').on('click', function() {
        var friendObject = {
            name: $("#name").val(),
            photo: $("#picture").val(),
            scores: []
        };

        for (q = 1; q < 11; q++) { //questions for-loop 11= eleven questions

            for (a = 1; a < 6; a++) { //answers for-loop 6= compatibility scale
                //conditional to push in selected
                if ($("#optionRadio" + q + "-" + a).is(":checked")) {
                    friendObject.scores.push($("#optionRadio" + q + "-" + a).val());
                } //end of conditional
            } //end for-loop [a]
        } // end for-loop [q]

        var currentURL = window.location.origin; //root

        //jquery ajax call
        //url
        //get method
        //.done function(friendsList)

        //result array []

        //nested for-loops again below!
        //nested for loops for comparing compatability scores 
        //use subtraction/difference
        //push the difference into the results array
        //look up the Math.abs

        //var minimum

        //for-loop to determine the conditions for matching matches

        //for-loop for comparing and ranking the different matches
        //iterate through the results array
        //check if the two are equal or not

        //append the friend name and photo

        //end of get request
    }); //end of on-click function
} // end of findingFriends wrapper function

findingFriends();