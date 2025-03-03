import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserMusicianService } from '../services/user-musician.service';

@Component({
  selector: 'app-user-musician-list',
  templateUrl: './user-musician-list.component.html',
  styleUrls: ['./user-musician-list.component.scss'],
  standalone: true, // If you're using standalone components
  imports: [CommonModule] // Add this line if standalone
})
export class UserMusicianListComponent implements OnInit {
  userMusicians: any[] = [];

  constructor(private userMusicianService: UserMusicianService) {}

  ngOnInit(): void {
    this.userMusicianService.getUserMusicians().subscribe((data) => {
      console.log('Received data:', data);
      this.userMusicians = data;
    });
  }
}