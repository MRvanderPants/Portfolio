import { Component, Input } from '@angular/core';
import { Technology, TechnologyCategory } from 'src/types/technology';

@Component({
  selector: 'app-knowledge-matrix',
  templateUrl: './knowledge-matrix.component.html',
  styleUrls: ['./knowledge-matrix.component.scss']
})
export class KnowledgeMatrixComponent {
  @Input() public technologies: Technology[] = [];
  @Input() public title: string = '';

  public ratingToArray(tech: Technology) {
    return new Array(tech.knowledgeRating).fill(0);
  }

  public yearsOfExperience(tech: Technology) {
    const year = new Date().getFullYear();
    return year - parseInt(tech.fromDate, 10);
  }
}
