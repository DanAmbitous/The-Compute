$(document).ready(function() {
    $("#enter-button").click(function() {
        let inputValueFirst = Number($("#value-one").val());
        let inputValueSecond = Number($("#value-two").val());
        let outputValue = $(inputValueFirst - inputValueSecond);
        $("#output").html(outputValue);
    });
});