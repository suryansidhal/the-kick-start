#include <iostream>
#include <climits>
using namespace std;
int ValueIND(int arr[], int target, int size){
    for(int i=0;i<size;i++){
        if(target==arr[i]){
            return i;
        }
    }
    return -1;
    
}
// sum and product
int SumArray(int arr[], int size){
    int SUM=0;
    int PRODUCT=1;
    for(int i=0; i< size; i++){
        SUM+=arr[i];
        PRODUCT=PRODUCT*arr[i];
        
    }
    return PRODUCT;
    
}
// swap max and min
void SWA(int arr[], int size){
    int smallest=INT_MAX;
    int largest= INT_MIN;
    int smallestindex=-1;
    int largestindex=-1;
    for(int i=0;i<size;i++){
        if(smallest>arr[i] ){
             smallest=arr[i];
             smallestindex=i;
        }
        if(largest<arr[i]){
            largest=arr[i];
            largestindex=i;
        }
    }
    swap(arr[smallestindex],arr[largestindex]);
}
    int main(){
   
    int arr[]={1,2,3,4,5};
    int size=5;
    cout<<SumArray(arr,size)<<"\n";
    SWA(arr,size);
    for(int j=0;j<size;j++){
        cout<<arr[j]<<" ";
        
    }
    
    
   
    int mark[size]={};
    int smallest= INT_MAX;
    int largest= INT_MIN;
    cout<<"write teh values:";
    for(int i=0;i<size;i++){
        cin>>mark[i];
    
    }
    for(int i=0;i<size;i++){
    smallest= min(mark[i],smallest);
    largest=max(mark[i],largest);
    }
    cout<<"smallest:"<< smallest<<"\n";
    cout<<"largest:"<<largest<<"\n";
    
    for(int i=0;i<size;i++){
        if(smallest==mark[i]){
            cout<<i<<"\n";
        }
        
        
        
    }
    // find target and return index
    int arr[]={4,55,99,5,2};
    int s=ValueIND( arr,  99,  5);
    cout<<s;
 
//vectors
    vector<int> vec1={1,2,3,3,4,2,1};
    int num=0;
    for( int val: vec1){
        num^=val;
    }
    cout<<num;


        
    }
    
    
   
    
    
    
    return 0;} 
