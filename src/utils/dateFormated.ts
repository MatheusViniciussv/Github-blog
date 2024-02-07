export function FormatedDate(date: string) {

  const targetDate = new Date(date)

  const currentDate = new Date();

  const differenceMs = Number(currentDate) - Number(targetDate)

  const differenceSec = Math.floor(differenceMs / 1000);

  const days = Math.floor(differenceSec / (3600 * 24));
  const hours = Math.floor((differenceSec % (3600 * 24)) / 3600);
  const minutes = Math.floor((differenceSec % 3600) / 60);

  const prefix = "Há";
  let formated = prefix;

  if (days > 0) {
    return formated += ` ${days} dias`;
  }

  if (hours > 0) {
    return formated += ` ${hours} horas`;
  }

  if (minutes > 0) {
    return formated += ` ${minutes} minutos`;
  }

  return formated; 
}