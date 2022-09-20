import { FormControl } from "@angular/forms"
import { QuestionTypeEnum } from "../enums/question-type.enum"

export interface CreateQuestionFormModel {
    questionType: FormControl<QuestionTypeEnum | null>
    questionMessage: FormControl<string | null>
}