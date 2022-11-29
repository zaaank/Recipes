export interface AddRecipeSimpleForm{
  'choose-group': 'Zajtrk'| 'Malica'| 'Kosilo'| 'Večerja'| 'Nekaj Sladkega';
  name: string;
  "upload-photo": string;
  description: string;
}
