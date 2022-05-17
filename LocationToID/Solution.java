public class Solution {
    public static String solution(long x, long y) {
        //Your code here
        int n = ((int)x + (int)y - 2);
        int result = (n * (n + 1)) / 2;
        return Integer.toString(result + (int)x);
    }
    public static void main(String[] args) {
        System.out.println(Solution.solution(5, 10)); // 96
        System.out.println(Solution.solution(3, 2)); // 9
    }
}
