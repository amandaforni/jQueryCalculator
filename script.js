function insert(num) {
    //The val() method returns or sets the value attribute of the selected elements.
    $('.calc-display').val($('.calc-display').val() + num)
}

function eql() {
    //The eval() function evaluates or executes an argument
    $('.calc-display').val(eval($('.calc-display').val()))
}

function c() {
    //clears calc-display
    $('.calc-display').val('')
}

function del() {
    //The substring() method returns the part of the string between the start and end indexes,
    value = $('.calc-display').val()
    $('.calc-display').val(value.substring(0, value.length - 1))
} 