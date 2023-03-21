const useCreateDate = () => {
  const dateObj = new Date();
  let month = dateObj.getMonth();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
 
  const getFullMinutes = () => {
    const minutes = dateObj.getMinutes();
    if (minutes < 10) {
        return `0${minutes}`;
    }
    return minutes;
    };

  const date = ()=>{
    if(dateObj.getHours()>12){
      return `${dateObj.getDate()} ${month} ${dateObj.getFullYear()} - ${dateObj.getHours()-12}:${getFullMinutes()} PM`;
    }
    return `${dateObj.getDate()} ${month} ${dateObj.getFullYear()} - ${dateObj.getHours()}:${getFullMinutes()} AM`;
  }
  const finalDate = date();
  return finalDate;
};

export default useCreateDate;
