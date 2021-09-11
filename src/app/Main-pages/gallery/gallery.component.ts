import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // I am using fixed array but we can fetch data from API and generate cards accordingly

  information = [{
    image: 'assets/images/pic_3.jpg',
    name: 'Heading1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam voluptatum ex excepturianimi odio vitae expedita earum, repudiandae dolores facere eius, necessitatibus corrupti minus quisquasi mollitia, obcaecati architecto.'
  }, {
    image: 'assets/images/pic_2.jpg',
    name: 'Heading2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam voluptatum ex except animi odio vitae expedita earum, repudiandae dolores facere eius, necessitatibus corrupti minus quasi mollitia, obcaecati architecto.'
  }, {
    image: 'assets/images/pic_1.jpg',
    name: 'Heading3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam voluptatum ex excepturianimi odio vitae expedita earum, repudiandae dolores facere eius, necessitatibus corrupti minus quisquasi mollitia, obcaecati architecto.'
  }
  ];

}
