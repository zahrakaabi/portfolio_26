/* -------------------------------------------------------------------------- */
/*                                    TYPES                                   */
/* -------------------------------------------------------------------------- */
export type MoodOption = {
  $id: string;
  text_color: string;
  background_color: string;
  image: string;
};

export type ProjectType = {
  $id: string,
  title_1: string,
  title_2: string,
  image: string,
  details: string,
  src: string,
  color: string,
  techs: string,
  description: string,
  video?: string
};