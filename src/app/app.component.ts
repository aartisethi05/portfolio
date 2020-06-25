import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Aarti Sethi';
  email: string = 'aartisethi8194@gmail.com';
  employer_name: string = 'Kochar InfoTech Pvt Ltd';
  job_title: string = 'Junior Engineer';
  profile: string = 'Software Engineer';
  degrees = [
    {
      institute: 'Guru Nanak Dev University, Amritsar',
      session: '2016-2019',
      class: 'Master of Computer Applications',
    },
    {
      institute: 'BBK DAV College, Amritsar',
      session: '2013-2016',
      class: 'Bachelor of Computer Applications',
    },
  ];
}
