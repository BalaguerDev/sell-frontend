

export const getGreetingMessage = (userName) => {
  const hours = new Date().getHours()
  const greetings = {
    morning: `Buenos días ${userName} ☀️`,
    afternoon: `Buenas tardes ${userName} 👋🏼`,
    night: `Buenas noches ${userName} 🌙`
  }

  return hours >= 7 && hours < 14
  ? greetings.morning 
  : hours >= 14 && hours < 21
  ? greetings.afternoon
  : greetings.night


}

