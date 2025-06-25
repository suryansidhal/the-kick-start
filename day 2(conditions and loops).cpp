#include <iostream>
using namespace std;

int main() {
    // VOTING AGE CLARIFICATION
    int number;
    cout<< "please enter your age:";
    cin>>number;
    if(number>=18 && number%2!=0){
        cout<<"congratulations! you are currently eligible for voting. VOTE RIGHT!\n"<<"WITH YOUR AGE ODD BUT ELIGIBLE, IT'S AN ODDIER WOW DAY. JUST TRYING TO MAKE YOUR DAY LESS ODD.\n ";
    }else if(number >=18 and number%2==0){
        cout<<"congrats!! you are eligible for voting\n"<<"Along with it, you are EVEN going well with your age. HOPE THE JOKE MADE YOUR DAY 'EVEN BRIGHTER!'"<< "\n";
     }
    else{
        cout<<"you are uNderaged! looking forward to your future cotributions for the country\n";
    }
    // UPPERCASE AND LOWERCASE
    char your;
    cout<<"enter your character;";
    cin>>your;
    if(your>=65 && your<=90){
        cout<<"your character is uppercase\n";
    }else{
        cout<<"your character is lowercase\n";
    }
    // UPPERCASE VS LOWERCASE
    char youring;
    cout<<"enter your character;";
    cin>>youring;
    cout<<(youring>=65 && youring<=90?"uppercase":"lowercase")<<"\n";
    // COUNTING TILL USERINPUT N
    int nuh;
    int count=1;
    cout<<"enter n:";
    cin>>nuh;
    while(count<=nuh){
        cout<<count<<" ";
        count++;
    }
    cout<<"\n";
    // SUM OF ALL NUMBERSS FROM 1 TO N
    int variableN;
    cout<<"please enter your variable n;";
    cin>>variableN;
    int co=1;
    int su=0;
    while(co<=variableN){
        su = su + co;
        co++;

        
    }
    cout<<su<<"\n";
    // SUM OF ALL ODD NUMBERS FROM 1 TO N
    int odd;
    cout<<"enter your number;";
    cin>>odd;
    int sum=0;
    for(int i=1;i<=odd;i+=2){
        sum+=i;
        
    }
    cout<<sum<<"\n";
    // SUM OF ALL EVEN NOS FROM 1 TO N
    int even;
    cout<<"enter your number ;";
    cin>>even;
    int summ=0;
    for(int i=0;i<=even;i+=2){
        summ+=i;
    }
    cout<<summ<<"\n";
    // CHECKING IF A NUMBER IS PRIME OR NOT
    int natural;
    cout<<"enter your number;";
    cin>>natural;
    bool IsPRIME=true;
    for(int i=2; i*i<=n;i++){
        if (natural%i==0){
            IsPRIME=false;
            break;
            
        }
    }
    
    if(IsPRIME==true){
        cout<<"it is prime";
    }else{
        cout<<"it isnt prime";
    }
    return 0;
    }
