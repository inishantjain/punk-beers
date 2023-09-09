export default interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  food_pairing: string[];
  volume: Record<string, string>;
  ph: number;
}
