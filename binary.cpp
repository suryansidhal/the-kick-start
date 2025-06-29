#include <iostream>
using namespace std;
// decimal to binary

int main() {
    int number=5;
    int num=0;
    int power=1;
    while(number>0){
        int remain=number%2;
        number=number/2;
        num+=remain*power;
        power=power*10;
    }
    cout<<num<<"\n";
    // binary to decimal
    int you=101101;
    int sumans=0;
    int pow=1;
    while(you>0){
        int rem=you%10;
        sumans+=rem*pow;
        you=you/10;
        pow=pow*2;
    }
    cout<<sumans;
      
    return 0;
}