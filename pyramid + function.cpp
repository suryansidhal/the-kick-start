using namespace std;
int main(){
    int n=4;
    
    for(int i=0;i<n;i++){
        int j=1;
        for(int e=3-i;e>0;e--){
            cout<<" ";
        }
        for(int w=0;w<i+1;w++){
            cout<<j++;
    
        
        }
        for(int d=i;d>0;d--){
            cout<<d;
        }
        cout<<"\n";
  
// fun for prime or not
#include <iostream>
using namespace std;
bool IsPrime(int n){
    for(int i=2;i<n;i++){
        if(n%i==0){
            return false;
            
        }else{
            
            return true;
        }
           }
    }
          