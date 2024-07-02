#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void print_result(vector<vector<int>> *arr)
{
    int size = arr->size();

    cout << "Result: [";
    for (int i = 0; i < size; i++)
    {
        cout << "[" << (*arr)[i][0] << ", " << (*arr)[i][1] << "]";
        if (i < size - 1)
        {
            cout << ", ";
        }
    }
    cout << "]" << endl;
}

vector<vector<int>> find_subarrays_sum(vector<int> *arr, int target)
{
    vector<vector<int>> result;
    int n = arr->size();

    for (int i = 0; i < n; i++) {
        // Cut the loop if the current element is greater than the target (improve performance)
        if (arr->at(i) > target) break;

        // push result if the pairElement is found and not the same element
        int pairElement = target - arr->at(i);
        if (find(arr->begin(), arr->end(), pairElement) != arr->end() && find(arr->begin(), arr->end(), pairElement) != arr->begin() + i) {
            vector<int> subarray = vector<int>{arr->at(i), pairElement};
            if (find(result.begin(), result.end(), subarray) == result.end() && find(result.begin(), result.end(), vector<int>{pairElement, arr->at(i)}) == result.end())
                result.push_back(subarray);
        }
    }
    return result;
}

int main()
{
    cout << "Array Manipulation Challenge" << endl;

    // Variable Library
    int target = 6;                 // target sum
    vector<int> arr{1, 2, 3, 4, 5}; // array container
    vector<vector<int>> result;     // result container

    // In Case of User Input (Uncomment the following code)
    /* // Input array size
    int n;                          // size of array
    int x;                          // input element
    cout << "Enter the size of array: ";
    cin >> n;

    arr.clear();
    cout << "Enter the elements of array (1 2 3 ... 9 10): ";
    for (int i = 0; i < n; i++)
    {
        cin >> x;
        arr.push_back(x);
    }

    // Input Target
    cout << "Enter the target sum: ";
    cin >> target;
    */

    // Solve the problem
    sort(arr.begin(), arr.end()); // Sort the array
    result = find_subarrays_sum(&arr, target);

    print_result(&result);

    return 0;
}