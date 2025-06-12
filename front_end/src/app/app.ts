import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // HttpClient Import

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'front_end';
  private http = inject(HttpClient);  // HttpClient 주입

  // 백엔드 API 주소
  private backendUrl = 'https://localhost:7277';  // http인지 https인지 확인 잘해야할듯

  // 버튼 클릭 시 실행될 function
  onTestApiCall() {
    console.log('api호출을 시도합니다...');
    this.http.get(`${this.backendUrl}/api/Test`).subscribe({
      next : (response) => {
        console.log('API 응답 성공 : ', response);
        alert(JSON.stringify(response));
      },
      error : (error) => {
        console.error('API 응답 오류 : ', error);
        alert('API 호출에 실패했습니다. 브라우저 개발자 도구의 콘솔 탭을 확인하세요.');
      }
    });
  }
}
