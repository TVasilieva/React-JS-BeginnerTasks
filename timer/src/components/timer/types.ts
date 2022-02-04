export interface ComponentProps {
  settings: Date;
  onComplete: () => void;
  children(hours:number, minutes:number, seconds:number): any;
}
