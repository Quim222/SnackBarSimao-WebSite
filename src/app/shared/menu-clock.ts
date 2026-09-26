// Horário português, independentemente do fuso horário do visitante.
export function lisbonWeekday(date = new Date()): number {
  const day = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Lisbon',
    weekday: 'short',
  }).format(date);
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(day);
}
