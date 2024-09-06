export interface Actor {
  name: string;
  profile_path: string;
  character: string;
  id: number;
}
export interface Credits {
  cast: Actor[];
}
