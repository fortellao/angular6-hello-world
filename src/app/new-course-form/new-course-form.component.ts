import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    let removeIndex = this.topics.controls.indexOf(topic);
    this.topics.removeAt(removeIndex);
  }
}
