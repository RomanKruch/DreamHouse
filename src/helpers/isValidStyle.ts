export type TStyles = 'elite' | 'vip' | 'extra';
const styles: TStyles[] = ['elite', 'vip', 'extra'];

export const isValidStyle = (val: string): val is TStyles => {
  return styles.includes(val as TStyles);
};
