#include <iostream>

using namespace std;


int main() {
  
  int age=35;
  
  char name ='A';
 
  float PIE = 3.14f;
  
  bool IsGood= true or false;

  int takingITaway=name;
   
  int sayAGE;
    
  cout<< "please write your age for security purpose;";
   
  cin>> sayAGE;
    
  int fatherAGE;
    
  cout<< "please write your father's age for security purpose;";
      cin>> fatherAGE;
  
  cout<<"here's the summation you initiated:" << (sayAGE+fatherAGE)<<"\n"<< "along with remainder and quotient respectively;"<< (sayAGE% fatherAGE)<<"   " << "AND  "<< (sayAGE / (double)fatherAGE)<<"\n";

    
  cout << "your are doing well \n"<< sizeof(age)<<"\n" <<age<<"\n"<< sizeof(PIE)<<"\n"<< PIE;
    
    
  

  return 0;
}