#include <iostream>
using namespace std;

int main() {
    // square patern
    int n;
    cout<<"enter your desired number;";
    cin>>n;
    for (int i=1;i<=n;i++){
        char alpha='A';
        for(int j=0;j<n;j++){
            cout<<alpha;
            alpha+=1;
        }
        cout<<"\n";
        
    
    }
    int ni;
    cout<<"enter your desired int number;";
    cin>>ni;
    int w=1;
    for (int in=1;in<=ni;in++){
        for(int ji=0; ji<ni;ji++){
            cout<<w;
            w++;
            
        }
    cout<<"\n";
   
    

    }
    int r;
    cout<<"enter your desired int number;";
    cin>>r;
    for(int inn=0;inn<r;inn++){
        for(int jn=0;jn<inn+1;jn++ ){
            cout<<"*";
        }
    cout<<"\n";
    }
    // triangle pattern of same digits
    int ri;
    cout<<"enter your desired int number;";
    cin>>ri;
    int we=1;
    for(int iw=0;iw<ri;iw++){
        for(int jew=0;jew<iw+1;jew++){
            cout<<we;
        }
        
    cout<<"\n";
    we=we+1;
    }
    int na;
    cout<<"enter your desired int number;";
    cin>>na;
    for(int iin=0;iin<na;iin++){
        int natural=1;
        for(int jin=0;jin<iin+1;jin++){
            cout<<jin+1;
            natural+=1;
        }
    cout<<"\n";
    }
    // reverse triangle
    int raw;
    cout<<"enter your desired int x number;";
    cin>>raw;
    for(int ruin=0;ruin<raw;ruin++){
        for(int juin=ruin+1;juin<ruin+2 && juin>0;juin--){
            cout<<juin;
        }
    cout<<"\n";
    }
    // floyd's triangle
    int ruin;
    cout<<"enter your desired int xx number;";
    cin>>ruin;
    int voy=1;
    for(int y=0; y<ruin; y++){
        for(int you=0; you<y+1;you++){
            cout<<voy;
            voy++;
            
        }
    cout<<"\n";
    }
    // inverted triangle
    int nico;
    cout<<"write";
    cin>>nico;
    for(int hope=nico;hope<nico+1 && hope>0;hope--){
        int l=1;
        for(int jun=0;jun<hope+1;jun++){
            cout<<l;
            
        }
    cout<<"\n"<<" ";
    l++;
    
    }
    
    
    
    
    
        

    return 0;
}