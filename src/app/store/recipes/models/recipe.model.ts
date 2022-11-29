export interface PostRecipeModel{
  name: string;
  directions: string;
  group: string;
  ingredientIds: number[];
}

export interface GetRecipesByGroup{
  id: number;
  name: string;
  group: string;
  directions: string;
  ingredientIds: number[];
}
