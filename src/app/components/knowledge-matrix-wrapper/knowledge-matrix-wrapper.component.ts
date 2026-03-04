import { Component, Input } from '@angular/core';
import { Technology, TechnologyCategory } from 'src/types/technology';
import { KnowledgeMatrixComponent } from '../knowledge-matrix/knowledge-matrix.component';

@Component({
    selector: 'app-knowledge-matrix-wrapper',
    templateUrl: './knowledge-matrix-wrapper.component.html',
    styleUrls: ['./knowledge-matrix-wrapper.component.scss'],
    standalone: true,
    imports: [KnowledgeMatrixComponent]
})
export class KnowledgeMatrixWrapperComponent {
  @Input() technologies: Technology[] = [];

  public getTechnologiesForCategory(category: TechnologyCategory) {
    return this.technologies?.filter(a => a.category === category) || [];
  }
}
