import java.util.ArrayList;

public class Solution {
    public static int count(int[] data, int i) {
        int amount = 0;
            for (int j : data) {
                if (i == j) {
                    amount++;
                }
            }
        return amount;
    }
    public static int[] ArrayList2intArray(ArrayList<Integer> inputArrayList) {
        int[] outputintArray = new int[inputArrayList.size()];
        for (int i = 0; i < inputArrayList.size(); i++) {
            outputintArray[i] = inputArrayList.get(i);
        }
        return outputintArray;
    } 
    public static int[] solution(int[] data, int n) {
        // Your code here
        ArrayList<Integer> outputArrayList = new ArrayList<Integer>();
        for (int i : data) {
            int amount = Solution.count(data, i);
            if (amount <= n) {
                outputArrayList.add(i);
            }
        }
        int[] output = ArrayList2intArray(outputArrayList);
        return output;
    }
}

Solution.solution({1, 2, 3}, 0);
Solution.solution({1, 2, 2, 3, 3, 3, 4, 5, 5}, 1); //[1,4]
