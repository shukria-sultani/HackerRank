function timeConversion(s) {
 let timeArray = s.split(":")
 
    if (timeArray[0] === "12" && timeArray[2].includes("AM")) {
        let hour = "00"
        let min = timeArray[1]
        let second = timeArray[2].split(/PM|AM/)
        let joined = `${hour}:${min}:${second[0]}`
        return joined
    }else if(timeArray[0] === "12" && timeArray[2].includes("AM")){
        return s
    }
    else if (timeArray[2].toLowerCase().includes("am")) {
        let hour = timeArray[0]
        let min = timeArray[1]
        let second = timeArray[2].split("AM")
        let joined = `${hour}:${min}:${second[0]}`
        return joined
    } else {
        if(timeArray[0] < 12){
        let hour = Number(timeArray[0]) + 12
        let min = timeArray[1]
        let second = timeArray[2].split("PM")
        let joined = `${hour}:${min}:${second[0]}`
        return joined
        }else{
        let hour = timeArray[0]
        let min = timeArray[1]
        let second = timeArray[2].split("PM")
        let joined = `${hour}:${min}:${second[0]}`
        return joined
        }
    }
}
console.log(timeConversion("4:45:54AM"))
