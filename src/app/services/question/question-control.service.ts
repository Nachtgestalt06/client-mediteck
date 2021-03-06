import { Injectable } from '@angular/core';
import {QuestionBase} from '../../models/question-base';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor( private formBuilder: FormBuilder) { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
      //   : new FormControl(question.value || '');

      group[question.key] = question.required ? new FormArray([this.createItem()], Validators.required)
        : new FormArray([this.createItem()]);
    });
    return new FormGroup(group);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
}
