const textLegends = {"temperature":["temperature"," °C"],"humidity":["relative humidity","%"]}

//format: "parameter": [<text label>, <units>]

export default {
  populateHeader(warningCode,warningParam,warningValue){
    // console.info("populateHeader was run with",warningCode," and ",warningValue);
    var headerText = ""; 
    if(warningCode==="threshold_high"){
        headerText = "Increased ";            
      } else if (warningCode==="threshold_low"){
        headerText = "Decreased ";
      } else {
        headerText = "Caution: ";
      }
    headerText += `${textLegends[warningParam][0]} (${warningValue}${textLegends[warningParam][1]})`;
    return headerText;
  },
  populateBody(warningCode,warningParam,warningValue){
    var bodyText = "";
    if(warningParam==="temperature"){
      bodyText = "Try opening the windows or turning on the AC for a more comfortable room temperature!";
    } else if (warningParam==="humidity") { //TODO: add for gas sensor, accelerometer, etc.
      bodyText = "The air feels heavy! Get some fresh air outside or try turning on the AC...";
    } else { //TODO: add for gas sensor, accelerometer, etc.
      bodyText = "Check this carefully! Ensure that the environment is safe...";
    }
    return bodyText;
  }
}