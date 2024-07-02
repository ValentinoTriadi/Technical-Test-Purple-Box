#include <iostream>
#include <algorithm>
using namespace std;

bool isAnagram(string str1, string str2)
{
    // Check if the length of the strings are equal
    if (str1.length() != str2.length()) return false;

    // Sort the strings
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());

    // Compare the strings
    for (int i = 0; i < str1.length(); i++) {
        if (str1[i] != str2[i]) return false;
    }

    return true;
}

int main()
{

    // Variable Library
    string str1 = "listen";
    string str2 = "silents";

    // In Case of User Input (Uncomment the following code)
    /* // Input strings
    str1 = "";
    str2 = "";
    cout << "Enter the first string: ";
    cin >> str1;
    cout << "Enter the second string: ";
    cin >> str2; */

    cout << "String Anagram Detection" << endl;
    cout << str1 << " and " << str2 << " are " << (isAnagram(str1, str2) ? "" : "not ") << "anagrams." << endl;

    return 0;
}