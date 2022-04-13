#include <iostream>
#define SIZE 7
const int arr[SIZE]{1,1,1,};
int subArraySum(const int arr[],int k,const int& size)
{
    if(size == 1 && arr[0] != k) return 0;
    if(size ==1 && arr[0] == k) return 1;
    //case of one element not equal to k
    int dynamic[size+1];
    //have a 'dynamic' array with array of size+1
    int i = 0,j = 1;
    dynamic[i] = 0;
    dynamic[j] = arr[i];
    int res = 0;
    while(j < size)
    {
        dynamic[j+1] = dynamic[j]+arr[j];
        int temp = dynamic[j+1]-dynamic[i];
        if(temp == k)
        {
            ++j;
            ++i;
            ++res;
        }
        else if(temp < k) ++j;
        else ++i;
    }
    return res;
}
const char A[6] = {'C','A','C','A','T','E'};
const char B[3] = {'C', 'A','T'};
int findSubCount(){
    int CountMatrix[3][6];
    for(int i=0; i<3; ++i){
        for(int j=0; j<6; ++j){
            CountMatrix[i][j] = (A[j] == B[i]) ? 1:0;
            std::cout<<CountMatrix[i][j]<<",";
        }
        std::cout<<std::endl;
    }

    return 0;       
}

int coinchange(int * coins, int numOfCoins, int targetAmount) {
  int dp[targetAmount + 1] = {}; // all values initialised to 0 .

  dp[0] = 1;

  for (int i = 1; i <= targetAmount; i++) {
    for (int j = 0; j < numOfCoins; j++) {
      if (coins[j] <= i) {
        dp[i] += dp[i - coins[j]];
      }

    }
  }

  return dp[targetAmount];

}
int main()
{
    // std::cout << subArraySum(arr,3,7) << std::endl;
    // std::cout <<findSubCount()<<std::endl;
    int coins [3] = {1,2,4};
    std::cout<<coinchange(coins,3,4)<<std::endl;
}