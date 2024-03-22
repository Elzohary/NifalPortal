import { Component } from '@angular/core';
import { IwhatWeProvide } from '../../Models/iwhat-we-provide';

@Component({
  selector: 'app-what-we-provide',
  standalone: true,
  imports: [],
  templateUrl: './what-we-provide.component.html',
  styleUrl: './what-we-provide.component.scss'
})
export class WhatWeProvideComponent {
  whatWeProvide: IwhatWeProvide[] = [
    {index:1, title: 'Inspection', description: 'Ensure the integrity of your assets with our thorough Inspection services. Our expert team employs state-of-the-art techniques to assess and evaluate, providing comprehensive insights to maintain operational excellence.'},
    {index:2, title: 'Mentinace', description: 'Trust us to keep your infrastructure in peak condition. Our Maintenance services are designed for reliability, offering proactive solutions to enhance the lifespan and performance of your facilities.'},
    {index:3, title: 'Civil Works', description: 'Building tomorrow\'s foundations today. Our Civil Works service combines expertise and innovation to deliver construction solutions tailored to your needs. From concept to completion, we turn visions into reality.'},
    {index:4, title: 'Patrolling', description: 'We Move, We Act.\n With our Patrolling services, we provide vigilant surveillance and rapid response, ensuring that we can identify the problem and solve in a blink.'},
  ];
}
