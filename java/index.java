import java.util.Arrays;

class Solution {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int[] arr = {3,30,34,5,9};
    System.out.println(sol.largestNumber(arr));
  }
  public String largestNumber(int[] nums) {
      String[] arr = bubbleSort(nums);
      StringBuffer sb = new StringBuffer();
      for(String s: arr) {
          sb.append(s);
      }
      return sb.toString();
  }
  private String[] bubbleSort(int[] nums) {
      String[] arr = new String[nums.length];
      for(int i = 0; i < nums.length; i++) {
          arr[i] = Integer.toString(nums[i]);
      }
      for(int i = arr.length - 1; i >= 0; i--) {
          for(int j = 0; j < i; j++) {
              if(compareTo(arr[i], arr[j])) {
                  String t = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = t;
              }
          }
          System.out.println(Arrays.toString(arr));
      }
      return arr;
  }
  private boolean compareTo(String a, String b) {
      System.out.println("%s, %s", $a, )
      int minLen = Math.min(a.length(), b.length());
      for(int i = 0; i < minLen; i++) {
          if(a.charAt(i) > b.charAt(i)) {
              return true;
          }else if(a.charAt(i) < b.charAt(i)) {
              return false;
          }
      }
      System.out.println(a);
      System.out.println(b);
      if(a.length() > minLen) {
          System.out.println("false");
          return false;
      }else if(b.length() > minLen) {
          System.out.println("true");
          return true;
      }
      System.out.println("false111");
      return false;
  }
}