/**
 * Created by rhoeh on 2/28/2016.
 */



function updateForm(e) {
    var item = e.target;
    var matrixId = $(item).attr('id');
    var matrix = matrixId.split('-'),
        value = $(item).val();

    applyUpdates(matrix, value);
}

function applyUpdates(matrix, value) {
    student_daily_entry.classes[matrix[0]].goals[matrix[1]].value = value;
    processTotals();
}

function processTotals() {
    var grandTotal = 0;
    $('.total-points').each(function(key, val){
        var newTotal = 0;
        $(student_daily_entry.classes[key].goals).each(function(key, rating){
            newTotal += parseInt(rating.value);
            grandTotal += parseInt(rating.value);
        });
        $(val).text(newTotal);
    });
    $('#grand-total').text(grandTotal);
}