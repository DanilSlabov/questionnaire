import { FormArray, FormControl } from "@angular/forms";

export interface SuggestedAnswersArrayForm {
    items: FormArray<FormControl<string>>;
}