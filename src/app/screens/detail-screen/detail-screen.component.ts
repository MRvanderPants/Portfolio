import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, projects } from 'src/assets/projects';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss']
})
export class DetailScreenComponent implements OnInit {
  public project: Project | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '-1', 10);
    this.project = projects.find(p => p.id === id)!;
  }

  public goBack() {
    this.location.back();
  }
}
