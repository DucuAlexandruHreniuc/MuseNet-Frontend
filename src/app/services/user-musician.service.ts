import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMusicianService {
  private apiUrl = 'http://localhost:8080/api/user-musicians'; // Adjust if needed
  private http = inject(HttpClient);

  // Function to get token (replace with actual logic)
  private getToken(): string {
    return localStorage.getItem('authToken') || 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0MzUwNTk2OSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzQwOTEzOTY5fQ.Uss0dmY_VLuFNkMZdVBpKB3vPbgMDcft-TDPtCmmWiDu7Hdv4kkpTQt4a4mmFp5N4OO6tPIpenmJQYBivbDJWA'; // Get token from localStorage (adjust if needed)
  }

  // HTTP Options with Authorization header
  private getHttpOptions() {
    const token = this.getToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  // Fetch user musicians
  getUserMusicians(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHttpOptions());
  }
}
