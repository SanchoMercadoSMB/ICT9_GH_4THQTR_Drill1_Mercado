function classify(){
    let kwh = document.getElementById("kwh").value;
    let result = "";

    switch (true){
        case (kwh >= 0 && kwh <= 100):
            result = "Lifeline Consumer - Discounted electricity rates";
            break;

        case (kwh >= 101 && kwh <= 200):
            result = "Low Consumption - Normal residential rate";
            break;

        case (kwh >= 201 && kwh <= 300):
            result = "Average Consumption - Typical electricity usage";
            break;

        case (kwh >= 301 && kwh <= 500):
            result = "High Consumption - Higher electricity usage";
            break;

        case (kwh > 500):
            result = "Very High Consumption - Heavy electricity users";
            break;

        default:
            result = "Error please add a valid number";
    }

    document.getElementById("error").innerHTML = result;

    alert(result);
}