import { FormArray, FormControl } from "@angular/forms";

export interface MultipleAnswersFormModel {
    selectedByIndex: FormArray<FormControl<boolean | null>>;
}