#include <stdio.h>
#include <string.h> //str~
#include <stdlib.h> //malloc
#define max_size  50 //책 제목 길이가 최대 50.
void book_prn(char **book,int n);
int main(){
     char temp[max_size]; //임시 저장
     int n; //총 팔린 책 개수 N
     scanf("%d",&n);
     char *book[n];
     for(int i=0; i<n; i++){
         scanf("%s",temp);
         book[i]=(char *)malloc(strlen(temp));
         strcpy(book[i], temp);
     }//입력받은 크기만큼 동적할당 해서 복사했다.
     book_prn(book,n);
     for(int i=0; i<n; i++){
         free(book[i]); //해제
     }
     return 0;
 }
 
 void book_prn(char **book, int n){
 
     int oldcount,count;
     char bk[max_size]; //책 임시저장
     char m_bk[max_size]; //many book
     oldcount = 0;
     for (int i = 0; i < n; i++) {
         strcpy(bk,book[i]);
         count = 1;
         for (int j = i + 1; j < n; j++) {
             if (strcmp(bk,book[j])==0) {
                 count++;
             }
         }
         if (count > oldcount) {
             strcpy(m_bk,bk);  
             oldcount = count;
         } 
         if (count == oldcount){///  n=6 {s,s,s,a,a,a}경우
             if (strcmp(m_bk,bk)>0){ //반대의 경우 <0은 생각하지않는다.
                 strcpy(m_bk,bk); //애초에 출력은 한 개만 하면 되고,
             } //<0 경우 이미 빠른순서의 책제목이 들어가있음.
         }
     }
     printf("%s", m_bk);
 }