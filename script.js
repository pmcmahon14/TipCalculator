document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cost').addEventListener("keypress", enterKey);
    document.getElementById('cost').click(calculateTip);
});

const cost = document.getElementById('cost').value;
const x = document.getElementById('serviceType').selectedIndex;
const service = document.getElementsByTagName('option')[x].value;
const partyNumber = document.getElementById('party').value;

const

const figureTip = () => {

};
