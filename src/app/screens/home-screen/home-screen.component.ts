import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jobs } from 'src/assets/jobs';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('tech', {read: ElementRef})techWrapper?: ElementRef;
  public showButton = true;
  public yearsOfExp = 0;
  public jobTags: string[] = [];
  public jobs = jobs;

  public ngOnInit() {
    this.yearsOfExp = this.yearsOfExperience();
    this.jobTags = [
      ...new Set(jobs.flatMap(job => {
        return job.skills
      }).sort())
    ];
    window.addEventListener('scroll', _ => {
      this.showButton = document.documentElement.scrollTop < 500;
    });
  }

  public moveToDescription() {
    const top = this.techWrapper?.nativeElement.offsetTop ?? 0;
    window.scroll({top, behavior: 'smooth'});
  }

  public yearsOfExperience() {
    const year = new Date().getFullYear();
    return year - 2013;
  }
}
